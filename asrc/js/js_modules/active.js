//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});






//SLIDERS
if($('.step-slider__items').length>0){
	$('.step-slider__items').slick({
	// autoplay: true,
	infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	appendArrows:$('.step-slider__btn-group'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',
	// responsive: [{
	// 	breakpoint: 768,
	// 	settings: {	adaptiveHeight: true}
	// 	}]
	});
	$('.step-slider-controls__li').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var $this = $(this);
		var newImage = $(this).index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
		$('.step-slider__items').slick('slickGoTo', $this.data('index'))
	  });
	  $('.step-slider__btn-group .slick-arrow').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var newImage = $('.step-slider__items .slick-active').index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
	  });
	  
};

if($('.feedback-slider__items').length>0){
	$('.feedback-slider__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	appendArrows:$('.feedback-slider__btns'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',

	});
	const feedbackNumbersFirst = document.querySelector('.feedback-slider__numbers-first');
	const feedbackNumbersTwo = document.querySelector('.feedback-slider__numbers-two');
	feedbackNumbersTwo.textContent = $('.feedback-slider__item').length;

	$('.feedback-slider__btns .slick-arrow').click(function() {
		var newItem = $('.feedback-slider__items .slick-active').index();
		console.log('newItem: ', newItem);
		feedbackNumbersFirst.textContent = ++newItem;
	  }); 
};


if($('.design__items').length>0){
	$('.design__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	appendArrows:$('.design__btns'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',

	});
	const DesignNumbersFirst = document.querySelector('.design__numbers-first');
	const DesignNumbersTwo = document.querySelector('.design__numbers-two');
	const designNumber = document.querySelectorAll('.design__number');
	const designNumberSpan = document.querySelectorAll('.design__number_span');
	const DesignNumbersTwoSpan = document.querySelector('.design__numbers-two span');
	if($('.design__item').length >= 10){
		DesignNumbersTwo.textContent = $('.design__item').length;
	} else {
		DesignNumbersTwoSpan.textContent = $('.design__item').length;
	}

	$('.design__btns .slick-arrow').click(function() {
		var newItem = $('.design__items .slick-active').index();
		var ChangeItem = $('.design__items .slick-active').index();
		DesignNumbersFirst.textContent = ++ChangeItem;
        designNumberSpan.forEach((item, i)=>{
			if(i == newItem && i < 10){
				item.textContent = ChangeItem;
			}
			if(i == newItem && i >= 10){
				designNumber.forEach((itemNumber, index)=>{
					if(index == newItem){
						itemNumber.textContent = ChangeItem;
					}
				})
			}
	})

}); 
};

if($('.video-feedback__slider').length>0){
	$('.video-feedback__slider').slick({
	// autoplay: true,
	infinite: false,
	dots: true,
	arrows: true,
	// fade: true,
	// cssEase: 'linear',
	accessibility:false,
	// centerMode: true,
	slidesToShow: 2,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	// appendArrows:$('.design__btns'),
	nextArrow:'<button type="button" class="step-slider__next slick-next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev slick-prev"></button>',
	responsive: [{
		breakpoint: 820,
		settings: {	slidesToShow: 1,
	centerMode: true
}
		}]
	}); 
};



//wow on
// wow = new WOW({
// 	mobile: false,
// 	offset: 80
  
//   })
// wow.init();

// parallax
var scene = document.querySelectorAll('.parallax');
	scene.forEach(item=>{
		const picture = item.querySelector('picture');
		picture.classList.toggle('parallax');
		var parallaxInstance = new Parallax(picture);
	})


// //ibg

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
	
	ibg();


// Scrollsmooth

var Scrollbar = window.Scrollbar;
	const scrollbar = document.querySelectorAll('.my-scrollbar');
	scrollbar.forEach(item=>{
		Scrollbar.init(item, {
			alwaysShowTracks:true});
	});

// instargam 
var feed = new Instafeed({
	accessToken: InstagramToken,
	limit: 10
});
feed.run();

