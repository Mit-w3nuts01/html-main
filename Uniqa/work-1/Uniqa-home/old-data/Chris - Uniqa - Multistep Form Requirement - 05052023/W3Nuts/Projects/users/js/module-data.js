function getDetail(url, responseNode, agencyHash, src_keys, tar_keys, trigger_functions = null) {
    let cachedData = sessionStorage.getItem(url + '-' + agencyHash);
    if (!cachedData) {
        $.ajax({
            url: './edbic/' + url + '?agency_hash=' + agencyHash,
            //url: testurl + url + '?agency_hash=' + agencyHash,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (responseModules) {
                for (var prop in responseModules) {

                    if (responseNode.split('.')[0] == prop) {

                        var this_obj = responseModules[prop];

                        for (const [db_key, db_value] of Object.entries(this_obj)) {
                            var i = 0;
                            if (typeof db_value === 'object' && db_value !== null) {
                                if (responseNode.split('.')[1] == db_key) {
                                    //console.log(db_value[0]);
                                    for (const [sdb_key, sdb_value] of Object.entries(db_value[0])) {
                                        var x = 0;
                                        src_keys.forEach(function(src_key){
                                            if (src_key == sdb_key) {
                                                $('#'+tar_keys[x]).val(sdb_value);
                                            }
                                            x++;
                                        });
                                    }
                                }
                            } else {
                                src_keys.forEach(function(src_key){
                                    if (src_key == db_key) {
                                        $('#'+tar_keys[i]).val(db_value);
                                    }
                                    i++;
                                });
                            }
                        }
                    }
                }
            }
        });

    } else {

        responseModules = JSON.parse(cachedData);
        for (var prop in responseModules) {

            if (responseNode.split('.')[0] == prop) {
                var this_obj = responseModules[prop];

                for (const [db_key, db_value] of Object.entries(this_obj)) {
                    var i = 0;
                    if (typeof db_value === 'object' && db_value !== null) {
                        if (responseNode.split('.')[1] == db_key) {
                            for (const [sdb_key, sdb_value] of Object.entries(db_value[0])) {
                                var x = 0;
                                src_keys.forEach(function(src_key){
                                    if (src_key == sdb_key) {
                                        $('#'+tar_keys[x]).val(sdb_value);
                                    }
                                    x++;
                                });
                            }
                        }
                    } else {
                        src_keys.forEach(function(src_key){
                            if (src_key == db_key) {
                                $('#'+tar_keys[i]).val(db_value);
                            }
                            i++;
                        });
                    }
                }
            }
        }
    }

    if (trigger_functions) {
        trigger_functions.forEach(function(function_name) {
            eval(function_name+"()");
        });
    }
}

function loadAndReplaceWithOptions(url, responseNode, agencyHash, parentElementKey, templateKey, contentKeys, contentFormatter = null, count = null, optionKeys = null, optionValues = null, return_message = null) {

    var this_url = './edbic/' + url + '?agency_hash=' + agencyHash;

    if (optionKeys) {
        var opt_string = "?";
//		for (const [opt_idx, opt_key] of optionKeys.entries()) {
//			var vals = optionValues[opt_idx];
//			vals = vals.replaceAll('{{','',vals);
//			vals = vals.replaceAll('}}','',vals);
//			opt_string += opt_key + "=" + vals + "&";
//			//console.log('key: ' + opt_key + ', values: ' + vals);
//		}
        opt_string += 'filter_keys=' + optionKeys;
        opt_string += '&filter_values=' + optionValues;
        opt_string += '&agency_hash=' + agencyHash;
        //console.log(opt_string);
        this_url = './edbic/' + url + opt_string;
        //console.log(this_url);
    }

    $.ajax({
        url: this_url,
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (responseModules) {
            sessionStorage.setItem(url + '-' + agencyHash, JSON.stringify(responseModules));
            //console.log('von BIC: ' + responseNode);
            //console.log('inhalt: ' + responseModules);
            handleResponse(url, responseModules, responseNode, templateKey, contentKeys, parentElementKey, contentFormatter, count, return_message);
        }
    });
}

function loadAndReplace(url, responseNode, agencyHash, parentElementKey, templateKey, contentKeys, contentFormatter = null, count = null) {
    let cachedData = sessionStorage.getItem(url + '-' + agencyHash);

    if (!cachedData) {
        $.ajax({
            url: './edbic/' + url + '?agency_hash=' + agencyHash,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (responseModules) {
                sessionStorage.setItem(url + '-' + agencyHash, JSON.stringify(responseModules));
                handleResponse(url, responseModules, responseNode, templateKey, contentKeys, parentElementKey, contentFormatter, count);
            }
        });
    } else {
        handleResponse(url, JSON.parse(cachedData), responseNode, templateKey, contentKeys, parentElementKey, contentFormatter, count);
    }
}

function handleResponse(url, responseModules, responseNode, templateKey, contentKeys, parentElementKey, contentFormatter = null, count = null, return_message = null) {

    let responseData = responseNode !== false ? getProperty(responseNode, responseModules) : responseModules;

    if (!responseData) {
        if (return_message) {
            $(parentElementKey).append(return_message);
        }
        return;
    }

    if (contentFormatter) {
        responseData = contentFormatter(responseData);
    }

    if (responseData) {
        $('.infoBox-placeholder-imprint').hide();
        $('.infoBox-placeholder-teammembers').hide();
    }

    if (responseData) {
        const startIndex = sessionStorage.getItem(url + '_current_index_' + responseNode) ?? 0;
        let lastIndex = count ? count + parseInt(startIndex) : responseData.length;

        lastIndex = lastIndex > responseData.length ? responseData.length : lastIndex;

        sessionStorage.setItem(url + '_current_index_' + responseNode, lastIndex);
        //$('#' + responseNode + '_current_index').val(lastIndex);

        for (let i = startIndex; i < lastIndex; i++) {
            let content = responseData[i];
            let contentTemplate = $('#' + templateKey).html();

            for (const item of contentKeys) {
                const regex = new RegExp('{{' + item + '}}', 'g');
                const propertyName = getRealContentKey(item);
                const modifier = getModifier(item);
                contentTemplate = contentTemplate.replace(regex, getPropertyValue(content, propertyName, modifier));
            }

            $(parentElementKey).append(contentTemplate);
        }

    }
}

function loadDetails(id, url, contentItemKey, agencyHash, contentKeys, responseNode, templateKey, contentElementKey, callback = null) {
    let cachedData = sessionStorage.getItem(url + '-' + agencyHash);

    if (!cachedData) {
        $.ajax({
            url: './edbic/' + url + '?agency_hash=' + agencyHash,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (responseModules) {
                sessionStorage.setItem(url + '-' + agencyHash, JSON.stringify(responseModules));
                const data = getProperty(responseNode, responseModules);

                if (!data) {
                    return;
                }

                const item = findItem(id, contentItemKey, data);
                //handleDetails(item, contentKeys, templateKey, contentKeys, contentElementKey, callback);
                handleDetails(item, contentKeys, templateKey, contentElementKey, callback);
            }
        });
    } else {
        const data = getProperty(responseNode, JSON.parse(cachedData));

        if (!data) {
            return;
        }

        const item = findItem(id, contentItemKey, data);
        handleDetails(item, contentKeys, templateKey, contentElementKey, callback);
    }
}

function handleDetails(contentItem, contentKeys, templateKey, contentElementKey, callback=null) {
    let contentTemplate = $('#' + templateKey).html();

    for (const item of contentKeys) {
        const regex = new RegExp('{{' + item + '}}', 'g');
        const propertyName = getRealContentKey(item);
        const modifier = getModifier(item);
        contentTemplate = contentTemplate.replace(regex, getPropertyValue(contentItem, propertyName, modifier));
    }

    $(contentElementKey).append(contentTemplate);

    if (callback) {
        callback(contentItem);
    }
}

function findItem(id, contentItemKey, contentItems) {
    for (const item of contentItems) {
        if (item[contentItemKey] === id) {
            return item;
        }
    }

    return null;
}

function getPropertyValue(contentItem, propertyName, modifier) {
    let value = contentItem[propertyName];

    if (modifier === 'date') {
        return value.split(' ').shift();
    }

    if (modifier === 'hour') {
        return value.split(' ').pop();
    }

    return value;
}

function getModifier(contentKey) {
    if (contentKey.indexOf(':') === -1) {
        return null;
    }

    return contentKey.split(':').pop();
}

function getRealContentKey(contentKey) {
    return contentKey.split(':').shift();
}

function getProperty( propertyName, object ) {
    if (!object || isObjectEmpty(object)) {
        return null;
    }
    var parts = propertyName.split( "." ),
        length = parts.length,
        i,
        property = object || this;

    for ( i = 0; i < length; i++ ) {
        property = property[parts[i]];
    }

    return property;
}

function isObjectEmpty(value) {
    return (
        Object.prototype.toString.call(value) === '[object Object]' &&
        JSON.stringify(value) === '{}'
    );
}