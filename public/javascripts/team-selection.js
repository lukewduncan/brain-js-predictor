$(function() {

	var count = 0;
	console.log(count);
	
	var predictbutton = $('<button class="predict-button">Predict Now</button>');
	var refreshbutton = $('<button class="refresh-button">Refresh Teams</button>');

	$('.select-teams').on('click', function(){

		if (count > 1) {
			return
		}

		else if (count === 0) {	
				$(this).parent().removeClass("team").addClass("two-teams");
				$(this).parent().removeClass("team-name").addClass("team-name-chosen");
        $(this).parent().appendTo(".team1");
        $(".versus").html('<h1>vs</h1>');
        $(this).remove();

        count++;
    } 
    else {
				$(this).parent().removeClass('team').addClass("two-teams");
				$(this).parent().appendTo(".team2");
				$(this).remove();

				count++;

				$(".predict-button-section").append(predictbutton);
				$(".predict-button-section").append(refreshbutton);
    }
	});

	$(predictbutton).on('click', function(){
		var value = $('.team-name-chosen h4').html();
		console.log(value, "grabbing team-name");

	})

	$(refreshbutton).on('click', function(){
		location.reload();
	})




}) // end of document ready

