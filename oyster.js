(function() {
	var acc = '';
	function termHandler() {
		// called on <CR> or <ENTER>
		this.newLine();
		var cmd=this.lineBuffer;
		if (!cmd) {
			this.prompt();
			return;	
		}
		
		try {					
			var last=eval(cmd);	
			if (typeof last != undefined) { 
				this.write(last);
			}
		} catch(e) {
			this.write(e);
		}
		this.prompt();		
		return;
	}
	
	$('body').append('<div class="oyster-term" id="termDiv1" style="position:absolute; top:20px; left:100px;"></div>');
		var t = new Terminal({
		x: 220,
		y: 330,
		rows: 12,
		id: 0,
		termDiv: 'termDiv1',
		crsrBlinkMode: true,
		handler: termHandler
	});
	t.open();
})();