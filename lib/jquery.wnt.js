/*
 * window name transport, see http://www.sitepen.com/blog/2008/07/22/windowname-transport/
 */
 

(function($) {
	
	function handle_request(url, request, callback) {
		var iframe = document.createElement('iframe')
		iframe.name = encodeURI(JSON.stringify(request));
		iframe.back = false;
		//iframe.style = 'width:10px; height:10px;';
		iframe.onload = function() {
			if(iframe.back) {
				if (callback) callback(decodeURIComponent(iframe.contentWindow.name));
			}
			else {
				iframe.back = true;
				iframe.contentWindow.location = 'about:blank';
			}
		}
		document.getElementsByTagName('body')[0].appendChild(iframe);
		iframe.src = url;
		
		
		return;
		var $iframe = $('<iframe name="'+ strdata +'" src="' + url  +'"></iframe>')
			.appendTo('body');		
			$iframe.data('back', false)
			.bind('load', function() {
				if ($iframe.data('back')) {
					var response = decodeURIComponent($iframe[0].contentWindow.name);
					if (callback) {
						callback(response);
					}				
				}
				else  {
					alert('voo');
					$iframe.data('back', true);
					$iframe[0].contentWindow.location = 'about:blank';
				}
			});
	}
	
	$.extend({
		wnt: {
			'get': function (url, data, callback) {
				handle_request('GET', url, data || {}, callback);
			},
			'post': function (url, data, callback) {
				handle_request('POST', url, data || {}, callback);
			}
		}
	});
})(jQuery);