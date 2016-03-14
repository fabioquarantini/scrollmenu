//! jQuery ScrollMenu v1.0.0 - Fabio Quarantini - www.fabioquarantini.com

;( function( $, window, document, undefined ) {

	$.fn.scrollMenu = function( settings ) {

		var defaults = {
			addClassTo: $(this),
			scrollUpClass: 'is-visible',
			scrollDownClass: 'is-hidden',
			navigationHeight: $(this).outerHeight(),
			timeOut: 1000/60,
			delta: 5,
			scrollOffset: 0
		};

		var scrollTimeout;
		var lastScrollTop = 0;
		var navigationHeight = defaults.navigationHeight;
		var delta = defaults.delta;

		$.extend( defaults, settings );

		// Shim layer with setTimeout fallback
		window.animationFrame = ( function ( callback ) {

			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function ( callback ) {

				window.setTimeout(callback, defaults.timeOut );

			};

		})();

		$(window).scroll( function () {

			if ( scrollTimeout ) {
				// clear the timeout, if one is pending
				clearTimeout( scrollTimeout );
				scrollTimeout = null;
			}

			scrollTimeout = animationFrame( scrollHandler );

		});

		var scrollHandler = function () {

			var scrollTop = $( this ).scrollTop();
			var windowHeight = $(window).height();
			var documentHeight = $(document).height();

			// If scroll is more than delta
			if( Math.abs( lastScrollTop - scrollTop ) <= delta ) {

        		return;

			}

			// If scroll is down and more than menu
			if ( scrollTop > lastScrollTop && scrollTop > navigationHeight && scrollTop >= defaults.scrollOffset ) {

				$(defaults.addClassTo).removeClass( defaults.scrollUpClass ).addClass( defaults.scrollDownClass );


			} else {

				if( scrollTop + windowHeight < documentHeight && scrollTop > navigationHeight ) {

					$(defaults.addClassTo).removeClass( defaults.scrollDownClass ).addClass( defaults.scrollUpClass );

				}

			}

			lastScrollTop = scrollTop;

		};

	};


})( jQuery, window, document );
