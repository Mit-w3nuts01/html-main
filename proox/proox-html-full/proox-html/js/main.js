/*var clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';*/

var websitePath = '/';
var lngID = 1;
var isMobileOK = false;
var isMouseOK = true;
var isTouchOK = false;
var pixelRatio = 1;
var viewportW = 0;

var mouseXAbs;
var mouseXRel;
var mouseYAbs;
var mouseYRel;

//var posListProdCor = false;

//var html5VideoOK = false;

$(document).mousemove(function (e) {
	mouseXAbs = e.pageX;
	mouseYAbs = e.pageY;
	mouseXRel = e.pageX - getViewportScrollX();
	mouseYRel = e.pageY - getViewportScrollY();
});

$(document).ready(function () {
	/* CHECK JAVASCRIPT */
	$('body').removeClass('jsNO');
	$('body').addClass('jsOK');

	/* CHECK LANGUAGE */
	lngID = parseInt($('body').attr('data-lngID'));

	/* CHECK MOUSE/TOUCH */
	$('body').one('mousemove touchstart', detectMouseTouch);

	/* CHECK PATH */
	websitePath = $('body').attr('data-path');

	/* CHECK PIXEL RATIO */
	pixelRatio = window.devicePixelRatio;
	$('body').attr('data-pixelratio', pixelRatio);

	/* CHECK VIEWPORT WIDTH */
	viewportW = getViewportWidth();

	/* LINK BACK */
	$('a.back').click(function () {
		if (history.length > 1) {
			history.go(-1);
			return false;
		} else {
			return true;
		}
	});

	/* CHECK VIDEO SUPPORT */
	/*html5VideoOK = !!document.createElement('video').canPlayType && !!document.createElement('video').canPlayType('video/mp4');*/

	/* LINK PHONE */
	$('a[href^="tel"]').click(function () {
		if (getViewportWidth() >= 480) return false;
	});

	/* NAVIGATION BUTTON */
	$('nav.button > a').on('click tap', function () {
		toggleNavigation();
		return false;
	});

	/* NAVIGATION SHOW/HIDE SUBMENU (MOBILE) */
	/*$('nav.main > ul > li > a')
		//.not('nav.main > ul > li:eq(0) > a')
		.not('nav.main > ul > li > ul > li > a')
		.on('click tap', function () {
			if ($('header > nav.button').css('display') == 'block') {
				//var tmpIdx = $(this).parent().index();
				//if ($(this).parent().children('ul').length == 1 && tmpIdx !== 0) {
				if ($(this).parent().children('ul').length == 1) {
					//$('nav.main > ul > li').removeClass('on');
					//$(this).parent().toggleClass('on');
					$('nav.main > ul > li').removeClass('open');
					$(this).parent().toggleClass('open');
					return false;
				} else {
					return true;
				}
			}
		});*/

	/* NAVIGATION TOGGLE ON CLICK */
	$('nav.main > ul > li > ul > li > a').on('click tap', function () {
		if ($('header > nav.button').css('display') == 'block') {
			toggleNavigation();
		}
	});

	/* NAVIGATION MOBILE > ACT = OPEN */
	if ($('header > nav.button').css('display') == 'block') {
		$('nav.main > ul > li').each(function () {
			if ($(this).hasClass('act')) $(this).addClass('open');
		});
	}

	/* NAVIGATION HOVER */
	/*$('nav.main > ul > li:eq(0)').bind({
		mouseenter: function () {
			$('body').addClass('navHover');
		},
		mouseleave: function () {
			$('body').removeClass('navHover');
		}
	});*/
	/*$('nav.main > ul > li').not('li:eq(0)').bind({
		mouseenter: function () {
			if ($(this).find('ul').length == 1) {
				$(this).addClass('open');
				$('body').addClass('navHover2');
				setBackgroundNav();
			}
		},
		mouseleave: function () {
			if ($(this).find('ul').length == 1) {
				$(this).removeClass('open');
				$('body').removeClass('navHover2');
				resetBackgroundNav();
			}
		}
	});*/

	$('nav.main > ul > li:eq(0)').on('click tap', function () {
		//alert('click here 1');
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('body').removeClass('navOn');
			$('body').removeClass('navProducts');
		} else {
			/*if (getViewportWidth() >= 1250 && posListProdCor == false) {
				var tmpURL = $(this).children('a').attr('href');
				window.loaction.href = tmpURL;
				return false;
			} else {
			*/
			checkMenuProducts();
			$('nav.main > ul > li').removeClass('open');
			//var tmpPos = $('header > nav.main > ul > li:eq(0) > ul').position();
			//alert(tmpPos.left);
			$(this).addClass('open');
			$('body').addClass('navOn');
			$('body').addClass('navProducts');
			/*}*/
		}
		return false;
	});

	$('nav.main > ul > li').not('li:eq(0)').on('click tap', function () {
		//alert('click here not 1');
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('body').removeClass('navOn');
			$('body').removeClass('navProducts');
			resetBackgroundNav();
			return false;
		} else {
			if ($(this).find('ul').length == 1) {
				$('nav.main > ul > li').removeClass('open');
				$(this).addClass('open');
				$('body').addClass('navOn');
				$('body').removeClass('navProducts');
				setBackgroundNav();
				return false;
			} else {
				return true;
			}
		}
	});

	/*$('nav.main > ul > li > a').on('click tap', function () {
		if ($(this).parent().find('ul').length != 0) {
			return false;
		} else {
			return true;
		}
	});*/

	$('nav.main > ul > li > ul a').on('click tap', function () {
		var tmpURL = $(this).attr('href');
		window.location.href = tmpURL;
		$('nav.main > ul > li').removeClass('open');
		$('body').removeClass('navOn');
		resetBackgroundNav();
		return false;
	});

	/* PRODUCTS OVERVIEW FILTER */
	// $('div.productsAndFilterWrapper div.colFilter  ul.colors > li').on('click tap', function () {
	// 	$(this).toggleClass('on');
	// });

	/* PRODUCTS OVERVIEW COLORS */
	$('div.productsAndFilterWrapper div.colors > div').bind({
		mouseenter: function () {
			$(this).css('cursor', 'pointer');
			var tmpText = $(this).data('name');
			var tmpObj = $(this).parent();
			tmpObj.find('span').text(tmpText);
		},
		mouseleave: function () {
			var tmpObj = $(this).parent();
			tmpObj.children('span').text('');
		},
		click: function () {
			$(this).parent().children('div').removeClass('act');
			$(this).addClass('act');

			var tmpUrl = $(this).data('url');
			var tmpPictNewA = new Array(
				$(this).data('pict10'),
				$(this).data('pict15'),
				$(this).data('pict20')
			);

			var tmpCode = '';
			tmpCode += '<picture>'
			tmpCode += '<source media="(min-width: 0px)" srcset="' + tmpPictNewA[0] + ' 2x, ' + tmpPictNewA[1] + ' 1.5x, ' + tmpPictNewA[2] + ' 1x" />';
			tmpCode += '<img src="' + tmpPictNewA[0] + '" alt="" />';
			tmpCode += '</picture>'

			// alert(tmpCode);
			$(this).parent().parent().children('div.picture').html(tmpCode);
			$(this).parent().parent().find('div.link a').attr('href', $(this).data('url'));

			// replace the title element
			$(this).parent().parent().children('div.title').html(
				$(this).data('h1')
				+ '<br/>'
				+ $(this).data('h2')
			)
		}
	});

	/* PRODUCT DETAIL */
	$('div.productWrapper div.previews > ul > li').bind({
		mouseenter: function () {
			$(this).css('cursor', 'pointer');
		},
		mouseleave: function () {

		},
		click: function () {
			var tmpIdx = $(this).index();
			var tmpObj = $(this).parents('div.productWrapper');
			tmpObj.find('div.dotsWrapper').children('div:eq(' + tmpIdx + ')').trigger('click');
		}
	});

	/* GALLERY – HOVER BY TOUCH */
	/* $('div.gallery > div').on('click tap', function() {
		'use strict';
		if (isTouchOK) {
			if ($(this).hasClass('hover')) {
				$(this).removeClass('hover');
			} else {
				$(this).parent().children('div').not(this).removeClass('hover');
				$(this).addClass('hover');
			}
		}
	}); */

	/* COLOR PICKER */
	/* $('div.sliderWrapper > div.itemsWrapper > div > div.brush').on('click tap', function () {
		$('div.sliderWrapper > div.colorpicker').toggleClass('act');
	}); */
	$('body').on('click tap', 'div.sliderWrapper > div.itemsWrapper > div.act > div.brush', function () {
		$('div.sliderWrapper > div.colorpicker').toggleClass('act');
	});
	$('body').on('click tap', 'div.sliderWrapper > div.colorpicker > div.close', function () {
		$('div.sliderWrapper > div.colorpicker').toggleClass('act');
	});

	if ($('div#colorpickerSlider').length && $('div.sliderWrapper > div.itemsWrapper > div').length) {
		var sliderPicker = new iro.ColorPicker("#colorpickerSlider", {
			width: 240,
			color: "rgb(171,171,171)",
			borderWidth: 1,
			borderColor: "#000",
			layout: [
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'hue'
					}
				},
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'saturation'
					}
				},
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'value'
					}
				},
				/*{
					component: iro.ui.Slider,
					options: {
						sliderType: 'alpha'
					}
				},*/
			]
		});
		sliderPicker.on('color:change', function (color) {
			//console.log('color:change');
			//console.log(color.hexString);
			$('div.sliderWrapper > div.itemsWrapper > div').css('background-color', color.hexString);
		});
		$('div#colorpickerSlider').append('<div class="close"></div>');
		/*$('div.sliderWrapper > div.colorpicker > div.close').on('click tap', function() {
			$('div.sliderWrapper > div.colorpicker').toggleClass('act');
		});*/
	}

	/* SEARCH */
	$('nav.sidebar > ul > li:last-child > a').on('click tap', function () {
		$('body').toggleClass('searchOK');
		return false;
	});
	$('div.searchWrapper > div.bg').on('click tap', function () {
		$('body').toggleClass('searchOK');
	});

	/* INIT */
	checkLayout();
});

$(window).on('load', function () {
	/* INIT */
	checkLayout();
});

$(window).on('resize', function () {
	/* CHECK RESIZE VIEWPORT WIDTH */
	if (viewportW != getViewportWidth()) {
		resetNavigation();
		viewportW = getViewportWidth();
	}

	/* INIT */
	checkLayout();
});

$(window).on('scroll', function () { });

/* CHECK LAYOUT */
function checkLayout() {
	/* MENU PRODUCTS */
	checkMenuProducts();

	/* FOOTER */
	$('footer').removeClass('fixed');
	/* var tmpH = $('header').outerHeight() + $('footer').outerHeight(); */
	var tmpH = $('footer').outerHeight();
	if ($('main').length == 1) tmpH += $('main').outerHeight();
	if (getViewportHeight() - tmpH > 0) {
		$('footer').addClass('fixed');
	}
}


/* CHECK MENU PRODUCTS */
function checkMenuProducts() {
	//alert('CHECK');
	$('header > nav.main > ul > li:eq(0) > ul').css('left', '0px');
	if (getViewportWidth() >= 1250 && !$('body').hasClass('pageLanding')) {
		var tmpObjList = $('header > nav.main > ul');
		var tmpPosList = tmpObjList.position();
		var tmpObjItem = $('header > nav.main > ul > li:eq(0)');
		var tmpPosItem = tmpObjItem.position();
		var tmpX = ((tmpPosList.left + tmpPosItem.left) * (-1)) + ((getViewportWidth() - $('main section > div').outerWidth()) / 2);
		//alert('tmpX: ' + tmpX);
		//posListProdCor = true;
		$('header > nav.main > ul > li:eq(0) > ul').css('left', tmpX + 'px');
	}
}

/* NAVIGATION */

function toggleNavigation() {
	$('body').toggleClass('navOK');
}

function resetNavigation() {
	$('body').removeClass('navOK');
	$('body').removeClass('navOn');
	$('body').removeClass('navHover');
	$('body').removeClass('navHover2');
	$('body').removeClass('navProducts');
	resetBackgroundNav();

	$('nav.main > ul > li').removeClass('on');
	$('nav.main > ul > li').removeClass('open');
}

function setBackgroundNav() {
	//if ($('header > nav.button').is(':hidden')) {
	if ($('header > nav.button').css('display') != 'block') {
		$('header').append('<div class="bgNav"></div>');
		var tmpY1 = getObjectPositionY($('nav.main'));
		var tmpY2 = getObjectPositionY($('nav.main > ul > li.open > ul'));
		var tmpH1 = $('nav.main > ul > li.open > ul').outerHeight();
		var tmpH = tmpY1 + tmpY2 + tmpH1 + 80;
		$('header > div.bgNav').css('height', tmpH + 'px');
	} else {
		resetBackgroundNav();
	}
}

function resetBackgroundNav() {
	$('header > div.bgNav').remove();
}

/* HELPER FUNCTIONS */

function getViewportWidth() {
	return $(window).width();
}
function getViewportHeight() {
	return $(window).height();
}
function getViewportScrollX() {
	return $(window).scrollLeft();
}
function getViewportScrollY() {
	return $(window).scrollTop();
}
function getObjectPositionX(obj) {
	var tmpPos = obj.position();
	return tmpPos.left;
}
function getObjectPositionY(obj) {
	var tmpPos = obj.position();
	return tmpPos.top;
}

function scrollViewportToElement(obj, offsetY) {
	var tmpYNew = parseInt(obj.offset().top + offsetY);
	var tmpYCur = parseInt(getViewportScrollY());
	var tmpYDiff = tmpYCur - tmpYNew;
	$('html,body').animate({ scrollTop: tmpYNew }, Math.round(Math.abs(tmpYDiff) * 1));
}

/* CHECK MOUSE/TOUCH */
var detectMouseTouch = function (e) {
	if (e.type === 'mousemove') {
		isMouseOK = true;
		isTouchOK = false;
	} else if (e.type === 'touchstart') {
		isMouseOK = false;
		isTouchOK = true;
	}
	$('body').off('mousemove touchstart', detectMouseTouch);
	if (isTouchOK) {
		$('body').removeClass('touchNO');
		$('body').addClass('touchOK');
	}
	/*
	if (isTouchOK) configTouch();
	if (isMouseOK) configMouse();
	*/
};
