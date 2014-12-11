OpenShows = function(){
	this.settings = {
		btn_login_chage_option: $('.btn_login_chage_option'),
		inputlog: $('.inputlog'),
		newsletter_input: $('#newsletter-input'),
		btn_newsLeter: $('#newsletter'),
		info_priza: $('#info_prize'),
		btn_confi_prizes : $('.sendConfi_prize'),
		btn_prize: $('.prize-grid-item'),
		close_elPopUP: $('.close_elPopUP'),
		bnt_sumit: $('.btsumit'),

	};
};
OpenShows.prototype.init= function(){
	var self = this;
	self.bind();
};
OpenShows.prototype.bind= function(){
	var self = this,
		s = self.settings;

		s.btn_login_chage_option.on('click', function(){
			var laId = $(this).attr('id');
			s.inputlog.removeClass('activeInput');
			$('#'+laId+'-input').addClass('activeInput');
		});
		s.btn_newsLeter.on('click', function(){
			var elId = $(this).attr('id');
			var yesNo = s.newsletter_input.val();
			if(yesNo == 'yes'){
				$('#'+elId).css({'background-color':'rgba(255, 0, 10, 0.1)'});
				s.newsletter_input.val('no');
				console.log('this is no')
			}else{
				$('#'+elId).css({'background-color':'#ed1c24'});
				s.newsletter_input.val('yes');
				console.log('this is yes')
			}
		});
		$('#drop_logs').mouseenter(function(){
			$('#drop_logs-down').stop().animate({height: 70},250,'easeInOutQuad');
		});
		$('#drop_logs-down').mouseleave(function(){
			$('#drop_logs-down').stop().animate({height: 0},250,'easeInOutQuad');
		});
		// $('#prizesShow').on('click', function(){
		// 	$('#prizes_gate').css({display:'block'});
		// });
	s.btn_confi_prizes.on('click', function(){
		var elId = $(this).attr('id');
		s.info_priza.css({display:'none'});
		$('#'+elId+'_gate').css({display:'block'});
	});
	s.btn_prize.on('click', function(){
		$('#pop_up_go').css('display','block');
	});
	s.close_elPopUP.on('click', function(){
		$('#pop_up_go').css('display','none');
		$('#sms_info_gate').css('display','none');
		$('#email_info_gate').css('display','none');
		$('#cheers_salute').css('display', 'none');
		$('#info_full_prize').css({display: 'block'});
		s.info_priza.css({display:'block'});
	});
	s.bnt_sumit.on('click', function(){
		$('#cheers_salute').css('display', 'block');
		$('#info_full_prize').css({display: 'none'});
	});
};
OpenShows.prototype.actions= function(wich, all){
	var self = this,
		s = self.settings;
		$('.'+all).css({display: 'none'});
};