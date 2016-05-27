window.onload = function(){
	$('#ruby').click(crystals.rubyTouch);
	$('#geode').click(crystals.geodeTouch);
	$('#sapphire').click(crystals.sapphireTouch);
	$('#amulet').click(crystals.amuletTouch);
};

	var pwr = 0;
	var cash = 0;
	var crystals = {
			rubyTouch: function(){
				pwr += 33;
				$("#pwrCounter").html(pwr);
			},
			geodeTouch: function(){
				pwr += 3;
				$("#pwrCounter").html(pwr);
			},
			sapphireTouch: function(){
				pwr += 200;
				$("#pwrCounter").html(pwr);
			},
			amuletTouch: function(){
				if (pwr >= 999 && pwr <= 9000){
					$("#container");
				}
				else{
				}
			}
	};

		