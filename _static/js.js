/* Do not modify this file directly. It is compiled from other files. */
!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("is.post-load",e)}();;
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=175)}({175:function(e,t){var n=document.querySelectorAll(".coblocks-animate"),r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add(e.target.dataset.coblocksAnimation),r.unobserve(e.target))}))}),{threshold:[.15]});n.forEach((function(e){r.observe(e)}))}});;
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=564)}({564:function(e,t){!function(){"use strict";var e=document.getElementsByClassName("has-lightbox");Array.from(e).forEach((function(e,t){e.className+=" lightbox-"+t+" ",function(e){var t=document.createElement("div");t.setAttribute("class","coblocks-lightbox");var n=document.createElement("div");n.setAttribute("class","coblocks-lightbox__background");var o=document.createElement("div");o.setAttribute("class","coblocks-lightbox__heading");var c=document.createElement("button");c.setAttribute("class","coblocks-lightbox__close");var r=document.createElement("span");r.setAttribute("class","coblocks-lightbox__count");var a=document.createElement("div");a.setAttribute("class","coblocks-lightbox__image");var i=document.createElement("img"),l=document.createElement("figcaption");l.setAttribute("class","coblocks-lightbox__caption");var s=document.createElement("button");s.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--left");var u=document.createElement("button");u.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--right");var d=document.createElement("div");d.setAttribute("class","arrow-right");var b=document.createElement("div");b.setAttribute("class","arrow-left");var m,f=document.querySelectorAll(".has-lightbox.lightbox-".concat(e," > :not(.carousel-nav) figure img, figure.has-lightbox.lightbox-").concat(e," > img")),g=document.querySelectorAll(".has-lightbox.lightbox-".concat(e," > :not(.carousel-nav) figure figcaption"));o.append(r,c),a.append(i,l),s.append(b),u.append(d),t.append(n,o,a,s,u),f.length>0&&(document.getElementsByTagName("BODY")[0].append(t),1===f.length&&(u.remove(),s.remove()));g.length>0&&Array.from(g).forEach((function(e,t){e.addEventListener("click",(function(){p(t)}))}));Array.from(f).forEach((function(e,t){e.closest("figure").addEventListener("click",(function(){p(t)}))})),s.addEventListener("click",(function(){p(m=0===m?f.length-1:m-1)})),u.addEventListener("click",(function(){p(m=m===f.length-1?0:m+1)})),n.addEventListener("click",(function(){t.style.display="none"})),c.addEventListener("click",(function(){t.style.display="none"}));var v={preloaded:!1,setPreloadImages:function(){v.preloaded||(v.preloaded=!0,Array.from(f).forEach((function(e,t){v["img-".concat(t)]=new window.Image,v["img-".concat(t)].src=e.attributes.src.value,v["img-".concat(t)]["data-caption"]=f[t]&&f[t].nextElementSibling?function(e){for(var t=e.nextElementSibling;t;){if(t.matches("figcaption"))return t.innerHTML;t=t.nextElementSibling}return""}(f[t]):""})),document.onkeydown=function(e){if(void 0!==t&&"none"!==t)switch((e=e||window.event).keyCode){case 27:c.click();break;case 37:case 65:s.click();break;case 39:case 68:u.click()}})}};function p(e){v.setPreloadImages(),m=e,t.style.display="flex",n.style.backgroundImage="url(".concat(v["img-".concat(m)].src,")"),i.src=v["img-".concat(m)].src,l.innerHTML=v["img-".concat(m)]["data-caption"],r.textContent="".concat(m+1," / ").concat(f.length)}}(t)}))}()}});;
( function( $ ) {

	'use strict';

	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}

	wpcf7 = $.extend( {
		cached: 0,
		inputs: []
	}, wpcf7 );

	$( function() {
		wpcf7.supportHtml5 = ( function() {
			var features = {};
			var input = document.createElement( 'input' );

			features.placeholder = 'placeholder' in input;

			var inputTypes = [ 'email', 'url', 'tel', 'number', 'range', 'date' ];

			$.each( inputTypes, function( index, value ) {
				input.setAttribute( 'type', value );
				features[ value ] = input.type !== 'text';
			} );

			return features;
		} )();

		$( 'div.wpcf7 > form' ).each( function() {
			var $form = $( this );
			wpcf7.initForm( $form );

			if ( wpcf7.cached ) {
				wpcf7.refill( $form );
			}
		} );
	} );

	wpcf7.getId = function( form ) {
		return parseInt( $( 'input[name="_wpcf7"]', form ).val(), 10 );
	};

	wpcf7.initForm = function( form ) {
		var $form = $( form );

		wpcf7.setStatus( $form, 'init' );

		$form.submit( function( event ) {
			if ( ! wpcf7.supportHtml5.placeholder ) {
				$( '[placeholder].placeheld', $form ).each( function( i, n ) {
					$( n ).val( '' ).removeClass( 'placeheld' );
				} );
			}

			if ( typeof window.FormData === 'function' ) {
				wpcf7.submit( $form );
				event.preventDefault();
			}
		} );

		$( '.wpcf7-submit', $form ).after( '<span class="ajax-loader"></span>' );

		wpcf7.toggleSubmit( $form );

		$form.on( 'click', '.wpcf7-acceptance', function() {
			wpcf7.toggleSubmit( $form );
		} );

		// Exclusive Checkbox
		$( '.wpcf7-exclusive-checkbox', $form ).on( 'click', 'input:checkbox', function() {
			var name = $( this ).attr( 'name' );
			$form.find( 'input:checkbox[name="' + name + '"]' ).not( this ).prop( 'checked', false );
		} );

		// Free Text Option for Checkboxes and Radio Buttons
		$( '.wpcf7-list-item.has-free-text', $form ).each( function() {
			var $freetext = $( ':input.wpcf7-free-text', this );
			var $wrap = $( this ).closest( '.wpcf7-form-control' );

			if ( $( ':checkbox, :radio', this ).is( ':checked' ) ) {
				$freetext.prop( 'disabled', false );
			} else {
				$freetext.prop( 'disabled', true );
			}

			$wrap.on( 'change', ':checkbox, :radio', function() {
				var $cb = $( '.has-free-text', $wrap ).find( ':checkbox, :radio' );

				if ( $cb.is( ':checked' ) ) {
					$freetext.prop( 'disabled', false ).focus();
				} else {
					$freetext.prop( 'disabled', true );
				}
			} );
		} );

		// Placeholder Fallback
		if ( ! wpcf7.supportHtml5.placeholder ) {
			$( '[placeholder]', $form ).each( function() {
				$( this ).val( $( this ).attr( 'placeholder' ) );
				$( this ).addClass( 'placeheld' );

				$( this ).focus( function() {
					if ( $( this ).hasClass( 'placeheld' ) ) {
						$( this ).val( '' ).removeClass( 'placeheld' );
					}
				} );

				$( this ).blur( function() {
					if ( '' === $( this ).val() ) {
						$( this ).val( $( this ).attr( 'placeholder' ) );
						$( this ).addClass( 'placeheld' );
					}
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.date ) {
			$form.find( 'input.wpcf7-date[type="date"]' ).each( function() {
				$( this ).datepicker( {
					dateFormat: 'yy-mm-dd',
					minDate: new Date( $( this ).attr( 'min' ) ),
					maxDate: new Date( $( this ).attr( 'max' ) )
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.number ) {
			$form.find( 'input.wpcf7-number[type="number"]' ).each( function() {
				$( this ).spinner( {
					min: $( this ).attr( 'min' ),
					max: $( this ).attr( 'max' ),
					step: $( this ).attr( 'step' )
				} );
			} );
		}

		// Character Count
		wpcf7.resetCounter( $form );

		// URL Input Correction
		$form.on( 'change', '.wpcf7-validates-as-url', function() {
			var val = $.trim( $( this ).val() );

			if ( val
			&& ! val.match( /^[a-z][a-z0-9.+-]*:/i )
			&& -1 !== val.indexOf( '.' ) ) {
				val = val.replace( /^\/+/, '' );
				val = 'http://' + val;
			}

			$( this ).val( val );
		} );
	};

	wpcf7.submit = function( form ) {
		if ( typeof window.FormData !== 'function' ) {
			return;
		}

		var $form = $( form );

		$( '.ajax-loader', $form ).addClass( 'is-active' );
		wpcf7.clearResponse( $form );

		var formData = new FormData( $form.get( 0 ) );

		var detail = {
			id: $form.closest( 'div.wpcf7' ).attr( 'id' ),
			status: 'init',
			inputs: [],
			formData: formData
		};

		$.each( $form.serializeArray(), function( i, field ) {
			if ( '_wpcf7' == field.name ) {
				detail.contactFormId = field.value;
			} else if ( '_wpcf7_version' == field.name ) {
				detail.pluginVersion = field.value;
			} else if ( '_wpcf7_locale' == field.name ) {
				detail.contactFormLocale = field.value;
			} else if ( '_wpcf7_unit_tag' == field.name ) {
				detail.unitTag = field.value;
			} else if ( '_wpcf7_container_post' == field.name ) {
				detail.containerPostId = field.value;
			} else if ( field.name.match( /^_/ ) ) {
				// do nothing
			} else {
				detail.inputs.push( field );
			}
		} );

		wpcf7.triggerEvent( $form.closest( 'div.wpcf7' ), 'beforesubmit', detail );

		var ajaxSuccess = function( data, status, xhr, $form ) {
			detail.id = $( data.into ).attr( 'id' );
			detail.status = data.status;
			detail.apiResponse = data;

			switch ( data.status ) {
				case 'init':
					wpcf7.setStatus( $form, 'init' );
					break;
				case 'validation_failed':
					$.each( data.invalid_fields, function( i, n ) {
						$( n.into, $form ).each( function() {
							wpcf7.notValidTip( this, n.message );
							$( '.wpcf7-form-control', this ).addClass( 'wpcf7-not-valid' );
							$( '.wpcf7-form-control', this ).attr(
								'aria-describedby',
								n.error_id
							);
							$( '[aria-invalid]', this ).attr( 'aria-invalid', 'true' );
						} );
					} );

					wpcf7.setStatus( $form, 'invalid' );
					wpcf7.triggerEvent( data.into, 'invalid', detail );
					break;
				case 'acceptance_missing':
					wpcf7.setStatus( $form, 'unaccepted' );
					wpcf7.triggerEvent( data.into, 'unaccepted', detail );
					break;
				case 'spam':
					wpcf7.setStatus( $form, 'spam' );
					wpcf7.triggerEvent( data.into, 'spam', detail );
					break;
				case 'aborted':
					wpcf7.setStatus( $form, 'aborted' );
					wpcf7.triggerEvent( data.into, 'aborted', detail );
					break;
				case 'mail_sent':
					wpcf7.setStatus( $form, 'sent' );
					wpcf7.triggerEvent( data.into, 'mailsent', detail );
					break;
				case 'mail_failed':
					wpcf7.setStatus( $form, 'failed' );
					wpcf7.triggerEvent( data.into, 'mailfailed', detail );
					break;
				default:
					wpcf7.setStatus( $form,
						'custom-' + data.status.replace( /[^0-9a-z]+/i, '-' )
					);
			}

			wpcf7.refill( $form, data );

			wpcf7.triggerEvent( data.into, 'submit', detail );

			if ( 'mail_sent' == data.status ) {
				$form.each( function() {
					this.reset();
				} );

				wpcf7.toggleSubmit( $form );
				wpcf7.resetCounter( $form );
			}

			if ( ! wpcf7.supportHtml5.placeholder ) {
				$form.find( '[placeholder].placeheld' ).each( function( i, n ) {
					$( n ).val( $( n ).attr( 'placeholder' ) );
				} );
			}

			$( '.wpcf7-response-output', $form )
				.html( '' ).append( data.message ).slideDown( 'fast' );

			$( '.screen-reader-response', $form.closest( '.wpcf7' ) ).each( function() {
				var $response = $( this );
				$( '[role="status"]', $response ).html( data.message );

				if ( data.invalid_fields ) {
					$.each( data.invalid_fields, function( i, n ) {
						if ( n.idref ) {
							var $li = $( '<li></li>' ).append( $( '<a></a>' ).attr( 'href', '#' + n.idref ).append( n.message ) );
						} else {
							var $li = $( '<li></li>' ).append( n.message );
						}

						$li.attr( 'id', n.error_id );

						$( 'ul', $response ).append( $li );
					} );
				}
			} );

			if ( data.posted_data_hash ) {
				$form.find( 'input[name="_wpcf7_posted_data_hash"]' ).first()
					.val( data.posted_data_hash );
			}
		};

		$.ajax( {
			type: 'POST',
			url: wpcf7.apiSettings.getRoute(
				'/contact-forms/' + wpcf7.getId( $form ) + '/feedback' ),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		} ).done( function( data, status, xhr ) {
			ajaxSuccess( data, status, xhr, $form );
			$( '.ajax-loader', $form ).removeClass( 'is-active' );
		} ).fail( function( xhr, status, error ) {
			var $e = $( '<div class="ajax-error"></div>' ).text( error.message );
			$form.after( $e );
		} );
	};

	wpcf7.triggerEvent = function( target, name, detail ) {
		var event = new CustomEvent( 'wpcf7' + name, {
			bubbles: true,
			detail: detail
		} );

		$( target ).get( 0 ).dispatchEvent( event );
	};

	wpcf7.setStatus = function( form, status ) {
		var $form = $( form );
		var prevStatus = $form.attr( 'data-status' );

		$form.data( 'status', status );
		$form.addClass( status );
		$form.attr( 'data-status', status );

		if ( prevStatus && prevStatus !== status ) {
			$form.removeClass( prevStatus );
		}
	}

	wpcf7.toggleSubmit = function( form, state ) {
		var $form = $( form );
		var $submit = $( 'input:submit', $form );

		if ( typeof state !== 'undefined' ) {
			$submit.prop( 'disabled', ! state );
			return;
		}

		if ( $form.hasClass( 'wpcf7-acceptance-as-validation' ) ) {
			return;
		}

		$submit.prop( 'disabled', false );

		$( '.wpcf7-acceptance', $form ).each( function() {
			var $span = $( this );
			var $input = $( 'input:checkbox', $span );

			if ( ! $span.hasClass( 'optional' ) ) {
				if ( $span.hasClass( 'invert' ) && $input.is( ':checked' )
				|| ! $span.hasClass( 'invert' ) && ! $input.is( ':checked' ) ) {
					$submit.prop( 'disabled', true );
					return false;
				}
			}
		} );
	};

	wpcf7.resetCounter = function( form ) {
		var $form = $( form );

		$( '.wpcf7-character-count', $form ).each( function() {
			var $count = $( this );
			var name = $count.attr( 'data-target-name' );
			var down = $count.hasClass( 'down' );
			var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
			var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
			var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

			var updateCount = function( target ) {
				var $target = $( target );
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr( 'data-current-value', count );
				$count.text( count );

				if ( maximum && maximum < length ) {
					$count.addClass( 'too-long' );
				} else {
					$count.removeClass( 'too-long' );
				}

				if ( minimum && length < minimum ) {
					$count.addClass( 'too-short' );
				} else {
					$count.removeClass( 'too-short' );
				}
			};

			$( ':input[name="' + name + '"]', $form ).each( function() {
				updateCount( this );

				$( this ).keyup( function() {
					updateCount( this );
				} );
			} );
		} );
	};

	wpcf7.notValidTip = function( target, message ) {
		var $target = $( target );
		$( '.wpcf7-not-valid-tip', $target ).remove();

		$( '<span></span>' ).attr( {
			'class': 'wpcf7-not-valid-tip',
			'aria-hidden': 'true',
		} ).text( message ).appendTo( $target );

		if ( $target.is( '.use-floating-validation-tip *' ) ) {
			var fadeOut = function( target ) {
				$( target ).not( ':hidden' ).animate( {
					opacity: 0
				}, 'fast', function() {
					$( this ).css( { 'z-index': -100 } );
				} );
			};

			$target.on( 'mouseover', '.wpcf7-not-valid-tip', function() {
				fadeOut( this );
			} );

			$target.on( 'focus', ':input', function() {
				fadeOut( $( '.wpcf7-not-valid-tip', $target ) );
			} );
		}
	};

	wpcf7.refill = function( form, data ) {
		var $form = $( form );

		var refillCaptcha = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( 'img.wpcf7-captcha-' + i ).attr( 'src', n );
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec( n );
				$form.find( 'input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]' ).attr( 'value', match[ 1 ] );
			} );
		};

		var refillQuiz = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( ':input[name="' + i + '"]' ).siblings( 'span.wpcf7-quiz-label' ).text( n[ 0 ] );
				$form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[ 1 ] );
			} );
		};

		if ( typeof data === 'undefined' ) {
			$.ajax( {
				type: 'GET',
				url: wpcf7.apiSettings.getRoute(
					'/contact-forms/' + wpcf7.getId( $form ) + '/refill' ),
				beforeSend: function( xhr ) {
					var nonce = $form.find( ':input[name="_wpnonce"]' ).val();

					if ( nonce ) {
						xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					}
				},
				dataType: 'json'
			} ).done( function( data, status, xhr ) {
				if ( data.captcha ) {
					refillCaptcha( $form, data.captcha );
				}

				if ( data.quiz ) {
					refillQuiz( $form, data.quiz );
				}
			} );

		} else {
			if ( data.captcha ) {
				refillCaptcha( $form, data.captcha );
			}

			if ( data.quiz ) {
				refillQuiz( $form, data.quiz );
			}
		}
	};

	wpcf7.clearResponse = function( form ) {
		var $form = $( form );

		$form.siblings( '.screen-reader-response' ).each( function() {
			$( '[role="status"]', this ).html( '' );
			$( 'ul', this ).html( '' );
		} );

		$( '.wpcf7-not-valid-tip', $form ).remove();
		$( '[aria-invalid]', $form ).attr( 'aria-invalid', 'false' );
		$( '.wpcf7-form-control', $form ).removeClass( 'wpcf7-not-valid' );

		$( '.wpcf7-response-output', $form ).hide().empty();
	};

	wpcf7.apiSettings.getRoute = function( path ) {
		var url = wpcf7.apiSettings.root;

		url = url.replace(
			wpcf7.apiSettings.namespace,
			wpcf7.apiSettings.namespace + path );

		return url;
	};

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
	if ( typeof window.CustomEvent === "function" ) return false;

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event,
			params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
} )();
;
jQuery(document).ready(function($){function iriska_body_overflow_hidden(){$('body').addClass('iriska-overflow-hidden')}
function iriska_body_overflow_visible(){$('body').removeClass('iriska-overflow-hidden')}
function iriska_overlay_remove(){$('.iriska-overlay').remove()}
setTimeout(function(){$('.iriska-fixed-button-wrapper').addClass('iriska-fixed-button-wrapper-transform');$('.iriska-fixed-button').addClass('iriska-fixed-button-transform')},2000);function iriska_comments(){$('.iriska-fixed-button').removeClass('iriska-fixed-button-transform');$('.iriska-comment-area-wrapper').addClass('iriska-comment-area-open');$('body').append('<span class="iriska-overlay"></span>');iriska_body_overflow_hidden()}
$('.iriska-fixed-button-wrapper').on('click','.iriska-comment-open-button',function(){iriska_comments()});if(window.location.href.indexOf('#comment')!=-1){iriska_comments()}
$('.iriska-fixed-button-wrapper').on('click','.iriska-sidebar-open-button',function(){$('.iriska-fixed-button').removeClass('iriska-fixed-button-transform');$('.iriska-sidebar-wrapper').addClass('iriska-sidebar-wrapper-open');$('body').append('<span class="iriska-overlay"></span>');iriska_body_overflow_hidden()});$('body').on('click','.iriska-overlay',function(){iriska_body_overflow_visible();iriska_overlay_remove();$('.iriska-comment-area-wrapper').removeClass('iriska-comment-area-open');$('.iriska-sidebar-wrapper').removeClass('iriska-sidebar-wrapper-open');$('.iriska-fixed-button').addClass('iriska-fixed-button-transform')});$('body').on('click','.iriska-close-button-comment',function(){iriska_body_overflow_visible();iriska_overlay_remove();$('.iriska-comment-area-wrapper').removeClass('iriska-comment-area-open');$('.iriska-fixed-button').addClass('iriska-fixed-button-transform')});$('body').on('click','.iriska-close-button-sidebar',function(){iriska_body_overflow_visible();iriska_overlay_remove();$('.iriska-sidebar-wrapper').removeClass('iriska-sidebar-wrapper-open');$('.iriska-fixed-button').addClass('iriska-fixed-button-transform')});$('body').keyup(function(e){if(e.keyCode==27){iriska_body_overflow_visible();iriska_overlay_remove();$('.iriska-comment-area-wrapper').removeClass('iriska-comment-area-open');$('.iriska-sidebar-wrapper').removeClass('iriska-sidebar-wrapper-open');$('.iriska-fixed-button').addClass('iriska-fixed-button-transform')}});$('.iriska-open-menu-button-wrapper').on('click',function(){$('.iriska-main-navigation-wrapper').addClass('iriska-main-navigation-visible');iriska_body_overflow_hidden()});$('.iriska-close-button-menu').on('click',function(){$('.iriska-main-navigation-wrapper').removeClass('iriska-main-navigation-visible');iriska_body_overflow_visible()});$('body').keyup(function(e){if(e.keyCode==27){$('.iriska-main-navigation-wrapper').removeClass('iriska-main-navigation-visible');iriska_body_overflow_visible()}});$('.iriska-site-menu .menu-item-has-children').mouseleave(function(){var submenu=$(this).children('.sub-menu:first');$(submenu).removeClass('iriska-menu-item-change-position');$(submenu).css({'-webkit-transform':'none','-moz-transform':'none','-ms-transform':'none','-o-transform':'none','transform':'none'})});$('.iriska-site-menu .menu-item-has-children').hover(function(){var width_screen=$(window).width();var height_screen=$(window).height();var submenu=$(this).children('.sub-menu:first');var submenu_position=$(submenu).offset();var scroll_top=$(window).scrollTop();var submenu_width=$(submenu).outerWidth();var submenu_height=$(submenu).outerHeight();var new_position_left=width_screen-(submenu_position.left+submenu_width);var new_position_top=Math.round(height_screen+scroll_top-(submenu_position.top+submenu_height));if(new_position_left<0){$(submenu).addClass('iriska-menu-item-change-position')}
if(new_position_top<0){$(submenu).css({'-webkit-transform':'translateY('+new_position_top+'px)','-moz-transform':'translateY('+new_position_top+'px)','-ms-transform':'translateY('+new_position_top+'px)','-o-transform':'translateY('+new_position_top+'px)','transform':'translateY('+new_position_top+'px)'})}});$('body').on('click','.iriska-site-menu .iriska-open-sub-menu-button-wrapper',function(){var item_parent=$(this).parent();$(item_parent).prevAll('.menu-item').addClass('iriska-hide-menu-item');$(item_parent).nextAll('.menu-item').addClass('iriska-hide-menu-item');$(item_parent).addClass('iriska-active-menu-item');$(this).nextAll('.sub-menu').addClass('iriska-sub-menu-open iriska-menu-animation');$('.iriska-sub-menu-open').last().prevAll('a, .iriska-open-sub-menu-button-wrapper').addClass('iriska-hide-menu-item iriska-menu-item-additional-style');var menu_item_text=$('.iriska-sub-menu-open').last().prevAll('a').text();$('.iriska-current-menu-item-text').html(menu_item_text);if($('.show-menu-item').length>=1){$('.close-menu-button').addClass('close-button-visible')}else{$('.close-menu-button').removeClass('close-button-visible')}
if(menu_item_text){$('.iriska-back-button-menu-wrapper, .iriska-current-menu-item-text-wrapper').addClass('iriska-visible-menu-controls')}else{$('.iriska-back-button-menu-wrapper, .iriska-current-menu-item-text-wrapper').removeClass('iriska-visible-menu-controls')}});$('body').on('click','.iriska-main-navigation .iriska-back-button-menu',function(){var last_item=$('.iriska-sub-menu-open').last();var last_item_parent=$('.iriska-sub-menu-open').last().parent();$(last_item).prevAll('a, .iriska-open-sub-menu-button-wrapper').removeClass('iriska-hide-menu-item iriska-menu-item-additional-style');$(last_item_parent).prevAll('.menu-item').removeClass('iriska-hide-menu-item');$(last_item_parent).nextAll('.menu-item').removeClass('iriska-hide-menu-item');$(last_item_parent).removeClass('iriska-hidden-menu-item iriska-active-menu-item');$(last_item).removeClass('iriska-sub-menu-open iriska-menu-animation');var menu_item_text=$('.iriska-sub-menu-open').last().prevAll('a').text();if(menu_item_text){$('.iriska-back-button-menu-wrapper, .iriska-current-menu-item-text-wrapper').addClass('iriska-visible-menu-controls')}else{$('.iriska-back-button-menu-wrapper, .iriska-current-menu-item-text-wrapper').removeClass('iriska-visible-menu-controls')}
$('.iriska-current-menu-item-text').html(menu_item_text)});var iriska_header_height=$('.iriska-site-fixed-header .iriska-site-header').outerHeight();$('.iriska-site-fixed-header .iriska-site-content').css('margin-top',iriska_header_height);$(window).resize(function(){var iriska_header_height=$('.iriska-site-header').outerHeight();$('.iriska-site-fixed-header .iriska-site-content').css('margin-top',iriska_header_height)});$(window).scroll(function(){if($(document).scrollTop()>200){$('.iriska-site-fixed-header .iriska-site-header').addClass('iriska-small-fixed-header')}else{$('.iriska-site-fixed-header .iriska-site-header').removeClass('iriska-small-fixed-header')}});$('body.iriska-smooth-scroll').on('click','a[href^="#"]',function(event){event.preventDefault();var scroll_to=$(this).attr('href');$('html, body').animate({scrollTop:$(scroll_to).offset().top},500)});var isIe=/(trident|msie)/i.test(navigator.userAgent);if(isIe&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1}
element.focus()}},!1)}});
/*! This file is auto-generated */
window.addComment=function(f){var v,I,C,h=f.document,E={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=f.MutationObserver||f.WebKitMutationObserver||f.MozMutationObserver,i="querySelector"in h&&"addEventListener"in f,n=!!h.documentElement.dataset;function t(){d(),function(){if(!e)return;new e(o).observe(h.body,{childList:!0,subtree:!0})}()}function d(e){if(i&&(v=b(E.cancelReplyId),I=b(E.commentFormId),v)){v.addEventListener("touchstart",l),v.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return I.removeEventListener("keydown",t),e.preventDefault(),I.submit.click(),!1};I&&I.addEventListener("keydown",t);for(var n,d=function(e){var t,n=E.commentReplyClass;e&&e.childNodes||(e=h);t=h.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),o=0,r=d.length;o<r;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t=b(E.temporaryFormId);if(t&&C){b(E.parentIdFieldId).value="0";var n=t.textContent;t.parentNode.replaceChild(C,t),this.style.display="none";var d=b(E.commentReplyTitleId),o=d&&d.firstChild,r=o&&o.nextSibling;o&&o.nodeType===Node.TEXT_NODE&&n&&(r&&"A"===r.nodeName&&r.id!==E.cancelReplyId&&(r.style.display=""),o.textContent=n),e.preventDefault()}}function a(e){var t=b(E.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),r=m(d,"commentid"),i=m(d,"respondelement"),l=m(d,"postid"),a=m(d,"replyto")||n;o&&r&&i&&l&&!1===f.addComment.moveForm(o,r,i,l,a)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function b(e){return h.getElementById(e)}return i&&"loading"!==h.readyState?t():i&&f.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var r=b(e);C=b(n);var i,l,a,m=b(E.parentIdFieldId),c=b(E.postIdFieldId),s=b(E.commentReplyTitleId),y=s&&s.firstChild,u=y&&y.nextSibling;if(r&&C&&m){void 0===o&&(o=y&&y.textContent),function(e){var t=E.temporaryFormId,n=b(t),d=b(E.commentReplyTitleId),o=d?d.firstChild.textContent:"";if(n)return;(n=h.createElement("div")).id=t,n.style.display="none",n.textContent=o,e.parentNode.insertBefore(n,e)}(C),d&&c&&(c.value=d),m.value=t,v.style.display="",r.parentNode.insertBefore(C,r.nextSibling),y&&y.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==E.cancelReplyId&&(u.style.display="none"),y.textContent=o),v.onclick=function(){return!1};try{for(var p=0;p<I.elements.length;p++)if(i=I.elements[p],l=!1,"getComputedStyle"in f?a=f.getComputedStyle(i):h.documentElement.currentStyle&&(a=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==i.type&&!i.disabled&&!l){i.focus();break}}catch(e){}return!1}}}}(window);;
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n=function(){var t,e,n,o,r={rootMargin:"200px 0px",threshold:.01},i=0;c();var s=document.querySelector("body");function c(){if(t=document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)"),i=t.length,e&&e.disconnect(),"IntersectionObserver"in window)for(e=new IntersectionObserver(a,r),o=0;o<t.length;o++)(n=t[o]).getAttribute("data-lazy-loaded")||e.observe(n);else!function(t){var e;for(e=0;e<t.length;e++){h(t[e])}}(t)}function a(t){var n;for(0===i&&e.disconnect(),n=0;n<t.length;n++){var o=t[n];o.intersectionRatio>0&&(i--,e.unobserve(o.target),h(o.target))}}function h(t){var e,n,o;if(!(!t instanceof HTMLImageElement)){e=t.getAttribute("data-lazy-srcset"),n=t.getAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-srcset"),t.removeAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-src"),t.classList.add("jetpack-lazy-image--handled"),t.setAttribute("data-lazy-loaded",1),n&&t.setAttribute("sizes",n),e?t.setAttribute("srcset",e):t.removeAttribute("srcset");try{o=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(t){(o=document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image",!0,!0)}t.dispatchEvent(o)}}s&&(s.addEventListener("is.post-load",c),s.addEventListener("jetpack-lazy-images-load",c))};!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var i=r.element,s=c(i),a=this._rootContainsTarget(i),h=r.entry,u=e&&a&&this._computeTargetAndRootIntersection(i,n),l=r.entry=new o({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n,intersectionRect:u});h?e&&a?this._hasCrossedThreshold(h,l)&&this._queuedEntries.push(l):h&&h.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var r,i,s,a,u,l,d,p,f=c(n),g=h(n),v=!1;!v;){var m=null,b=1==g.nodeType?t.getComputedStyle(g):{};if("none"==b.display)return;if(g==this.root||g==e?(v=!0,m=o):g!=e.body&&g!=e.documentElement&&"visible"!=b.overflow&&(m=c(g)),m&&(r=m,i=f,s=void 0,a=void 0,u=void 0,l=void 0,d=void 0,p=void 0,s=Math.max(r.top,i.top),a=Math.min(r.bottom,i.bottom),u=Math.max(r.left,i.left),l=Math.min(r.right,i.right),p=a-s,!(f=(d=l-u)>=0&&p>=0&&{top:s,bottom:a,left:u,right:l,width:d,height:p})))break;g=h(g)}return f}},r.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},r.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},r.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},r.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=o}function o(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?r/n:this.isIntersecting?1:0}function r(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document),"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)}]);;
/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);;
/* Do not modify this file directly. It is compiled from other files. */
/* global jetpackCarouselStrings, DocumentTouch */
jQuery(document).ready(function(e){var t,a,i,o,s,r,n,l,c,d,p,u,m,h,f,g,j,v,w,_=110,x=e("body").css("overflow"),b=e("html").css("overflow"),y="";window.innerWidth<=760&&(_=Math.round(window.innerWidth/760*110))<40&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(_=0),void 0===Date.now&&(Date.now=function(){return(new Date).getTime()});var k=function(e){switch(e.which){case 38:e.preventDefault(),o.scrollTop(o.scrollTop()-100);break;case 40:e.preventDefault(),o.scrollTop(o.scrollTop()+100);break;case 39:e.preventDefault(),i.jp_carousel("next");break;case 37:case 8:e.preventDefault(),i.jp_carousel("previous");break;case 27:e.preventDefault(),o.jp_carousel("close")}},S=function(){clearTimeout(d),d=setTimeout(function(){i.jp_carousel("slides").jp_carousel("fitSlide",!0),i.jp_carousel("updateSlidePositions",!0),i.jp_carousel("fitMeta",!0)},200)},C=function(){e("a img[data-attachment-id]").each(function(){var t=e(this).parent();if(!t.parent(".gallery-icon").length&&void 0!==e(t).attr("href")){var a=!1;e(t).attr("href").split("?")[0]===e(this).attr("data-orig-file").split("?")[0]&&1===Number(jetpackCarouselStrings.single_image_gallery_media_file)&&(a=!0),e(t).attr("href")===e(this).attr("data-permalink")&&(a=!0),a&&(e(t).addClass("single-image-gallery"),e(t).data("carousel-extra",{blog_id:Number(jetpackCarouselStrings.blog_id)}))}})},I={testForData:function(t){return!(!(t=e(t)).length||!t.data("carousel-extra"))},testIfOpened:function(){return!(void 0===i||void 0===i.opened||!i.opened)},openOrSelectSlide:function(t){e(this).jp_carousel("testIfOpened")?i.jp_carousel("selectSlideAtIndex",t):e(this).jp_carousel("open",{start_index:t})},open:function(d){var m={items_selector:".gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id]",start_index:0},h=e(this).data("carousel-extra");if(h&&(function(){if(!t){t=e("<div></div>").addClass("jp-carousel-overlay").css({position:"fixed",top:0,right:0,bottom:0,left:0});var d=1==+jetpackCarouselStrings.display_comments,m=d?'<a class="jp-carousel-commentlink" href="#">'+jetpackCarouselStrings.comment+"</a>":"";Number(jetpackCarouselStrings.is_logged_in),m=e('<div class="jp-carousel-buttons">'+m+"</div>"),c=e('<h2 itemprop="caption description"></h2>'),p=e('<div class="jp-carousel-photo-info"></div>').append(c),f=e("<div></div>").addClass("jp-carousel-image-meta").css({float:"right","margin-top":"20px",width:"250px"}),0<m.children().length&&f.append(m),f.append("<ul class='jp-carousel-image-exif' style='display:none;'></ul>").append("<a class='jp-carousel-image-download' style='display:none;'></a>").append("<div class='jp-carousel-image-map' style='display:none;'></div>"),g=e("<div></div>").addClass("jp-carousel-titleanddesc").css({width:"100%","margin-top":f.css("margin-top")});var h=e(window).width()-2*_-(f.width()+40);if(h+="px",v=e("<div></div>").addClass("jp-carousel-left-column-wrapper").css({width:Math.floor(h)}).append(g),d){var w='<div id="jp-carousel-comment-form-container">';jetpackCarouselStrings.local_comments_commenting_as&&jetpackCarouselStrings.local_comments_commenting_as.length&&(1!==Number(jetpackCarouselStrings.is_logged_in)&&1===Number(jetpackCarouselStrings.comment_registration)?w+='<div id="jp-carousel-comment-form-commenting-as">'+jetpackCarouselStrings.local_comments_commenting_as+"</div>":(w+='<form id="jp-carousel-comment-form">',w+='<textarea name="comment" class="jp-carousel-comment-form-field jp-carousel-comment-form-textarea" id="jp-carousel-comment-form-comment-field" placeholder="'+jetpackCarouselStrings.write_comment+'"></textarea>',w+='<div id="jp-carousel-comment-form-submit-and-info-wrapper">',w+='<div id="jp-carousel-comment-form-commenting-as">'+jetpackCarouselStrings.local_comments_commenting_as+"</div>",w+='<input type="submit" name="submit" class="jp-carousel-comment-form-button" id="jp-carousel-comment-form-button-submit" value="'+jetpackCarouselStrings.post_comment+'" />',w+='<span id="jp-carousel-comment-form-spinner">&nbsp;</span>',w+='<div id="jp-carousel-comment-post-results"></div>',w+="</div>",w+="</form>")),j=e(w+="</div>").css({width:"100%","margin-top":"20px",color:"#999"}),a=e("<div></div>").addClass("jp-carousel-comments").css({width:"100%",bottom:"10px","margin-top":"20px"});var x=e('<div id="jp-carousel-comments-loading"><span>'+jetpackCarouselStrings.loading_comments+"</span></div>").css({width:"100%",bottom:"10px","margin-top":"20px"});v.append(j).append(a).append(x)}var b=e("<div></div>").addClass("jp-carousel-fadeaway");n=e("<div></div>").addClass("jp-carousel-info").css({top:Math.floor(e(window).height()/100*85),left:_,right:_}).append(p).append(f),window.innerWidth<=760?(p.remove().insertAfter(g),n.prepend(v)):n.append(v);var C=e(window).height()-parseInt(n.css("top"),10)+"px";s=e("<div><span></span></div>").addClass("jp-carousel-next-button").css({right:"15px"}).hide(),r=e("<div><span></span></div>").addClass("jp-carousel-previous-button").css({left:0}).hide(),s.add(r).css({position:"fixed",top:"40px",bottom:C,width:_}),i=e("<div></div>").addClass("jp-carousel").css({position:"absolute",top:0,bottom:C,left:0,right:0}),u=e('<div class="jp-carousel-close-hint"><span>&times;</span></div>').css({position:"fixed"}),o=e("<div></div>").addClass("jp-carousel-wrap").addClass("jp-carousel-transitions"),"white"===jetpackCarouselStrings.background_color&&o.addClass("jp-carousel-light"),o.attr("itemscope",""),o.attr("itemtype","https://schema.org/ImageGallery"),o.css({position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":2147483647,"overflow-x":"hidden","overflow-y":"auto",direction:"ltr"}).hide().append(t).append(i).append(b).append(n).append(s).append(r).append(u).appendTo(e("body")).click(function(t){var a=e(t.target),s=a.parents("div.jp-carousel-wrap"),r=s.data("carousel-extra"),l=s.find("div.selected").data("attachment-id");if(r=r||[],a.is(i)||a.parents().add(a).is(u))o.jp_carousel("close");else if(a.hasClass("jp-carousel-commentlink"))t.preventDefault(),t.stopPropagation(),e(window).unbind("keydown",k),o.animate({scrollTop:parseInt(n.position().top,10)},"fast"),e("#jp-carousel-comment-form-submit-and-info-wrapper").slideDown("fast"),e("#jp-carousel-comment-form-comment-field").focus();else if(a.hasClass("jp-carousel-comment-login")){var c=jetpackCarouselStrings.login_url+"%23jp-carousel-"+l;window.location.href=c}else if(a.parents("#jp-carousel-comment-form-container").length){var d=e("#jp-carousel-comment-form-comment-field").blur(function(){e(window).bind("keydown",k)}).focus(function(){e(window).unbind("keydown",k)}),p=e("#jp-carousel-comment-form-email-field").blur(function(){e(window).bind("keydown",k)}).focus(function(){e(window).unbind("keydown",k)}),m=e("#jp-carousel-comment-form-author-field").blur(function(){e(window).bind("keydown",k)}).focus(function(){e(window).unbind("keydown",k)}),h=e("#jp-carousel-comment-form-url-field").blur(function(){e(window).bind("keydown",k)}).focus(function(){e(window).unbind("keydown",k)});if(d&&d.attr("id")===a.attr("id"))e(window).unbind("keydown",k),e("#jp-carousel-comment-form-submit-and-info-wrapper").slideDown("fast");else if(a.is('input[type="submit"]')){t.preventDefault(),t.stopPropagation(),e("#jp-carousel-comment-form-spinner").show();var f={action:"post_attachment_comment",nonce:jetpackCarouselStrings.nonce,blog_id:r.blog_id,id:l,comment:d.val()};if(!f.comment.length)return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-comment-field",error:jetpackCarouselStrings.no_comment_text});if(1!==Number(jetpackCarouselStrings.is_logged_in)&&(f.email=p.val(),f.author=m.val(),f.url=h.val(),1===Number(jetpackCarouselStrings.require_name_email))){if(!f.email.length||!f.email.match("@"))return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-email-field",error:jetpackCarouselStrings.no_comment_email});if(!f.author.length)return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-author-field",error:jetpackCarouselStrings.no_comment_author})}e.ajax({type:"POST",url:jetpackCarouselStrings.ajaxurl,data:f,dataType:"json",success:function(t){"approved"===t.comment_status?e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-success">'+jetpackCarouselStrings.comment_approved+"</span>").slideDown("fast"):"unapproved"===t.comment_status?e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-success">'+jetpackCarouselStrings.comment_unapproved+"</span>").slideDown("fast"):e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-error">'+jetpackCarouselStrings.comment_post_error+"</span>").slideDown("fast"),i.jp_carousel("clearCommentTextAreaValue"),i.jp_carousel("getComments",{attachment_id:l,offset:0,clear:!0}),e("#jp-carousel-comment-form-button-submit").val(jetpackCarouselStrings.post_comment),e("#jp-carousel-comment-form-spinner").hide()},error:function(){i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-comment-field",error:jetpackCarouselStrings.comment_post_error})}})}}else a.parents(".jp-carousel-info").length||o.jp_carousel("next")}).bind("jp_carousel.afterOpen",function(){e(window).bind("keydown",k),e(window).bind("resize",S),i.opened=!0,S()}).bind("jp_carousel.beforeClose",function(){var t=e(window).scrollTop();e(window).unbind("keydown",k),e(window).unbind("resize",S),e(window).scrollTop(t),e(".jp-carousel-previous-button").hide(),e(".jp-carousel-next-button").hide(),e("html").css("height","")}).bind("jp_carousel.afterClose",function(){window.location.hash&&history.back&&history.back(),y="",i.opened=!1}).on("transitionend.jp-carousel ",".jp-carousel-slide",function(t){if("transform"===t.originalEvent.propertyName){var a=(Date.now()-l)/1e3/t.originalEvent.elapsedTime;o.off("transitionend.jp-carousel"),a>=2&&e(".jp-carousel-transitions").removeClass("jp-carousel-transitions")}}),e(".jp-carousel-wrap").touchwipe({wipeLeft:function(e){e.preventDefault(),i.jp_carousel("next")},wipeRight:function(e){e.preventDefault(),i.jp_carousel("previous")},preventDefaultEvents:!1}),s.add(r).click(function(e){e.preventDefault(),e.stopPropagation(),s.is(this)?i.jp_carousel("next"):i.jp_carousel("previous")})}}(),!i.jp_carousel("testIfOpened")))return x=e("body").css("overflow"),e("body").css("overflow","hidden"),b=e("html").css("overflow"),e("html").css("overflow","hidden"),w=e(window).scrollTop(),o.data("carousel-extra",h),this.each(function(){var t=e(this);d&&e.extend(m,d),-1===m.start_index&&(m.start_index=0),o.trigger("jp_carousel.beforeOpen").fadeIn("fast",function(){o.trigger("jp_carousel.afterOpen"),i.jp_carousel("initSlides",t.find(m.items_selector),m.start_index).jp_carousel("selectSlideAtIndex",m.start_index)}),i.html("")})},selectSlideAtIndex:function(e){var t=this.jp_carousel("slides"),a=t.eq(e);return 0===a.length&&(a=t.eq(0)),i.jp_carousel("selectSlide",a,!1),this},close:function(){return e("body").css("overflow",x),e("html").css("overflow",b),this.jp_carousel("clearCommentTextAreaValue"),o.trigger("jp_carousel.beforeClose").fadeOut("fast",function(){o.trigger("jp_carousel.afterClose"),e(window).scrollTop(w)})},next:function(){this.jp_carousel("previousOrNext","nextSlide")},previous:function(){this.jp_carousel("previousOrNext","prevSlide")},previousOrNext:function(e){if(!this.jp_carousel("hasMultipleImages"))return!1;var t=i.jp_carousel(e);t&&(o.animate({scrollTop:0},"fast"),this.jp_carousel("clearCommentTextAreaValue"),this.jp_carousel("selectSlide",t))},selectedSlide:function(){return this.find(".selected")},setSlidePosition:function(e){return l=Date.now(),this.css({"-webkit-transform":"translate3d("+e+"px,0,0)","-moz-transform":"translate3d("+e+"px,0,0)","-ms-transform":"translate("+e+"px,0)","-o-transform":"translate("+e+"px,0)",transform:"translate3d("+e+"px,0,0)"})},updateSlidePositions:function(e){var t=this.jp_carousel("selectedSlide"),a=i.width(),o=t.width(),s=i.jp_carousel("prevSlide"),r=i.jp_carousel("nextSlide"),n=s.prev(),l=r.next(),c=Math.floor(.5*(a-o));t.jp_carousel("setSlidePosition",c).show(),i.jp_carousel("fitInfo",e),1===(h.is(t.prevAll())?1:-1)?(l.is(s)||l.jp_carousel("setSlidePosition",a+r.width()).show(),n.is(r)||n.jp_carousel("setSlidePosition",-n.width()-o).show()):l.is(s)||l.jp_carousel("setSlidePosition",a+o).show(),s.jp_carousel("setSlidePosition",Math.floor(-s.width()+.75*_)).show(),r.jp_carousel("setSlidePosition",Math.ceil(a-.75*_)).show()},selectSlide:function(t,a){h=this.find(".selected").removeClass("selected");var s,r,n=i.jp_carousel("slides").css({position:"fixed"}),l=e(t).addClass("selected").css({position:"relative"}),d=l.data("attachment-id"),p=i.jp_carousel("prevSlide"),u=i.jp_carousel("nextSlide"),m=p.prev(),f=u.next();i.jp_carousel("loadFullImage",l),c.hide(),0===u.length&&n.length<=2?e(".jp-carousel-next-button").hide():e(".jp-carousel-next-button").show(),0===p.length&&n.length<=2?e(".jp-carousel-previous-button").hide():e(".jp-carousel-previous-button").show(),s=l.add(p).add(m).add(u).add(f).jp_carousel("loadSlide"),n.not(s).hide(),i.jp_carousel("updateSlidePositions",a),o.trigger("jp_carousel.selectSlide",[l]),i.jp_carousel("getTitleDesc",{title:l.data("title"),desc:l.data("desc")});var g=l.data("image-meta");i.jp_carousel("updateExif",g),i.jp_carousel("updateFullSizeLink",l),i.jp_carousel("updateMap",g),1==+jetpackCarouselStrings.display_comments&&(i.jp_carousel("testCommentsOpened",l.data("comments-opened")),i.jp_carousel("getComments",{attachment_id:d,offset:0,clear:!0}),e("#jp-carousel-comment-post-results").slideUp()),l.data("caption")?((r=e("<div />").text(l.data("caption")).html())===e("<div />").text(l.data("title")).html()&&e(".jp-carousel-titleanddesc-title").fadeOut("fast").empty(),r===e("<div />").text(l.data("desc")).html()&&e(".jp-carousel-titleanddesc-desc").fadeOut("fast").empty(),c.html(l.data("caption")).fadeIn("slow")):c.fadeOut("fast").empty(),jetpackCarouselStrings.stats&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?"+jetpackCarouselStrings.stats+"&post="+encodeURIComponent(d)+"&rand="+Math.random()),e(u).add(p).each(function(){i.jp_carousel("loadFullImage",e(this))}),window.location.hash=y="#jp-carousel-"+d},slides:function(){return this.find(".jp-carousel-slide")},slideDimensions:function(){return{width:e(window).width()-2*_,height:Math.floor(e(window).height()/100*85-60)}},loadSlide:function(){return this.each(function(){var t=e(this);t.find("img").one("load",function(){t.jp_carousel("fitSlide",!1)})})},bestFit:function(){var e,t,a=i.jp_carousel("slideDimensions"),o=this.jp_carousel("originalDimensions"),s=o.width/o.height,r=1,n=1;return o.width>a.width&&(r=a.width/o.width),o.height>a.height&&(n=a.height/o.height),r<n?(e=a.width,t=Math.floor(e/s)):n<r?(t=a.height,e=Math.floor(t*s)):(e=o.width,t=o.height),{width:e,height:t}},fitInfo:function(){var e=this.jp_carousel("selectedSlide").jp_carousel("bestFit");return p.css({left:Math.floor(.5*(n.width()-e.width)),width:Math.floor(e.width)}),this},fitMeta:function(t){var a={top:Math.floor(e(window).height()/100*85+5)+"px"},i={width:n.width()-(f.width()+80)+"px"};t?(n.animate(a),v.animate(i)):(n.animate(a),v.css(i))},fitSlide:function(){return this.each(function(){var t=e(this),a=t.jp_carousel("bestFit"),o=i.jp_carousel("slideDimensions");a.left=0,a.top=Math.floor(.5*(o.height-a.height))+40,t.css(a)})},texturize:function(t){return t=(t=(t=(t=""+t).replace(/'/g,"&#8217;").replace(/&#039;/g,"&#8217;").replace(/[\u2019]/g,"&#8217;")).replace(/"/g,"&#8221;").replace(/&#034;/g,"&#8221;").replace(/&quot;/g,"&#8221;").replace(/[\u201D]/g,"&#8221;")).replace(/([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g,'$1="$2"'),e.trim(t)},initSlides:function(t,a){t.length<2?e(".jp-carousel-next-button, .jp-carousel-previous-button").hide():e(".jp-carousel-next-button, .jp-carousel-previous-button").show(),t.each(function(){var t,a=e(this),o=a.data("orig-size")||"",s=i.jp_carousel("slideDimensions"),r=o.split(","),n=a.data("medium-file")||"",l=a.data("large-file")||"";o={width:parseInt(r[0],10),height:parseInt(r[1],10)},t=a.data("orig-file"),t=i.jp_carousel("selectBestImageSize",{orig_file:t,orig_width:o.width,orig_height:o.height,max_width:s.width,max_height:s.height,medium_file:n,large_file:l}),e(this).data("gallery-src",t)}),0!==a&&(e("<img/>")[0].src=e(t[a]).data("gallery-src"));var o=t.first().closest(".tiled-gallery.type-rectangular").length>0;return t.each(function(t){var s=e(this),r=s.data("attachment-id")||0,n=s.data("comments-opened")||0,l=s.data("image-meta")||{},c=s.data("orig-size")||"",d={width:s[0].naturalWidth,height:s[0].naturalHeight},p=s.data("image-title")||"",u=s.data("image-description")||"",m=s.parents(".gallery-item").find(".gallery-caption").html()||"",h=s.data("gallery-src")||"",f=s.data("medium-file")||"",g=s.data("large-file")||"",j=s.data("orig-file")||"",v=s.parents("div.tiled-gallery-item").find("div.tiled-gallery-caption").html();if(v&&(m=v),r&&c.length){p=i.jp_carousel("texturize",p),u=i.jp_carousel("texturize",u),m=i.jp_carousel("texturize",m);var w=e("<img/>").attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7").css("width","100%").css("height","100%"),_=e('<div class="jp-carousel-slide" itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject"></div>').hide().css({left:t<a?-1e3:i.width()}).append(w).appendTo(i).data("src",h).data("title",p).data("desc",u).data("caption",m).data("attachment-id",r).data("permalink",s.parents("a").attr("href")).data("orig-size",c).data("comments-opened",n).data("image-meta",l).data("medium-file",f).data("large-file",g).data("orig-file",j).data("thumb-size",d);o&&_.data("preview-image",s.attr("src")).css({"background-image":'url("'+s.attr("src")+'")',"background-size":"100% 100%","background-position":"center center"}),_.jp_carousel("fitSlide",!1)}}),this},selectBestImageSize:function(e){if("object"!=typeof e&&(e={}),void 0===e.orig_file)return"";if(void 0===e.orig_width||void 0===e.max_width)return e.orig_file;if(void 0===e.medium_file||void 0===e.large_file)return e.orig_file;var t=document.createElement("a");t.href=e.large_file;var a=/^i[0-2].wp.com$/i.test(t.hostname),o=i.jp_carousel("getImageSizeParts",e.medium_file,e.orig_width,a),s=i.jp_carousel("getImageSizeParts",e.large_file,e.orig_width,a),r=parseInt(s[0],10),n=parseInt(s[1],10),l=parseInt(o[0],10),c=parseInt(o[1],10);if(e.orig_max_width=e.max_width,e.orig_max_height=e.max_height,void 0!==window.devicePixelRatio&&window.devicePixelRatio>1&&(e.max_width=e.max_width*window.devicePixelRatio,e.max_height=e.max_height*window.devicePixelRatio),r>=e.max_width||n>=e.max_height)return e.large_file;if(l>=e.max_width||c>=e.max_height)return e.medium_file;if(a){var d=e.large_file.lastIndexOf("?"),p=e.large_file;return-1!==d&&(p=e.large_file.substring(0,d),(e.orig_width>e.max_width||e.orig_height>e.max_height)&&(p+="?fit="+e.orig_max_width+"%2C"+e.orig_max_height)),p}return e.orig_file},getImageSizeParts:function(e,t,a){var i=a?e.replace(/.*=([\d]+%2C[\d]+).*$/,"$1"):e.replace(/.*-([\d]+x[\d]+)\..+$/,"$1"),o=i!==e?a?i.split("%2C"):i.split("x"):[t,0];return"9999"===o[0]&&(o[0]="0"),"9999"===o[1]&&(o[1]="0"),o},originalDimensions:function(){var t=e(this).data("orig-size").split(",");return{width:parseInt(t[0],10),height:parseInt(t[1],10)}},format:function(e){if("object"!=typeof e&&(e={}),e.text&&void 0!==e.text)return e.replacements&&void 0!==e.replacements?e.text.replace(/{(\d+)}/g,function(t,a){return void 0!==e.replacements[a]?e.replacements[a]:t}):e.text},shutterSpeed:function(e){return e>=1?Math.round(10*e)/10+"s":"1/"+Math.round(1/e)+"s"},parseTitleDesc:function(e){return!e.match(" ")&&e.match("_")?"":e},getTitleDesc:function(t){var a,o,s="",r="";(o=e("div.jp-carousel-titleanddesc","div.jp-carousel-wrap")).hide(),s=i.jp_carousel("parseTitleDesc",t.title)||"",a=i.jp_carousel("parseTitleDesc",t.desc)||"",(s.length||a.length)&&(e("<div />").html(s).text()===e("<div />").html(a).text()&&(s=""),r=s.length?'<div class="jp-carousel-titleanddesc-title">'+s+"</div>":"",r+=a.length?'<div class="jp-carousel-titleanddesc-desc">'+a+"</div>":"",o.html(r).fadeIn("slow")),e("div#jp-carousel-comment-form-container").css("margin-top","20px"),e("div#jp-carousel-comments-loading").css("margin-top","20px")},updateExif:function(t){if(!t||1!==Number(jetpackCarouselStrings.display_exif))return!1;var a=e("<ul class='jp-carousel-image-exif'></ul>");e.each(t,function(t,o){if(0!==parseFloat(o)&&o.length&&-1!==e.inArray(t,e.makeArray(jetpackCarouselStrings.meta_data))){switch(t){case"focal_length":o+="mm";break;case"shutter_speed":o=i.jp_carousel("shutterSpeed",o);break;case"aperture":o="f/"+o}a.append("<li><h5>"+jetpackCarouselStrings[t]+"</h5>"+o+"</li>")}}),e("div.jp-carousel-image-meta ul.jp-carousel-image-exif").replaceWith(a)},updateFullSizeLink:function(t){if(!t||!t.data)return!1;var a,o=t.data("orig-size").split(","),s=document.createElement("a");s.href=t.data("src").replace(/\?.+$/,""),a=null!==s.hostname.match(/^i[\d]{1}.wp.com$/i)?s.href:t.data("orig-file").replace(/\?.+$/,"");var r=e("<a>"+i.jp_carousel("format",{text:jetpackCarouselStrings.download_original,replacements:o})+"</a>").addClass("jp-carousel-image-download").attr("href",a).attr("target","_blank");e("div.jp-carousel-image-meta a.jp-carousel-image-download").replaceWith(r)},updateMap:function(t){if(t.latitude&&t.longitude&&1===Number(jetpackCarouselStrings.display_geo)){var a=t.latitude,i=t.longitude,o=e("div.jp-carousel-image-meta","div.jp-carousel-wrap"),s="&scale=2&style=feature:all|element:all|invert_lightness:true|hue:0x0077FF|saturation:-50|lightness:-5|gamma:0.91";e("<div></div>").addClass("jp-carousel-image-map").html('<img width="154" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter='+a+","+i+"&\t\t\t\t\t\t\tzoom=8&\t\t\t\t\t\t\tsize=154x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:medium%7Ccolor:blue%7C"+a+","+i+s+'" class="gmap-main" />\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="gmap-topright"><div class="imgclip"><img width="175" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter='+a+","+i+"&\t\t\t\t\t\t\tzoom=3&\t\t\t\t\t\t\tsize=175x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:small%7Ccolor:blue%7C"+a+","+i+s+'"c /></div></div>\t\t\t\t\t\t\t\t\t\t\t\t\t').prependTo(o)}},testCommentsOpened:function(t){1===parseInt(t,10)?(e(".jp-carousel-buttons").fadeIn("fast"),j.fadeIn("fast")):(e(".jp-carousel-buttons").fadeOut("fast"),j.fadeOut("fast"))},getComments:function(t){if(clearInterval(m),"object"==typeof t&&void 0!==t.attachment_id&&t.attachment_id){(!t.offset||void 0===t.offset||t.offset<1)&&(t.offset=0);var a=e(".jp-carousel-comments"),o=e("#jp-carousel-comments-loading").show();t.clear&&a.hide().empty(),e.ajax({type:"GET",url:jetpackCarouselStrings.ajaxurl,dataType:"json",data:{action:"get_attachment_comments",nonce:jetpackCarouselStrings.nonce,id:t.attachment_id,offset:t.offset},success:function(s){t.clear&&a.fadeOut("fast").empty(),e(s).each(function(){var o=e("<div></div>").addClass("jp-carousel-comment").attr("id","jp-carousel-comment-"+this.id).html('<div class="comment-gravatar">'+this.gravatar_markup+'</div><div class="comment-author">'+this.author_markup+'</div><div class="comment-date">'+this.date_gmt+'</div><div class="comment-content">'+this.content+"</div>");a.append(o),clearInterval(m),m=setInterval(function(){e(".jp-carousel-overlay").height()-150<e(".jp-carousel-wrap").scrollTop()+e(window).height()&&(i.jp_carousel("getComments",{attachment_id:t.attachment_id,offset:t.offset+10,clear:!1}),clearInterval(m))},300)});var r=e(".jp-carousel div.selected");if(r&&r.data&&r.data("attachment-id")!=t.attachment_id)return a.fadeOut("fast"),void a.empty();e(".jp-carousel-overlay").height(e(window).height()+g.height()+j.height()+(a.height()>0?a.height():f.height())+200),a.show(),o.hide()},error:function(e,t,i){console.log("Comment get fail...",e,t,i),a.fadeIn("fast"),o.fadeOut("fast")}})}},postCommentError:function(t){"object"!=typeof t&&(t={}),t.field&&void 0!==t.field&&t.error&&void 0!==t.error&&(e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-error">'+t.error+"</span>").slideDown("fast"),e("#jp-carousel-comment-form-spinner").hide())},setCommentIframeSrc:function(t){var a=e("#jp-carousel-comment-iframe");a&&a.length&&(a.attr("src",a.attr("src").replace(/(postid=)\d+/,"$1"+t)),a.attr("src",a.attr("src").replace(/(%23.+)?$/,"%23jp-carousel-"+t)))},clearCommentTextAreaValue:function(){var t=e("#jp-carousel-comment-form-comment-field");t&&t.val("")},nextSlide:function(){var e=this.jp_carousel("slides"),t=this.jp_carousel("selectedSlide");return 0===t.length||e.length>2&&t.is(e.last())?e.first():t.next()},prevSlide:function(){var e=this.jp_carousel("slides"),t=this.jp_carousel("selectedSlide");return 0===t.length||e.length>2&&t.is(e.first())?e.last():t.prev()},loadFullImage:function(t){var a=t.find("img:first");a.data("loaded")||(a.on("load.jetpack",function(){a.off("load.jetpack"),e(this).closest(".jp-carousel-slide").css("background-image","")}),!t.data("preview-image")||t.data("thumb-size")&&t.width()>t.data("thumb-size").width?a.attr("src",a.closest(".jp-carousel-slide").data("src")).attr("itemprop","image"):a.attr("src",t.data("preview-image")).attr("itemprop","image"),a.data("loaded",1))},hasMultipleImages:function(){return i.jp_carousel("slides").length>1}};e.fn.jp_carousel=function(t){return I[t]?I[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.jp_carousel"):I.open.apply(this,arguments)},e(document.body).on("click.jp-carousel","div.gallery, div.tiled-gallery, ul.wp-block-gallery, ul.blocks-gallery-grid, div.wp-block-jetpack-tiled-gallery, a.single-image-gallery",function(t){e(this).jp_carousel("testForData",t.currentTarget)&&(e(t.target).parent().hasClass("gallery-caption")||e(t.target).parent().is("figcaption")||(e("html").css("height","auto"),t.preventDefault(),t.stopPropagation(),e(this).jp_carousel("open",{start_index:e(this).find(".gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item").index(e(t.target).parents(".gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item"))})))}),1===Number(jetpackCarouselStrings.single_image_gallery)&&(C(),e(document.body).on("post-load",function(){C()})),e(window).on("hashchange.jp-carousel",function(){var t,a,s,r=/jp-carousel-(\d+)/;window.location.hash&&r.test(window.location.hash)?window.location.hash===y&&i.opened||(window.location.hash&&i&&!i.opened&&history.back?history.back():(y=window.location.hash,t=window.location.hash.match(r),a=parseInt(t[1],10),e("div.gallery, div.tiled-gallery, a.single-image-gallery, ul.wp-block-gallery, div.wp-block-jetpack-tiled-gallery").each(function(t,i){if(e(i).find("img").each(function(t,o){if(e(o).data("attachment-id")===parseInt(a,10))return s={index:t,gallery:i},!1}),s)return e(s.gallery).jp_carousel("openOrSelectSlide",s.index),!1}))):i&&i.opened&&o.jp_carousel("close")}),window.location.hash&&e(window).trigger("hashchange")}),function(e){e.fn.touchwipe=function(t){var a={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};return t&&e.extend(a,t),this.each(function(){var e,t,i=!1;function o(){this.removeEventListener("touchmove",s),e=null,i=!1}function s(s){if(a.preventDefaultEvents&&s.preventDefault(),i){var r=s.touches[0].pageX,n=s.touches[0].pageY,l=e-r,c=t-n;Math.abs(l)>=a.min_move_x?(o(),l>0?a.wipeLeft(s):a.wipeRight(s)):Math.abs(c)>=a.min_move_y&&(o(),c>0?a.wipeDown(s):a.wipeUp(s))}}"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",function(a){1===a.touches.length&&(e=a.touches[0].pageX,t=a.touches[0].pageY,i=!0,this.addEventListener("touchmove",s,!1))},!1)}),this}}(jQuery);;
var ak_js = document.getElementById( "ak_js" );

if ( ! ak_js ) {
	ak_js = document.createElement( 'input' );
	ak_js.setAttribute( 'id', 'ak_js' );
	ak_js.setAttribute( 'name', 'ak_js' );
	ak_js.setAttribute( 'type', 'hidden' );
}
else {
	ak_js.parentNode.removeChild( ak_js );
}

ak_js.setAttribute( 'value', ( new Date() ).getTime() );

var commentForm = document.getElementById( 'commentform' );

if ( commentForm ) {
	commentForm.appendChild( ak_js );
}
else {
	var replyRowContainer = document.getElementById( 'replyrow' );

	if ( replyRowContainer ) {
		var children = replyRowContainer.getElementsByTagName( 'td' );

		if ( children.length > 0 ) {
			children[0].appendChild( ak_js );
		}
	}
};
