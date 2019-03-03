
/* Head.js Configuration */

var head_conf = { screens: [480, 768, 960] };

(function($) {
	var w, html = $('html'), _window = $(window);
	_window.resize(onResize);
	function onResize() {
		w = _window.width();
		if ( w < 480 || (w >= 480 && w < 768 ) ) html.addClass('mobile-480').removeClass('mobile-768').removeClass('desktop');
		else if ( w >= 768 && w < 960 ) html.addClass('mobile-768').removeClass('mobile-480').removeClass('desktop');
		else html.addClass('desktop').removeClass('mobile-480').removeClass('mobile-768');
	}
	onResize();
})(jQuery);