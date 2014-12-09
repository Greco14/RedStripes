Dropdowns = function(){
	this.settings ={
		btn_drop: $('.boxIp'),
		dp_days: $('#holD'),
		dp_years: $('#holdY'),
		dp_months: $('#holM'),
		boxIp: $('.mainselector'),
		day_input: $('.day_check'),
		month_input: $('.month_check'),
		year_input: $('.year_check'),
		btn_submit: $('.btsumit'),
		gate: $('.hold_ageGate'),
		confirm: $('.holdConfirmation'),
		sorry: $('.sorry_hold'),
		btn_back: $('.btn_back'),


	};
	this.tlOpen = new TimelineLite();
	this.tlClose = new TimelineLite();
};
Dropdowns.prototype.init = function(){
	var self = this;
	self.bind();
};

Dropdowns.prototype.bind = function(){
	var self = this,
		s = self.settings;

	s.boxIp.on('click', function(){
		var elId = $(this).attr('id');
		var howM = $(this).attr('data-howInside');
		var alto= howM*30;
		
		self.animation('close');
		setTimeout(function(){
			self.animation('open', elId , alto)
		},270);
		
	});
	self.create();

	s.dp_days.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		var este = s.dp_days.find('.mainselector');
		este.html('<p>'+wich+'</p>');
		self.animation('close');
		s.day_input.val(wich);
	});
	s.dp_months.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		var wich2 = $(this).attr('data-nummth')
		
		var este3 = s.dp_months.find('.mainselector');
		este3.html('<p>'+wich+'</p>');
		self.animation('close');
		s.month_input.val(wich2);
	});
	s.dp_years.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		
		var este2 = s.dp_years.find('.mainselector');
		este2.html('<p>'+wich+'</p>');
		self.animation('close');
		s.year_input.val(wich);

	});

	s.btn_submit.on('click',function(){
		var hoy = new Date().getFullYear();
		var edad= hoy-18;
		var chose= $('#year_gate').val();
		console.log(edad+' '+chose);
		if(chose <= edad){
			console.log('its old');
			s.gate.css('display', 'none');
			s.confirm.css('display', 'block');
		}else{
			console.log('its not old');
			s.gate.css('display', 'none');
			s.sorry.css('display', 'block');
		}
	});
	s.btn_back.on('click',function(){
		s.gate.css('display', 'block');
		s.sorry.css('display', 'none');
		s.confirm.css('display', 'none');
	})




};

Dropdowns.prototype.animation = function(animation, elId, alto){
	var self = this,
		s = self.settings;
		switch (animation){
			case 'open':
				self.tlOpen.to($('#'+elId+'-in'),0.75,{
					height: alto,
					ease: Cubic.easeOut,
					onComplete: function(){
						$('#'+elId+'-in').css('overflow-y','scroll');
					}
				});

				break;
			case 'close':
				$('#'+elId+'-in').css('overflow-y','hidden');
				self.tlOpen.to($('.holdDrops'),0.25,{
					height: 0,
					ease: Cubic.easeOut
				});
				break;
		};
	
};
Dropdowns.prototype.create = function(){
	 $('#hoDays-in').html(' ');
	var i;
	var y;
	var mths = [ 'January', 'February','March','April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
	for (var i = 1 ; i <= 31 ; i ++ ) {
		var cadena= '<div data-info="'+i+'" class="indeOnes"><p>'+i+'</p> </div>';
		$('#hoDays-in').append(cadena);
	};
	var years = new Date().getFullYear();
	var year_starts = years-17;
	var year_finish = years-110;

	for (var y = years ; y >= year_finish ; y -- ) {
		var cadena= '<div data-info="'+y+'" class="indeOnes"><p>'+y+'</p> </div>';
		$('#hoYears-in').append(cadena);
	};
	for (var l = 0; l < mths.length; l++) {
		var cadena= '<div data-info="'+mths[l]+'" data-nummth="'+l+'" class="indeOnes"><p>'+mths[l]+'</p> </div>';
		$('#hoMonths-in').append(cadena);

	};

}