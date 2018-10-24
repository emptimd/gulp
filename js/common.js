/*---CSRF TOKEN---*/
// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

/**
 * Get background color of elemet.
 */

// $.fn.getHexBackgroundColor = function () {
// 	let rgb = $(this).css('background-color');
// 	if (!rgb) {
// 			return '#FFFFFF'; //default color
// 	}
// 	let hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

// 	function hex(x) {
// 			return ("0" + parseInt(x).toString(16)).slice(-2);
// 	}

// 	if (hex_rgb) {
// 			return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
// 	} else {
// 			return rgb; //ie8 returns background-color in hex format then it will make                 compatible, you can improve it checking if format is in hexadecimal
// 	}
// }

/**
 * Exemple of usage for bgc changing.
 */
// $.each($("#rebus > .container .guess i"), function (i, el) {
// 	let $this = $(this);
// 	setTimeout(function () {
// 		let oldBGColor = $this.parent().getHexBackgroundColor();
// 		let newBGColor = oldBGColor.replace(/[^,]+(?=\))/, '1');
// 		$this.parent().css({backgroundColor: newBGColor});
// 	}, 500 + ( i * 250 ));
// 	setTimeout(function () {
// 		$this.animate({opacity: 1}, 200);
// 	}, 500 + ( i * 240 ));
// });

/**
 * Fade button + scroll to top on click.
 */
// function window_scrool() {
//  $(window).scroll(function () {
//      if ($(this).scrollTop() > 70) {
//          $('#bttop').fadeIn();
//      } else {
//          $('#bttop').fadeOut();
//      }
//  });
//  $('#bttop').click(function () {
//      $('body,html').animate({scrollTop: 0}, 800);
//  });
// }

/**
 * Google map
 * @param {number} lat
 * @param {number} lang
 * @param {number} zoom
 */
// function googlemap(lat=10,lang=10,zoom=2) {
// 	let mapCanvas = document.getElementById('map');
// 	let latlng = new google.maps.LatLng(lat, lang);
// 	let settings = {
// 	zoom: zoom,
// 	center: latlng,
// 	mapTypeControl: true,
// 	mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
// 	navigationControl: true,
// 	navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
// 	mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	let map = new google.maps.Map(mapCanvas, settings);
// }


/*export default*/ /*function submit(action, values, method='POST') {
    var form = $('<form/>', {
        action: action,
        method: method
    });

    // add csrf token
    form.append($('<input/>', {
        type: 'hidden',
        name: '_token',
        value: $('meta[name="csrf-token"]').attr('content')
    }));

    $.each(values, function() {
        form.append($('<input/>', {
            type: 'hidden',
            name: this.name,
            value: this.value
        }));
    });
    form.appendTo('body').submit();
}*/

// var clipboard = new Clipboard('#copy');
// clipboard.on('success', function(e) {
//     $copy.attr('title', 'Copied!');

//     $copy.tooltip('show');
//     $copy.attr('title', '');
// });
function adsd1(){}
$(function() {
	let timer;

	$('.item').on('click',function(){
		$this = $(this);
		$this.toggleClass('removed');
	});

	$('body').on('keyup',function(e){
		$this = $(this);
		clearTimeout(timer);
		timer = setTimeout(function() {
			console.log(e.key);
		}, 500);
	});
});