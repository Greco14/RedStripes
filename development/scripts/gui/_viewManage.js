ViewManage = function(){
	this.settings={
		btn_go_page: $('.go_to_page'),

	};
};

ViewManage.prototype.init = function(){
	var self = this;
	self.bind();
};
ViewManage.prototype.bind = function(){
	var self = this,
		s = self.settings;
	s.btn_go_page.on('click', function(){
		var toWhere = $(this).attr('data-go-to-page');
		self.going(toWhere);
	});

};
ViewManage.prototype.going = function(toWhere){
	var self = this,
		s = self.settings;
		console.log(toWhere);

};