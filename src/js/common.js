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


	$("#panorama").panorama_viewer();
	// var panorama_left;
	// $(".panorama__left").on('click', function(){
	// 	var bg_pos = parseInt($('.pv-inner').css('backgroundPositionX')) + 200;
	// 		$('.pv-inner').css({'backgroundPositionX': bg_pos  + 'px'});
	// 		console.log(bg_pos);
	// });
	// $(".panorama__left").on('mousedown', function(){
	// 	panorama_left = setInterval(function(){
	// 		var bg_pos = parseInt($('.pv-inner').css('backgroundPositionX')) + 200;
	// 		$('.pv-inner').css({'backgroundPositionX': bg_pos  + 'px'});
	// 		console.log(bg_pos);
	// 	}, 1000);
	// });
	// $(".panorama__left").on('mouseup', function(){
	// 	clearInterval(panorama_left);
	// });
});

/*=== panorama function ====*/
	!function($){
	  function Timer(callback, delay) {
	      var timerId, start, remaining = delay;
	      this.pause = function() {
	          window.clearTimeout(timerId);
	          remaining -= new Date() - start;
	      };
	      this.resume = function() {
	          start = new Date();
	          timerId = window.setTimeout(callback, remaining);
	      };
	      this.resume();
	  }
	  
	  function touchHandler(event) {
	      var touches = event.changedTouches,
	          first = touches[0],
	          type = "";
	           switch(event.type)
	      {
	          case "touchstart": type = "mousedown"; break;
	          case "touchmove":  type="mousemove"; break;        
	          case "touchend":   type="mouseup"; break;
	          default: return;
	      }

	      var simulatedEvent = document.createEvent("MouseEvent");
	      var mult = 2;
	      if( navigator.userAgent.match(/Android/i) ) {
	          mult = 10
	      }
	      
	      simulatedEvent.initMouseEvent(type, true, true, window, 1,
	                                first.screenX, first.screenY,
	                                (first.clientX * mult), (first.clientY * mult), false,
	                                false, false, false, 0/*left*/, null);
	      first.target.dispatchEvent(simulatedEvent);
	  }

	  function pvCrease (){
	    var bg_size = $('.pv-inner').css('backgroundSize').substring($('.pv-inner').css('backgroundSize').indexOf(' '));
	    var bg_pos = $('.pv-inner').css('backgroundPositionX');

	    var new_bg_size = parseInt(bg_size);
	    var new_bg_pos = parseInt(bg_pos);
	    var max_bg_size = 320;
	    var min_bg_size = 140;

	    if($(this).hasClass('pv__increase') && new_bg_size < max_bg_size){
	      new_bg_size = new_bg_size + 40;
	      new_bg_pos = new_bg_pos + new_bg_pos*0.2;
	    }
	    if($(this).hasClass('pv__decrease') && new_bg_size > min_bg_size){
	      new_bg_size = new_bg_size - 40;
	      new_bg_pos = new_bg_pos - new_bg_pos*0.2;
	    }

	    $('.pv-inner').css({'backgroundSize': 'auto ' + new_bg_size + '%', 'backgroundPositionX': new_bg_pos + 'px'})
	    zoom = true;
	  }
	  
	  $.fn.panorama_viewer = function(options){
	    document.addEventListener("touchstart", touchHandler, true);
	    document.addEventListener("touchmove", touchHandler, true);
	    document.addEventListener("touchend", touchHandler, true);
	    document.addEventListener("touchcancel", touchHandler, true);
	    // document.querySelector('.pv__increase').addEventListener("click", pvCrease);
	    // document.querySelector('.pv__decrease').addEventListener("click", pvCrease);
	    return this.each(function(){
		var el = $(this);
        var width = el.find(".pv-inner").width()
        var height = el.find(".pv-inner").height()
        var cssPosition = $('.pv-inner').css('background-position'),
        	screenWidth = $(window).width();
	        cssX = parseInt(cssPosition.substring(0, cssPosition.indexOf(' ')));

	        el.find(".pv-inner").css({
	          'background-position-x': cssX + 'px '
	        })

	        var $bg = el.find(".pv-inner"),
	        elbounds = {
	          w: parseInt($bg.parent().width()),
	          h: parseInt($bg.parent().height())
	        },
	        bounds = {w: width - elbounds.w, h: height - elbounds.h},
	        origin,
	        start,
	        movecontinue = false,
	        new_bg_pos;
	  
	        if(cssX){
	          origin = {x: cssX, y: 0};
	          start = {x: cssX, y: 0};
	        } else {
	          origin = {x: 0, y: 0};
	          start = {x: 0, y: 0};
	        }

	        $('.pv__zoom').on('click', function(){
	          var bg_size = $('.pv-inner').css('backgroundSize').substring($('.pv-inner').css('backgroundSize').indexOf(' '));
	          var bg_pos = $('.pv-inner').css('backgroundPositionX');

	          var new_bg_size = parseInt(bg_size);
	          new_bg_pos = parseInt(bg_pos);
	          var max_bg_size = 320;
	          var min_bg_size = 140;

	          if($(this).hasClass('pv__increase') && new_bg_size < max_bg_size){
	            new_bg_size = new_bg_size + 40;
	            new_bg_pos = new_bg_pos + new_bg_pos*0.2;
	          }
	          if($(this).hasClass('pv__decrease') && new_bg_size > min_bg_size){
	            new_bg_size = new_bg_size - 40;
	            new_bg_pos = new_bg_pos - new_bg_pos*0.2;
	          }

	          $('.pv-inner').css({'backgroundSize': 'auto ' + new_bg_size + '%', 'backgroundPositionX': new_bg_pos + 'px'})
	        })

	        function move (e){
	        	var v;
		        if($(window).width() < 780){
		          	v = 10;
		        } else {
		         	v = 1;
		        }
		        console.log('v=' + v);

	            var inbounds = {x: false, y: false},
	              offset = {
	                  x: start.x - (origin.x - e.clientX)/v,
	                  y: start.y - (origin.y - e.clientY)/v
	              };      
	            inbounds.x = true;
	            if (movecontinue && inbounds.x) {
	                start.x = offset.x;
	                start.y = 0;
	            }
	            if(new_bg_pos){
	              start.x = new_bg_pos;
	              new_bg_pos = false;
	            }
	          // console.log(start.x);//debug
	          $(this).css('background-position-x', start.x + 'px ');
	          
	          origin.x = e.clientX;
	          origin.y = e.clientY;

	          e.stopPropagation();
	          return false;
	        }

	        function handle (e){
	            movecontinue = false;
	            $bg.unbind('mousemove', move);
	            if (e.type == 'mousedown') {
	                origin.x = e.clientX;
	                origin.y = e.clientY;
	                movecontinue = true;
	                $bg.bind('mousemove', move);
	            } else {
	              $(document.body).focus();
	            }
	            e.stopPropagation();
	            return false;
	        }
	        $bg.bind('mousedown mouseup mouseleave', handle);
	    });
	  }
	}(window.jQuery);
/*=== end panorama function ====*/

