"use strict";


document.addEventListener("DOMContentLoaded", function() {
	getheightanimation();
	// Language Switcher Start
	var anchors = document.querySelectorAll(".language_switcher > a");

	for (var i = 0; i < anchors.length; i++) {
		anchors[i].addEventListener('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			this.closest('.language_switcher').classList.toggle('active');
		});
	}
	// Language Switcher End

	// Custom Wow Animation Start
	const sectionswow = document.querySelectorAll('.customwow');

    const observerOptionswow = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const observerCallbackwow = (entrieswow, observerwow) => {
        entrieswow.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    };

    const observerwow = new IntersectionObserver(observerCallbackwow, observerOptionswow);

    sectionswow.forEach(section => {
        observerwow.observe(section);
    });
	// Custom Wow Animation End

	// Custom Home Page Tab Start
	document.querySelectorAll(".custom_tab_nav li a").forEach(function(link) {
		link.addEventListener("click", function(e) {
			setTimeout(() => {
				getheightanimation();
			}, 20);
			e.stopPropagation();
			e.preventDefault();
			
			var parentLi = this.parentNode;
			parentLi.classList.add('active-tab-link');
			var siblings = parentLi.parentElement.querySelectorAll('li');
			siblings.forEach(function(sibling) {
				if (sibling !== parentLi) {
					sibling.classList.remove('active-tab-link');
				}
			});
	
			var targetData = this.getAttribute('data-entri-title');
			var tabContentWraps = document.querySelectorAll('.custom_tab_list_wraps');
			tabContentWraps.forEach(function(tabWrap) {
				if (tabWrap.getAttribute('data-entri-data') === targetData) {
					tabWrap.classList.add('active-tabs', 'show-tab');
				} else {
					tabWrap.classList.remove('active-tabs', 'show-tab');
				}
			});
		});
	});
	// Custom Home Page Tab End

	// Mobile Menu Start
	document.querySelector('.menu_bar').addEventListener('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		this.classList.toggle('active');
		document.body.classList.toggle('open-menu');
	});
	// Mobile Menu End

	// Home Page Slider Start
	// jQuery('.offer_slider').bxSlider({
	// 	maxSlides: 2,
	// 	minSlides:1,
	// 	slideMargin: 0,
	// 	pager:false,
	//   });

	var offer_element =  document.querySelector('.offer_slider');
	if (typeof(offer_element) != 'undefined' && offer_element != null)
	{
	var swiper = new Swiper(".offer_slider", {
		navigation: {
			nextEl: '.offer_slider_next',
			prevEl: '.offer_slider_prev',
		},
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			
			1200: {
				slidesPerView: 2,
				spaceBetween: 52,
			}
			},
		});
	}
	// Home Page Slider End

	// Home Page Slider Bottom Start
	var init = false;
	var swipers;
	function swiperCard() {
	if (window.innerWidth <= 767) {
		if (!init) {
		init = true;
		swipers = new Swiper(".slider_home_section_5", {
			direction: "horizontal",
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 33,
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			  },
		});
		}
	} else if (init) {
		swipers.destroy();
		init = false;
	}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
	// Home Page Slider Bottom End

	// Custom Filter Code Start
	
	const items = document.querySelectorAll(".filter_nav ul li a");
	const products = document.querySelectorAll('.filter_data .pure-g > [class^="pure-u-"]');

	items.forEach((item) => {
		item.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			items.forEach((item) => {
				item.parentElement.classList.remove("active");
			});
			item.parentElement.classList.add("active");

			const valueAttr = item.getAttribute("data-filter");
			products.forEach((product) => {
				product.classList.remove("show");

				setTimeout(() => {
					if (product.getAttribute("data-filter").toLowerCase() === valueAttr.toLowerCase() || valueAttr === "all") {
						product.style.display = "flex";
						setTimeout(() => {
							product.classList.add("show"); 
						}, 100); 
					} else {
						product.style.display = "none";
					}
				}, 500); 
			});
		});
	});

	// Custom Filter Code End

	
	// Custom Accordian 1 Code Start
	var accrodionelement1 =  document.querySelector('.accordion_v1');
		if (typeof(accrodionelement1) != 'undefined' && accrodionelement1 != null)
		{
		// Exists.
		const accordion1 = document.querySelector('.accordion_v1');
		const accritems = accordion1.querySelectorAll('li');
		const accrlinks = accordion1.querySelectorAll('a');

		function slideToggle(element) {
			if (element.style.height && element.style.height !== '0px') {
				element.style.height = '0px';
			} else {
				element.style.height = element.scrollHeight + 'px';
			}
		}

		function slideUp(element) {
			element.style.height = '0px';
		}

		accrlinks[0].classList.add('active');
		accritems[0].querySelector('.acc_content').style.height = accritems[0].querySelector('.acc_content').scrollHeight + 'px';

		accrlinks.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();

				const dropDown = this.nextElementSibling;
				const isActive = this.classList.contains('active');

				accrlinks.forEach(l => l.classList.remove('active'));
				accritems.forEach(item => slideUp(item.querySelector('.acc_content')));

				if (!isActive) {
					this.classList.add('active');
					slideToggle(dropDown);
				}
			});
		});
	}
	// Custom Accordian 1 Code End
	
	
	// Custom Accordian 2 Code Start

	var accrodionelement2 =  document.querySelector('.accordian_simple .accordion');
	if (typeof(accrodionelement2) != 'undefined' && accrodionelement2 != null)
		{
			const accordion2 = document.querySelector('.accordian_simple .accordion');
			const accritems2 = accordion2.querySelectorAll('li');
			const accrlinks2 = accordion2.querySelectorAll('a');
			
			function slideToggle2(element) {
				if (element.style.height && element.style.height !== '0px') {
					element.style.height = '0px';
				} else {
					element.style.height = element.scrollHeight + 'px';
				}
			}
			
			function slideUp2(element) {
				element.style.height = '0px';
			}
			
			accrlinks2.forEach(link2 => {
				link2.addEventListener('click', function (e) {
					e.preventDefault();
			
					const dropDown2 = this.nextElementSibling;
					const isActive2 = this.classList.contains('active');
			
					accrlinks2.forEach(l2 => l2.classList.remove('active'));
					accritems2.forEach(item2 => slideUp2(item2.querySelector('.acc_content')));
			
					if (!isActive2) {
						this.classList.add('active');
						slideToggle2(dropDown2);
					}
				});
			});
		}
	// Custom Accordian 2 Code End


	// Home page Line Parallax Code Start
	var lineparallax =  document.querySelector('.line_parallax');
	if (typeof(lineparallax) != 'undefined' && lineparallax != null)
		{
			const parallaxBox = document.querySelector('.line_parallax');
			
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
					window.addEventListener('scroll', handleScroll);
					} else {
					window.removeEventListener('scroll', handleScroll);
					}
				});
			}, { threshold: 0.1 });
		
			observer.observe(parallaxBox);
		
			function handleScroll() {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				const boxTop = parallaxBox.getBoundingClientRect().top + scrollTop;
				const offset = (scrollTop - boxTop) * 0.2; // Adjust the multiplier to change the parallax intensity
			
				parallaxBox.style.transform = `translateY(${offset}px)`;
			}
		}
	// Home page Line Parallax Code End
		
});


function bluesticky()
{
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', function() {
    bluesticky();
	document.body.classList.add('nowload');
	getheightanimation();
});

window.addEventListener('resize', function() {
    bluesticky();
	getheightanimation();
});

/*=====================================*/
/* Header Sticky : Start */

var lastScroll = 0;
var header = document.querySelector("header#header");
var headHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    var scroll1 = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scroll1 >= headHeight) {
        if (scroll1 > lastScroll) {
            console.log(headHeight);
            setTimeout(function () {
                header.classList.add("is-fixed");
            }, 50);
        } 
    } 
    if (scroll1 < 1) {
        header.classList.remove("is-fixed");
    }

    lastScroll = scroll1;
});
/* Header Sticky : End */
/*=====================================*/



function getheightanimation(){
	document.querySelectorAll('.custom_tab_img_content').forEach(function(element) {
		var titleHeight = element.querySelector('.tab_content_title').offsetHeight;
		var style = window.getComputedStyle(element.querySelector('.tab_content_title'));
		var margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
		element.style.setProperty('--addrheight', (titleHeight + margin) + 'px');
	});
	
}
