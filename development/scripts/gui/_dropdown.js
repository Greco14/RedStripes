Dropdowns = function(){
	this.settings ={
		btn_drop: $('.boxIp'),
		dp_days: $('#holD'),
		dp_years: $('#holdY'),
		dp_months: $('#holM'),
		boxIp: $('.mainselector')
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
		console.log(elId, alto);
		self.animation('close');
		setTimeout(function(){
			self.animation('open', elId , alto)
		},270)
		
	});
	self.create();

	s.dp_days.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		var este = s.dp_days.find('.mainselector');
		este.html('<p>'+wich+'</p>');
		self.animation('close');
	});
	s.dp_years.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		
		var este2 = s.dp_years.find('.mainselector');
		este2.html('<p>'+wich+'</p>');
		self.animation('close');

	});
	s.dp_months.on('click','.indeOnes',function(){
		var wich = $(this).attr('data-info');
		console.log('month'+ wich)
		var este3 = s.dp_months.find('.mainselector');
		este3.html('<p>'+wich+'</p>');
		self.animation('close');
	});

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

	for (var y = year_starts ; y >= year_finish ; y -- ) {
		var cadena= '<div data-info="'+y+'" class="indeOnes"><p>'+y+'</p> </div>';
		$('#hoYears-in').append(cadena);
	};
	for (var l = 0; l < mths.length; l++) {
		var cadena= '<div data-info="'+mths[l]+'" class="indeOnes"><p>'+mths[l]+'</p> </div>';
		$('#hoMonths-in').append(cadena);

	};

}