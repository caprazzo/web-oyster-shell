(function() {
	function js(url, fn) {
		var s=document.createElement('script');
		document.getElementsByTagName('head')[0].appendChild(s);
		if (fn) s.onload=fn;
		s.src=url;
	}
	function css(url) {
		var l=document.createElement('link');
		l.rel='stylesheet';
		l.type='text/css';
		l.href=url;
		document.getElementsByTagName('head')[0].appendChild(l);
	}
	js('http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js');
	js('http://documentcloud.github.com/underscore/underscore-min.js');
	js('http://localhost:4321/lib/json2.js');
	js('http://localhost:4321/lib/jquery.couch.js');
	css('http://localhost:4321/oyster.css');
	js('http://localhost:4321/lib/termlib.js', function() {	
		js('http://localhost:4321/oyster.js');
	});
})();