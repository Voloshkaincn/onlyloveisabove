$(document).ready(function() {

	/*======= common rool ===========*/
	// $('#aside').on("click", function(e){
	//   return false;
	//   e.preventdefault();
	// });

	$('.aside__toggle').on('click', function(){
		if($(this).hasClass('aside__toggle-active')){
			$(this).blur().removeClass('aside__toggle-active');
			$('#aside').removeClass('aside-open');
			// $('body').removeClass('overflow-hidden');
			$('.aside__overlay').fadeOut();
		} else{
			$(this).blur().addClass('aside__toggle-active');
			$('#aside').addClass('aside-open');
			// $('body').addClass('overflow-hidden');
			$('.aside__overlay').fadeIn();
		}
	});
	$('.aside__overlay').on('click', function(){
		$(".aside__toggle-active").removeClass('aside__toggle-active').addClass('aside__toggle-passive');
		$('#aside').removeClass('aside-open');
		// $('body').removeClass('overflow-hidden');
		$('.aside__overlay').fadeOut();
	});


	// $('#asideToggle').on('click', function(event){
	// 	$(this).blur().toggleClass('aside__toggle-active')
	// 	$('#aside').toggleClass('aside-open');
	// 	$('body').toggleClass('overflow-hidden');
	// 	$('.aside__overlay').fadeIn();
	// })

	$('.btn').on('click', function(){
		$(this).blur()
	})

	/* ======= main page ======*/
	$('.about__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: '.about__nav',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-arrow-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-arrow-right"></span></button>'

	});

	$('.poster__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: '.poster__nav',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-arrow-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-arrow-right"></span></button>'

	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: '.reviews__nav',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-arrow-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-arrow-right"></span></button>',
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});