var Couch = function(srv, db) {
	this.srv = srv;
	this.db = db;
	
	this.get = function(id) {
		var url = this.srv + '/' + this.db + '/' + id;
		var rt = null;
		$.ajax({
			url: url,
			
			type: 'get',
			dataType:'json',
			success: function(data) {
				alert(url + ' ' + 'xxxx'+data);
				rt=data;
			},
			error: function(f,g,h) {
				alert([f, g, h]);
			},
			complete:function() {
				alert('complete');
			}
		});
		
		return rt;
	}
}
function test() {
	var c = new Couch('http://couch.caprazzi.net','fuss');
	c.get('9');
}