if(window.location.origin.indexOf("myagentur")>=0 || window.location.origin.indexOf("localhost")>=0 || window.location.origin.indexOf("null")>=0){throw new Error("Cookiemanager unterbunden");}
let linkDSE;
if (linkDSE === undefined) {
  let linkDSE="./datenschutz#cookies";
}

function getParams(a){var b=document.getElementsByTagName("script");for(var i=0;i<b.length;i++){if(b[i].src.indexOf("/"+a)>-1){var c=b[i].src.split("?").pop().split("&");var p={};for(var j=0;j<c.length;j++){var d=c[j].split("=");p[d[0]]=d[1]}return p}}return{}}
urlParams=getParams('cookie');
if(urlParams['kwsgtm']&&urlParams['kwsgtm']!=false){
    var kwsgtm=urlParams['kwsgtm'];
    if(kwsgtm=="false"){
        var kwsgtm=false;
    }

}
if(urlParams['kwsga']&&urlParams['kwsga']!=false){
    var kwsga=urlParams['kwsga'];
    if(kwsga=="false"){
        var kwsga=false;
    }
}

/* jQuery v3.5.1 */

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}

String.prototype.escape = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    });
};

jQuery("head").append("<style>#hs-eu-cookie-confirmation,#hs-modal{display:none;}body.cookiemanageropen{/*overflow:hidden;*/}.cookieConsentHinweisOverlay{position:absolute;z-index:49995;top:0;left:0;display:none;height:100%;width:100%;overflow:hidden;background:rgba(255,255,255,0.5);/*filter:blur(2px);*/ margin:0;padding:0;}.cookieConsentHinweisOverlay.open{display:block;}.cookieConsentHinweis{max-width:405px;width:auto;height:auto;max-height:650px;overflow:hidden;margin:10px;background:#fff;color:#666;position:fixed;/*absolute;*/ top:75px;left:calc(50% - 215px);z-index:50000;padding:10px 15px;border:2px solid #005aac;outline:10px solid rgba(111,111,111,0.5);-webkit-transition:.3s 0s ease-in-out -webkit-transform,0s .4s opacity;-o-transition:.3s 0s ease-in-out -o-transform,0s .4s opacity;transition:.3s 0s ease-in-out transform,0s .4s opacity;-webkit-transform:translateX(-310%);-ms-transform:translateX(-310%);-o-transform:translateX(-310%);transform:translateX(-310%);opacity:0;hyphens:auto;cursor:default;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}@media screen and (min-width:768px){ .cookieConsentHinweis{ position:fixed;}}.cookieConsentHinweis *{font-family:Arial,Verdana,sans-serif;font-size:12px!important;line-height:160%!important;text-align:justify;color:#666;}.cookieConsentHinweis.open{-webkit-transition:.3s 0s ease-in-out -webkit-transform,0s 0s opacity;-o-transition:.3s 0s ease-in-out -o-transform,0s 0s opacity;transition:.3s 0s ease-in-out transform,0s 0s opacity;-webkit-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);opacity:1}.cookieConsentHinweis label{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;margin:0!important;padding:0;padding-left:40px;}.cookieConsentHinweis label strong{font-weight:bold;}.cookieConsentHinweis p{margin-bottom:15px;margin-top:5px;padding:0;font-weight:normal;font-size:12px!important;}.cookieConsentHinweis p>a:not(.button){color:blue;text-decoration:none;outline:none;}.cookieConsentHinweis h3{font-size:1.4em;text-transform:uppercase;font-weight:bold;margin-top:0;margin-bottom:9px;padding-bottom:7px;cursor:default;}.cookieConsentHinweis .switch{width:56px;height:30px;float:left;margin-left:-65px;margin-top:-5px;}.cookieConsentHinweis input[type=checkbox]{opacity:0;display:block;float:left;position:absolute}.cookieConsentHinweis input[type=checkbox]+label>.switch{width:56px;height:30px;background:url('data:image/png;base64,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') 0 -30px no-repeat}.cookieConsentHinweis input[type=checkbox]:checked+label>.switch{width:56px;height:30px;background:url('data:image/png;base64,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') 0 -60px no-repeat;cursor:pointer}.divNeccessary{margin-top:3px;}#cookies_necessary+label>.switch{width:56px;height:30px;background:url('data:image/png;base64,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') 0 -60px no-repeat;cursor:not-allowed;}.cookieConsentHinweis input[type=checkbox]:disabled+label,input[type=checkbox]:disabled{cursor:not-allowed;}.cookieConsentHinweis input[type=checkbox]+label>strong{color:#993333;}.cookieConsentHinweis input[type=checkbox]:checked+label>strong{color:#005aac;}#cookieSettingsBtn{font-weight:normal;}.cookieConsentHinweis .noMargBtm{margin-bottom:5px;}.cookieConsentNachricht{position:fixed;z-index:50001;bottom:0;left:0;width:100%;height:auto;min-height:40px;background:#fff;margin:0 auto;text-align:center;border-top:2px solid #005aac;outline:10px solid rgba(107,181,167,0.5);hyphens:auto;-webkit-transition:.3s 0s ease-in-out -webkit-transform,0s .4s opacity;-o-transition:.3s 0s ease-in-out -o-transform,0s .4s opacity;transition:.3s 0s ease-in-out transform,0s .4s opacity;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%);opacity:0;}.cookieConsentNachricht.show{-webkit-transition:.3s 0s ease-in-out -webkit-transform,0s 0s opacity;-o-transition:.3s 0s ease-in-out -o-transform,0s 0s opacity;transition:.3s 0s ease-in-out transform,0s 0s opacity;-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);opacity:1}.cookieConsentNachricht>div>p{text-align:left;margin:auto;font-family:Arial,Verdana,sans-serif;font-size:12px!important;line-height:160%!important;color:#666;display:inline-block;max-width:800px;}.cookieConsentNachricht div{display:inline-block;padding:10px 15px;}.cookieConsentNachricht a{font-family:Arial,Verdana,sans-serif;font-size:12px!important;line-height:160%!important;}.cookieConsentNachricht .close{cursor:pointer;margin-left:20px;margin-top:-20px;}#cookieAcceptAllBtn{display:block;text-align:center;vertical-align:middle;padding:12px 24px;border:2px solid #005aac;border-radius:0;/*5px;*/ background:#005aac;/*background:-webkit-gradient(linear,left top,left bottom,from(#005aac),to(#005aac));background:-moz-linear-gradient(top,#005aac,#005aac);background:linear-gradient(to bottom,#005aac,#005aac);text-shadow:#00433e 1px 1px 1px;*/ font:normal normal normal 16px arial!important;color:#ffffff!important;text-decoration:none;margin-bottom:1em;cursor:pointer;}#cookieAcceptAllBtn:hover,#cookieAcceptAllBtn:focus{border:2px solid #269790;background:#269790;/*background:-webkit-gradient(linear,left top,left bottom,from(#269790),to(#269790));background:-moz-linear-gradient(top,#269790,#269790);background:linear-gradient(to bottom,#269790,#269790);*/ color:#ffffff;text-decoration:none;}#cookieAcceptAllBtn:active{/*background:#00716a;background:-webkit-gradient(linear,left top,left bottom,from(#00716a),to(#00716a));background:-moz-linear-gradient(top,#00716a,#00716a);background:linear-gradient(to bottom,#00716a,#00716a);*/ border:1px inset #333;}#cookieAcceptAllBtn:before{content: '';display:inline-block;height:24px;width:24px;line-height:24px;margin:0 4px -6px -4px;position:relative;top:0px;left:0px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACIElEQVRIie2VwUsUURzHP29IEA9Bb5dOGktEdFiEpE4iEjt7iMyDlyC69GTv4SVkERER6RLdw9mLVGSYSBLmDCHbIYhA9g+I0D2Jvg5BF6lfhxmXdXadmTr7vc17v/l+f7/3+33fgzOkQKUFaNdcBCaAEaA/Wm4CdWDV+t7+fwnkXNMnMAPcB9aBAPgWbV8GSsA48EIh84d+7VdmAV1+mEfUBrCDMG0Dz3aPMxrhCTAI6o71lw5SBaLMPwIv7YWfz1hZOa3IEKOz6J69KeAeom7ZYOlEJU48PjqWnUzkANtz2KOBp0ADR6qJFUQN/YLIdRvUuh5LHNo11/5A00F6QX0FbrY3Pl7BBLCelTznmiFg04Gi9WsHwLuIo4W4wAjhtJArmV7tmkISucBbUBXre5+j5S1gOEmgn+NRVNwAAu2aq8nkSx/atr4Dl5IEWjj0vU/AY+C9ds2VDORdcS723SQ0UQPA+t4b7RonErmt4HwKeUEpdpMqqBM6tAXre6+BGQWbGTIvi1BPElgFxnXZ6JjIK6CaRK5dkwfGQNba1zucrF2zCOTt0UCF7blTEo1hqILWv58D+9b3Tpito8kKmQcGdc/eI0Zns5JPAUURWejk6wLtTuZBNoAGyHRkoi5xJg8sAkXgrvW99Muu9XNpsg9HqggPCB26RTjnAAWgDIwByyKy8CP4h+s6luXxgzNMZCKl2A2nRdasX0t8cM6Qir+UctHkZQkQGAAAAABJRU5ErkJggg==') no-repeat left center transparent;background-size:100% 100%;}#cookieAcceptNoneBtn{display:block;text-align:center;vertical-align:middle;padding:12px 24px;border:1px solid #d9d9d9;border-radius:0;/*5px;*/ background:#ffffff;/*background:-webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#e6e6e6));background:-moz-linear-gradient(top,#ffffff,#e6e6e6);background:linear-gradient(to bottom,#ffffff,#e6e6e6);text-shadow:#ffffff 1px 1px 1px;*/ font:normal normal normal 15px arial;color:#828282!important;text-decoration:none;margin-bottom:1em;cursor:pointer;}#cookieAcceptNoneBtn:hover,#cookieAcceptNoneBtn:focus{background:#efefef;/*#ffffff;*/ /*background:-webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#ffffff));background:-moz-linear-gradient(top,#ffffff,#ffffff);background:linear-gradient(to bottom,#ffffff,#ffffff);*/ color:#828282;text-decoration:none;}#cookieAcceptNoneBtn:active{background:#efefef;/*#b3b3b3;*/ /*background:-webkit-gradient(linear,left top,left bottom,from(#b3b3b3),to(#e6e6e6));background:-moz-linear-gradient(top,#b3b3b3,#e6e6e6);background:linear-gradient(to bottom,#b3b3b3,#e6e6e6);*/}#cookieAcceptNoneBtn:before{content: '';display:inline-block;height:24px;width:24px;line-height:24px;margin:0 4px -6px -4px;position:relative;top:0px;left:0px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZmFjLCAyMDIxLzExLzE3LTE3OjIzOjE5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkRGQjcyODg3NDY3MTFFQ0IwRTY4NTY4MkZCOURENjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkRGQjcyODk3NDY3MTFFQ0IwRTY4NTY4MkZCOURENjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGREZCNzI4Njc0NjcxMUVDQjBFNjg1NjgyRkI5REQ2MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGREZCNzI4Nzc0NjcxMUVDQjBFNjg1NjgyRkI5REQ2MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PldZeBoAAAIwSURBVHja7FXPS0JBEH7PnkFFSCEdJDLqJhGEL1CiQ0SnyoMGQXTtHt0iOkVEl+gYdI2CQIl+nCIinqTWI6w/ICrCg1jdvAjZNzIP1tf6ssBbAx87uzs7szM7M6uWy2WlkeRSGkwNN6CJE1VVvwmEQqEuDFFgFOjm5VfAABLpdDpvPyOGXa2aCAbC4XAr9lbBzgHHwAXwyNt9wDgQAfaBNRgq1m0Ayr1YPwObBZZx+F3mPuQ6IbcJdhCYhFzhRwN880tMDzRN204mk44xDgaDitvtXgI7C4yRJ6JOlyR+FJYsKTcMo3IbJ5imqZRKpS2cuccFV+z6qjzA7elBb4EhCgvtxWIxE3M9kUhUHYxGo3S5m1wuR29RAlqAO2A4lUrla3lA2XJsi7kOmFAoKu8g5bzXBHTgzBvGE9YhT1NOxUNOTzL+aTNCYztwzmtEH8KFaH0G2KlloNtKRUlNVIwIfIV8Pp/Ya56BnroqGXH8dKh6119bBVVofw05K+Y6880SuV54/uJkwOAKFalNUC6G65ofWKQJZJ7hZIByMUIVKqxd2ZRXKB6P01pG6FleDFPAUc06oIeF4AZYL4pngYqoHgoEAorH49kFm0dGrYg6NYn8GnCJ8l/UdX3b7/f/aADKqVUMQPG4YyVbqcnuUrN74GZXkClmOfJ4AJiuq9kJh1upt2B/HtNTLqInK1voQTnme5BZz2QyxV/9B5IPZ8QqIkpFzpajX304/5++jL4EGAB9aQ1RI/QSQwAAAABJRU5ErkJggg==') no-repeat left center transparent;background-size:100% 100%;}#cookieSetupBtn,#cookieSaveBtn{display:block;text-align:center;vertical-align:middle;padding:5px 24px;border:1px solid #d9d9d9;border-radius:0;/*5px;*/ background:#ffffff;/*background:-webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#e6e6e6));background:-moz-linear-gradient(top,#ffffff,#e6e6e6);background:linear-gradient(to bottom,#ffffff,#e6e6e6);text-shadow:#ffffff 1px 1px 1px;*/ font:normal normal normal 15px arial;color:#828282!important;text-decoration:none;margin-bottom:1.5em;cursor:pointer;}#cookieSetupBtn:hover,#cookieSetupBtn:focus,#cookieSaveBtn:hover,#cookieSaveBtn:focus{background:#efefef;/*#ffffff;*/ /*background:-webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#ffffff));background:-moz-linear-gradient(top,#ffffff,#ffffff);background:linear-gradient(to bottom,#ffffff,#ffffff);*/ color:#828282;text-decoration:none;}#cookieSetupBtn:active,#cookieSaveBtn:active{background:#efefef;/*#b3b3b3;*/ /*background:-webkit-gradient(linear,left top,left bottom,from(#b3b3b3),to(#e6e6e6));background:-moz-linear-gradient(top,#b3b3b3,#e6e6e6);background:linear-gradient(to bottom,#b3b3b3,#e6e6e6);*/}#slideSettings{overflow:hidden;height:0px;/* 27px */ z-index:20;position:relative;}#slideSettingsGradient{display:none;background:yellow;height:27px;margin-top:-27px;z-index:21;position:relative;background:-moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);/* FF3.6-15 */ background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);/* Chrome10-25,Safari5.1-6 */ background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);/* W3C,IE10+,FF16+,Chrome26+,Opera12+,Safari7+ */ margin-bottom:25px;}@media (max-width:570px){.cookieConsentHinweis {max-width:270px!important; left:calc(50% - 145px)!important;} .cookieConsentHinweis p {font-size:11px!important;line-height:1.4em!important;} .cookieConsentHinweis a {font-size:11px!important;line-height:1.4em!important;} #cookieAcceptAllBtn{ font-size:12px!important; padding:6px 12px!important;} #cookieAcceptAllBtn::before{ display:none!important;}}</style>");


jQuery('#cookieSettingsBtn, #cookieSettingsLink').on('click',function(e){
    e.preventDefault();
    cookieHinweis.show();
});

jQuery(document).ready(function(){
jQuery("body").append('<div class="cookieConsentHinweisOverlay"></div><div class="cookieConsentHinweis col-xxs-10 col-xs-10 col-md-6 col-lg-4"> <div class="intro">  <h3>Wir verwenden Cookies  </h3>  <p>Entscheiden Sie selbst, ob UNIQA auf dieser Website neben funktionell zum Betrieb der Website erforderlichen Cookies auch Betreiber-Cookies sowie Cookies für Tracking und Targeting verwenden darf. Weitere Details finden Sie in der <a href="./datenschutz#cookies" rel="external"title="zeigt die Datenschutzerklärung in neuem Fenster" target="_blank">Datenschutzerklärung</a>.  </p> </div> <div id="slideSettings"> <div class="divNeccessary">  <input name="cookies_necessary" id="cookies_necessary" checked="checked" disabled="disabled" type="checkbox" />  <label for="cookies_necessary"><div class="switch"></div><strong>Notwendige Cookies</strong><p>Diese Cookies sind erforderlich, um die grundlegende Funktionalität der Website zu sichern.</p>  </label> </div>  <div><input name="cookies_analytics" id="cookies_analytics" type="checkbox" /><label for="cookies_analytics"> <div class="switch"></div> <strong>Tracking- und Targeting-Cookies</strong> <p>Diese Cookies sind erforderlich, um unsere Website auf Ihre Bedürfnisse hin zu optimieren. Hierzu gehört eine bedarfsgerechte Gestaltung und fortlaufende Verbesserung unseres Angebotes einschließlich der Verknüpfung zu Social-Media-Angeboten von z.B. Facebook, Twitter und Google+.</p></label>  </div>  <div><input name="cookies_thirdParty" id="cookies_thirdParty" type="checkbox" /><label for="cookies_thirdParty"> <div class="switch"></div> <strong>Betreibercookies</strong> <p>Diese Cookies sind erforderlich, um z.B. den Kartendienst von Google Maps zu nutzen, mit dem sich unser Standort anzeigen lassen kann.</p></label>  </div> </div> <div class="closeBtn">  <a class="cookie-action mybutton" id="cookieSetupBtn" name="settings">Einstellungen individuell anpassen</a>  <a class="cookie-action mybutton" id="cookieSaveBtn" name="close">Einstellungen jetzt speichern</a>  <a class="cookie-action button" id="cookieAcceptNoneBtn" name="reject">Alle Cookies ablehnen und speichern</a> <a class="cookie-action mybutton" id="cookieAcceptAllBtn" name="accept">Alle Cookies zulassen und speichern</a> </div></div><div class="cookieConsentNachricht col-12"> <div></div> <img class="close" alt="x" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABmElEQVRIic3XvWoCQRAH8H8RghDSpBd8EF9AbHyUIKLR/ciSnd08QB7BwiIPYCko1oIolooWonYxpL0U8ePikcvenWcyMOXNj9mdZfcA16BaHiQ0LO/AiAlIbEFiCyMmsLwDEs+gWt65XmgolcETu4cVSxjhOSWJDYg9QKlMPNTWSzBi6gwGcwFbL0Xp8hqWcRj2lgDdd7+FaTyiUrlx6FS8JAYDyZu/oIyfH92llipsT9NB9xnYcypnQbKXOkyyBypn/UtcTR09dM2q/oFyP6fJc/GFGlm4ILpLWQC0tBeHNbeA5u2khVrjodedz6LAbYDYICm6j9Z46PYdsQGg3QerO599K+5HR+tVhI7F0hk+7Sw2eoAjLPVovfJOIzJ6XOpow+XHY6GH4YpxnEbrVXzUCA9aWsDIYuwCsVMWd5eE2FwMJbHxXxKNi8GWNY6wUjkQ66ffLetDqdw/eAjsQ0uVGqol/fTi2l2TvHl+mL9CqatwuFq9/eqcvycH2Qe0JCh1F44G93yaAI74oPfHn/zCnMaZf9o+AUcc3z+xj7ojAAAAAElFTkSuQmCC" /></div>');
});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return jQuery.isFunction(converter) ? converter(value) : value;
    }

    var config = jQuery.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !jQuery.isFunction(value)) {
            options = jQuery.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires     ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path        ? '; path=' + options.path : '',
                options.domain      ? '; domain=' + options.domain : '',
                options.secure      ? '; secure' : '',
                options.samesite    ? '; samesite=' + options.samesite : 'none'
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling jQuery.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    jQuery.removeCookie = function (key, options) {
        if (jQuery.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        jQuery.cookie(key, '', jQuery.extend({}, options, { expires: -1 }));
        return !jQuery.cookie(key);
    };

}));


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        setTimeout(function() {
            var _hsp = window._hsp = window._hsp || [];
            _hsp.push(['showBanner']);
        },250);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

var cookieHinweis = {
  acceptCookies: false,
  cookieSettings: { dismissed: false, necessary: true, analytics: false, thirdParty: false, ts: false },

  setCookie: function (cookieSettings) {
    jQuery.cookie("cookieSettings", JSON.stringify(cookieSettings), { expires: 365, domain: extractRootDomainCookie(window.location.hostname), path: "/", secure: true, samesite: "none" });
  },

  getCookie: function () {
    if(typeof jQuery.cookie('cookieSettings') == "undefined"){
        return null;
    }else{
        return JSON.parse(jQuery.cookie('cookieSettings'));
    }
  },

  init: function () {
    var _this = this;
    if (this.getCookie()!==null) {
        _this.cookieSettings = this.getCookie();
    }

    jQuery('#cookieSaveBtn').hide();

    jQuery('.cookie-action, .cookieConsentHinweis .close').on('click', function (e) {
      if (e.target.name === 'accept') {
        jQuery('#cookies_analytics').prop('checked', true);
        jQuery('#cookies_thirdParty').prop('checked', true);
        _this.cookieSettings = { necessary: true, analytics: true, thirdParty: true, ts: ts };
        _this.hide();
      }
      else if (e.target.name === 'reject') {
        jQuery('#cookies_analytics').prop('checked', false);
        jQuery('#cookies_thirdParty').prop('checked', false);
        _this.cookieSettings = { necessary: true, analytics: false, thirdParty: false, ts: ts };
        _this.hide();
      }
      else if (e.target.name === 'close') {
        _this.cookieSettings.analytics = jQuery('#cookies_analytics').prop('checked');
        _this.cookieSettings.thirdParty = jQuery('#cookies_thirdParty').prop('checked');
        _this.cookieSettings.ts = ts;
        _this.hide();
      }
      else if (e.target.name === 'settings') {
        jQuery('#slideSettingsGradient').remove();
        jQuery('#slideSettings').css({'height':'inherit'});
        jQuery('#cookieSetupBtn').hide(150).remove();
        jQuery('#cookieSaveBtn').show();
      }

      if(e.target.name === 'accept' || e.target.name === 'reject' || e.target.name === 'close'){
          _this.cookieSettings.dismissed = true;
          _this.setCookie(_this.cookieSettings);
          _this.hide();
          /* deaktiviert auf Anordnung Hr. Dr. Goldner, 21.09.2018
          jQuery(".cookieConsentNachricht .close").remove();
          //cookieConsentNachricht.show('<p><b>Super!</b> Ihre Cookie-Einstellungen werden gespeichert.</p>', 2500, 'dReload()');
          */
          /* stattdessen */
            //https://www.gandke.de/blog/referrer-und-landingpage-spaeter-an-analytics-senden/
            //https://www.simoahava.com/analytics/persist-campaign-data-landing-page/
            //https://www.analyticsmania.com/post/referrer-in-google-tag-manager/
            if(_this.cookieSettings.analytics===true){
                sessionStorage.setItem("_landingUrl", window.location.pathname + window.location.search);
                sessionStorage.setItem("_landingReferrer", document.referrer);
            }

          //handleConsent(_this.cookieSettings.analytics,_this.cookieSettings.thirdParty);
          dReload();
      }
    });

    jQuery('.cookieConsentHinweis input[type=checkbox]').on('change', function (e) {
      _this.cookieSettings[e.target.id.replace('cookies_', '')] = jQuery('#' + e.target.id).prop('checked');
      if(!jQuery('#cookies_analytics').prop('checked')){
        clearAnalyticsCookies();
      }
      _this.setCookie(_this.cookieSettings);
    });

    jQuery('.cookieConsentHinweis input[type=checkbox]').each(function (i) {
      jQuery(this).prop('checked', _this.cookieSettings[this.id.replace('cookies_', '')]);
    });

    if(this.cookieSettings.dismissed !== true) {
        _this.show();
    }else{
        //if(!this.cookieSettings.ts || ts - this.cookieSettings.ts >= (1000 * 60 * 60 * 24)){
            /* deaktiviert auf Anordnung Hr. Dr. Goldner, 21.09.2018
            cookieConsentNachricht.show(cookieReminder, 20000, 'dismissNachricht()');
            */
        //}
        if(!this.cookieSettings.ts || this.cookieSettings.ts <= 1542607200000){
             // Umstellung auf neues Fenster 19.11.2018, 07.00 Uhr
             // zeige neues Fenster auf jeden Fall erneut und bitte um Speicherung
            _this.show();
        }

        /*setTimeout(function() {
            handleConsent(_this.cookieSettings.analytics,_this.cookieSettings.thirdParty);
        },3000);*/

        waitForElm('#hs-modal').then((elm) => {
            handleConsent(_this.cookieSettings.analytics,_this.cookieSettings.thirdParty);
        });
    }

  },

  show: function () {
    jQuery('.cookieConsentHinweis').addClass('open');
    jQuery('.cookieConsentHinweisOverlay').height(jQuery(document).height());
    //jQuery('.cookieConsentHinweisOverlay').html(jQuery('body').html());
    jQuery('.cookieConsentHinweisOverlay').addClass('open');
    jQuery('body').addClass('cookiemanageropen');
    /* deaktiviert auf Anordnung Hr. Dr. Goldner, 21.09.2018
    cookieConsentNachricht.hide();
    */
  },

  hide: function () {
    //cookieConsentNachricht.hide();
    jQuery('.cookieConsentHinweis').removeClass('open');
    //jQuery('body').html(jQuery('.cookieConsentHinweisOverlay').html());
    jQuery('.cookieConsentHinweisOverlay').removeClass('open');
    jQuery('body').removeClass('cookiemanageropen');
    //dReload();
  },

  reset: function () {
    var settings = { dismissed: false, necessary: true, analytics: false, thirdParty: false, ts: false };
    this.cookieSettings = settings;
    jQuery.cookie("cookieSettings", JSON.stringify(settings), { expires: -9999, domain: extractRootDomainCookie(window.location.hostname), path: "/", secure: true, samesite: "none" });
    clearAnalyticsCookies();
    dReload();
  }

};

function dReload(){
    location.reload(true);
}
function dismissNachricht(tage){
    if(tage&&tage>0){ts=ts + (tage * 24 * 60 * 60 * 1000);}
    _cookieSettings = JSON.parse(jQuery.cookie('cookieSettings'));
    _cookieSettings.ts = ts;
    jQuery.cookie("cookieSettings", JSON.stringify(_cookieSettings), { expires: 365, domain: location.hostname, path: "/", secure: true, samesite: "none" });
}

var cookieConsentNachricht = {
    show: function(n){
        var i=this,t,f;
        arguments[1]!==undefined&&(t=arguments[1],f=arguments[2],window.setTimeout(function(){i.hide();eval(f);},t));
        jQuery(".cookieConsentNachricht > div").html(n).parent().addClass("show");
    },
    hide: function(){
        jQuery(".cookieConsentNachricht").removeClass("show");
    },
    init: function(){
        var n=this;
        jQuery(".cookieConsentNachricht .close").click(function(t){
            t.preventDefault();
            n.hide();
            dismissNachricht(6);
        });
    }
};

var ts;

var cookieReminder = '<p><b>Perfekt!</b> Sie haben bereits Cookie-Einstellungen für diese Website vorgenommen.<br />Zum Prüfen, Ändern oder Löschen der Einstellungen nutzen Sie unsere Datenschutzerklärung.</p>'

jQuery(document).ready(function(){
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    if(window.location.origin.indexOf("myagentur")<0){
        ts=new Date().getTime();
        cookieHinweis.init();
        cookieConsentNachricht.init();
    }
});

function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e[i].split("=");f=a[0].replace(/^\s+|\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a[1].replace(/^\s+|\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

// To address those who want the "root domain," use this function:
function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

function extractRootDomainCookie(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

function clearAnalyticsCookies(){
    clearCookie('_ga','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('_ga_'+ kwsga.escape(),'.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('_gaexp','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('_gid','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('_gat','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utma','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmb','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmc','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmt','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmv','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmx','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmxx','.'+extractRootDomainCookie(window.location.hostname),'/');
    clearCookie('__utmz','.'+extractRootDomainCookie(window.location.hostname),'/');
    // simple clear all
    var cookies = jQuery.cookie();
    for (var cookie in cookies) {
        if(cookie!="cookieSettings"){
            jQuery.removeCookie(cookie, { path: "/", samesite: "None", secure: true });
        }
    }
}

var analyticsCookie=false;
if(typeof jQuery.cookie('cookieSettings')!=="undefined"){
    var cookie = JSON.parse(jQuery.cookie('cookieSettings'));
    if(cookie.analytics==true){
        var analyticsCookie=true;
    }else{
        var cookies = jQuery.cookie();
        for (var cookie in cookies) {
            if(cookie!="cookieSettings"&&cookie!="pi_opt_in"){
                jQuery.removeCookie(cookie, { path: "/", samesite: "None", secure: true });
            }
        }
    }
}else{
    var cookies = jQuery.cookie();
    for (var cookie in cookies) {
        jQuery.removeCookie(cookie, { path: "/", samesite: "None", secure: true });
    }
}

/*
if(typeof kwsgtm !== "undefined"){
    if(kwsgtm!=false){
        if(analyticsCookie==true){
            jQuery.loadScript('https://www.googletagmanager.com/gtag/js?id='+kwsgtm.escape(), function(){
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', kwsgtm.escape());
            });
        }
    }
}
*/

if(typeof kwsgtm !== "undefined"){
    if(kwsgtm!=false){
        if(analyticsCookie==true){
            dataLayer = [];

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K6TD83');
        }
    }
}

if(typeof kwsga !== "undefined"){

    if(kwsga!=false){
        var disableStr = 'ga-disable-' + kwsga.escape();
        if (document.cookie.indexOf(disableStr + '=true') > -1) {
          window[disableStr] = true;
        }
        gaOptout=function(){
            document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[disableStr] = true;
        }
        if(analyticsCookie==true){
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', kwsga.escape(), { 'anonymize_ip': true });

            /*
            var domain=window.location.origin;
            var domain=domain.replace("https://","");
            var domain=domain.replace("www.","");
            var domain=domain.replace("/","");

            ga('create', kwsga.escape(), { cookieFlags: 'max-age=63072000;domain='+domain+';path=/;secure;samesite=none' });
            ga('set', 'anonymizeIp', 'true');
            ga('send', 'pageview');
            */
        }
    }
}

