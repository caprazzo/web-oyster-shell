function wnd(url, request, callback) {
	var iframe = document.createElement('iframe');
	if (request.data) request.data = JSON.stringify(request.data);
	iframe.name = encodeURI(JSON.stringify(request));	
	iframe.onload = function() {
		this.onload = function() {
			callback(JSON.parse(decodeURIComponent(iframe.contentWindow.name)));
			iframe.parentNode.removeChild(iframe);
		}
		this.contentWindow.location = 'about:blank';
	}
	iframe.src = url;
	iframe.style.display='none';
	document.getElementsByTagName('body')[0].appendChild(iframe);	
}

function oyster() {
	wnd('http://couch.caprazzi.net/fuss/_design/wnt/x.html',
	{
		url: '/fuss/1234578',
		type: 'PUT',
		data: {undue:12}
	},
	function(data) {
		alert('decc: ' + data);
	});
}
/*
function oyster() {
	var acc = '';
	
	function termHandler() {
		var self=this;
		function print(m) {
			self.write(m+'\n');
		}
		// called on <CR> or <ENTER>
		this.newLine();
		var cmd=this.lineBuffer;
		if (!cmd) {
			this.prompt();
			return;	
		}
		if (cmd.indexOf('#') == 0) {
			var last=subcommandHandler(cmd, this);
			this.write(last);
			this.prompt();
			return;
		}
		
		try {					
			var last=eval(cmd);	
			if (typeof last != 'undefined') { 
				this.write('[' + typeof last +'] ');
				this.write(last);				
			}
		} catch(e) {
			this.write(e);
		}
		this.prompt();		
		return;
	}
	
	function subcommandHandler(cmd, term) {
		if (cmd == '#help') {
			return "#exit to exit";
		}
		else if (cmd == '#exit') {
			term.close();
		}
	}
	
	var id='term-' + new Date().getTime();
	var divId = 'div-'+id;
	$('body').append('<div class="oyster-term" style="position:fixed; top:100px; left:100px" id="'+divId+'"><a href="#" id="start-term">start</a></div>');
	*/
	
//	window.ping = function(value) {
//		$i = $('<iframe id="iFrame" name="'+value+'" src="http://localhost:1234/p.html"></iframe>').appendTo('body');
//		$i.get(0).onload=function() { alert($i.get(0).name + ' '  + window.name); }
		//$i.width($i.width()+1);
		
//		console.log($i.get(0).name);
//		setTimeout(function() {			
//			$i.get(0).src='http://localhost:4321/';
//		}, 4000);
//	}
	
	//$('body').append('<input type="text" onchange="ping(this.value)"/>');
	//var  i = document.getElementById('iFrame');

	//$i.get(0).onload = function() {
//		setTimeout(function() {
//			i.name = 'barcazzi';			
//			
//		}, 500);
//	};

//	console.dir(i);
	
	
	//document.getElementById('iFrame').contentWindow.y = function(msg) {
	//	alert('x: ' + msg);
	//}
	
//	$('#start-term').click(function() {
		//var request = new XMLHttpRequest(); request.open("GET", "http://www.google.com", true);
		//request.onreadystatechange = function() {
		//	var done = 4, ok = 200;
		//	alert(request.readyState);
			//if (request.readyState == done && request.status == ok) { 
			//	if (request.responseText) { alert(request.responseText); }
			//}
		//};
		
		//request.send(null);
		/*
		var t = new Terminal({
			x: 220,
			y: 330,
			rows: 12,
			id: id,
			greeting: 'use #help for help',
			termDiv: divId,
			crsrBlinkMode: true,
			handler: termHandler
		});
		t.open();
		*/
//		$.ajax({url: 'http://localhost:1234/index.html',
//			type:'get',
	//success: function(d, f ,g){
//		alert(d);
//	},
//	complete: function(c) {
//		alert(c);
//	},
//	error: function(e, f, g) {
//		alert([e,f,g]);
//	}
//	});

//});
//}
