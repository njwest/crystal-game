window.onload = function(){
	$('#ruby').click(crystals.rubyTouch);
	$('#geode').click(crystals.geodeTouch);
	$('#sapphire').click(crystals.sapphireTouch);
	$('#amulet').click(crystals.amuletTouch);
	$('#discharge').click(discharge);
	$('#release').click(release);
};

	var pwr = 0;
	var cash = 0;
	var crystals = {
			rubyTouch: function(){
				pwr += 33;
				$("#pwrCounter").html(pwr +  " cpz");
			},
			geodeTouch: function(){
				pwr += 3;
				$("#pwrCounter").html(pwr +  " cpz");
			},
			sapphireTouch: function(){
				pwr += 200;
				$("#pwrCounter").html(pwr + " cpz");
			},
			amuletTouch: function(){
				if (pwr === 999){
					confirm('The gem burns your finger and a voice in your head says, "Yes, awaken, Crystaltoucher, awaken!"')
					$(".background").html("<img style='margin-left:auto; margin-right:auto;' width='70%' height='70%' src='assets/images/crystal-amulet.png'/>");
				}
				else{
					pwr += 1;
					$("#pwrCounter").html(pwr + " cpz");
				}
			}	
	};
	var discharge = function(){
			if (pwr === 999){
			cash += 600;
				$("#cash").html(cash + "₽");
			pwr=0;
				$("#pwrCounter").html(pwr + " cpz");
		}
			else{
				console.log("Hi")
			}
	}

	var release = function(){
		pwr=0;
		$("#pwrCounter").html(pwr + " cpz");
	}

		

		