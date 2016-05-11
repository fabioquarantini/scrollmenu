//! jQuery ScrollMenu v1.5.0 - Fabio Quarantini - www.fabioquarantini.com

;( function( $, window, document, undefined ) {

	$.fn.scrollMenu = function( settings ) {

		var defaults = {
			addClassTo: $(this),
			scrollUpClass: 'is-visible',
			scrollDownClass: 'is-hidden',
			scrollTopClass: 'is-top',
			scrollBottomClass: 'is-bottom',
			scrollOffsetInClass: 'is-offset-in',
			scrollOffsetOutClass: 'is-offset-out',
			timeOut: 1000/60,
			tolleranceUp: 0,
			tolleranceDown: 0,
			scrollOffset: $(this).outerHeight(),
			onScrollMenuUp: function() {},
			onScrollMenuDown: function() {},
			onScrollMenuTop: function() {},
			onScrollMenuBottom: function() {},
			onScrollMenuOffsetIn: function() {},
			onScrollMenuOffsetOut: function() {}
		};

		//var
		var lastScrollTop = 0;
		var navigationHeight = defaults.navigationHeight;
		var tolleranceUp = defaults.tolleranceUp;
		var tolleranceDown = defaults.tolleranceDown;
		var scrollTimeout;

		$.extend( defaults, settings );

		// Shim layer with setTimeout fallback
		window.animationFrame = ( function ( callback ) {

			return window.requestAnimationFrame || function ( callback ) {

				window.setTimeout( callback, defaults.timeOut );

			};

		})();

		$( window ).scroll( function () {

			if ( scrollTimeout ) {
				// clear the timeout, if one is pending
				clearTimeout( scrollTimeout );
				scrollTimeout = false;
			} else {
				scrollTimeout = true;
				animationFrame( scrollHandler );
			}

		});


		var scrollHandler = function () {

			var scrollTop = $( window ).scrollTop();
			var windowHeight = $( window ).height();
			var documentHeight = $( document ).height();

			// If scroll is down and more than menu
			if ( scrollTop > lastScrollTop && scrollTop >= defaults.scrollOffset ) {
				// If scroll down is more than tollerance
				if( Math.abs( lastScrollTop - scrollTop ) <= tolleranceDown ) {

					return;

				} else {

					$( defaults.addClassTo ).removeClass( defaults.scrollUpClass ).addClass( defaults.scrollDownClass );

					// Add event on scroll down
					$( document ).trigger('onScrollMenuDown');

					// Run callback
					defaults.onScrollMenuDown.call();

				}

			} else {
				// If scroll up is more than tollerance
				if( Math.abs( lastScrollTop - scrollTop ) <= tolleranceUp ) {

					return;

				} else {

					$( defaults.addClassTo ).removeClass( defaults.scrollDownClass ).addClass( defaults.scrollUpClass );

					// Add event on scroll up
					$( document ).trigger('onScrollMenuUp');

					// Run callback
					defaults.onScrollMenuUp.call();

				}

			}

			// If scroll up reaches top
			if( scrollTop == 0 ) {

				$( defaults.addClassTo ).addClass( defaults.scrollTopClass );

				// Add event on scroll reaches top
				$( document ).trigger('onScrollMenuTop');

				// Run callback
				defaults.onScrollMenuTop.call();

			} else {

				$( defaults.addClassTo ).removeClass( defaults.scrollTopClass );

			}

			// If scroll up reaches bottom
			if( scrollTop == ( documentHeight - windowHeight ) ) {

				$( defaults.addClassTo ).addClass( defaults.scrollBottomClass );

				// Add event on scroll reaches bottom
				$( document ).trigger('onScrollMenuBottom');

				// Run callback
				defaults.onScrollMenuBottom.call();

			} else {

				$( defaults.addClassTo ).removeClass( defaults.scrollBottomClass );

			}

			// If scroll is in scrollOffset
			if( scrollTop <= defaults.scrollOffset ) {

				$( defaults.addClassTo ).removeClass( defaults.scrollOffsetOutClass ).addClass( defaults.scrollOffsetInClass );

				// Add event when scroll is in offset
				$( document ).trigger('onScrollMenuOffsetIn');

				// Run callback
				defaults.onScrollMenuOffsetIn.call();

			} else {

				$( defaults.addClassTo ).removeClass( defaults.scrollOffsetInClass ).addClass( defaults.scrollOffsetOutClass );

				// Add event when scroll is out of offset
				$( document ).trigger('onScrollMenuOffsetOut');

				// Run callback
				defaults.onScrollMenuOffsetOut.call();

			}

			scrollTimeout = false;
			lastScrollTop = scrollTop;

		};

		scrollHandler();
	};

})( jQuery, window, document );
