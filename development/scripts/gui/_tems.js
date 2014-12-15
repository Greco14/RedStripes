$(function() {
	alert('Charged!!')
    var size = $("#full_p > p").size();
	$(".Column1 > p").each(function(index){
		var counting = size/3;
		console.log(counting);
		if (index >= size/3){
			$(this).appendTo(".Column2");
	 	}
	});
});