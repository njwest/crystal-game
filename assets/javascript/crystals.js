window.onload = function(){
	$('#ruby').click(crystals.rubyTouch);
	$('#geode').click(crystals.geodeTouch);
};
	
	var pwr = 0;
	var crystals = {
			rubyTouch: function(){
				pwr += 33;
				$("#pwrCounter").html(pwr);
			},
			geodeTouch: function(){
				pwr += 3;
				$("#pwrCounter").html(pwr);
			}
	};