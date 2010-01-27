// javascript:(function()%20{function%20script(url,%20fn)%20{var%20s=document.createElement(%27script%27);document.getElementsByTagName(%27head%27)[0].appendChild(s);if(fn)%20s.onload=fn;s.src=url;}var%20mode_js%20=%20false;var%20scope={last:null};function%20termHandler()%20{this.newLine();var%20cmd=this.lineBuffer;if%20(cmd!=%27%27)%20{if%20(mode_js)%20{try%20{with(scope)%20{last=eval(cmd);}this.write(scope.last);}%20catch(e)%20{this.write(e);}this.prompt();return;}if%20(cmd==%27switch%27)%20{var%20other=(this.id==1)?%202:1;termOpen(other);}else%20if%20(cmd==%27clear%27)%20{this.clear();}else%20if%20(cmd==%27exit%27)%20{this.close();}else%20if%20(cmd==%27help%27)%20{this.write(helpPage);}else%20if%20(cmd==%27id%27)%20{this.write(%27terminal%20id:%20%27+this.id);}else%20if%20(cmd==%27curl%27)%20{this.write(%27curl%27);}else%20if%20(cmd==%27js%27)%20{mode_js%20=%20!mode_js;this.write(%27js%20mode:%20%27%20+%20mode_js);}else%20{this.type(%27You%20typed:%20%27+cmd);this.newLine();}}this.prompt();}function%20termExitHandler()%20{var%20other=(this.id==1)?%202:1;if%20((term[other])%20&&%20(term[other].closed==false))%20term[other].focus();}var%20u%20=%20[%27http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js%27,%27http://documentcloud.github.com/underscore/underscore-min.js%27,%27http://www.masswerk.at/termlib/termlib.js%27];script(u[0],%20function()%20{script(u[1]);script(u[2],%20function()%20{$(%27body%27).append(%27<div%20id=%22termDiv1%22%20style=%22position:absolute;%20top:20px;%20left:100px;%22></div>%27);var%20t%20=%20new%20Terminal({x:%20220,y:%20330,rows:%2012,id:%200,termDiv:%20%27termDiv1%27,crsrBlinkMode:%20true,handler:%20termHandler,exitHandler:%20termExitHandler});t.open();});});})()
(function() {
	function script(url, fn) {
		var s=document.createElement('script');
		document.getElementsByTagName('head')[0].appendChild(s);
		if(fn) s.onload=fn;
		s.src=url;
	}
	
	var mode_js = false;
	var scope={last:null};
	var acc='';
	function termHandler() {
		// called on <CR> or <ENTER>
		this.newLine();
		var cmd=this.lineBuffer;
		if (cmd!='') {
			if (mode_js) {
				if (cmd.slice(-1)=='\\') {
					acc+=cmd;
					return;
				}
				try {
					with(scope) {
						last=eval(acc+cmd);
					}
					this.write(scope.last);
				} catch(e) {
					this.write(e);
				}
				this.prompt();
				return;
			}
			if (cmd=='switch') {
				var other=(this.id==1)? 2:1;
				termOpen(other);
			}
			else if (cmd=='clear') {
				this.clear();
			}
			else if (cmd=='exit') {
				this.close();
			}
			else if (cmd=='help') {
				this.write(helpPage);
			}
			else if (cmd=='id') {
				this.write('terminal id: '+this.id);
			}
			else if (cmd=='curl') {
				this.write('curl');
			}
			else if (cmd=='js') {
				mode_js = !mode_js;
				this.write('js mode: ' + mode_js);
			}
			else {
				this.type('You typed: '+cmd);
				this.newLine();
			}
		}
		this.prompt();
	}
	function termExitHandler() {
		// optional handler called on exit
		// activate other terminal if open
		var other=(this.id==1)? 2:1;
		if ((term[other]) && (term[other].closed==false)) term[other].focus();
	}	
	var u = [
		'http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js',
		'http://documentcloud.github.com/underscore/underscore-min.js',
		// 'json2.js'
		// couch.js
		'http://www.masswerk.at/termlib/termlib.js'
	];
	script(u[0], function() {
		script(u[1]);
		script(u[2], function() {
			$('body').append('<div id="termDiv1" style="position:absolute; top:20px; left:100px;"></div>');
			var t = new Terminal({
				x: 220,
				y: 330,
				rows: 12,
				id: 0,
				termDiv: 'termDiv1',
				crsrBlinkMode: true,
				handler: termHandler,
				exitHandler: termExitHandler
			});
			t.open();
		});
	});
})()