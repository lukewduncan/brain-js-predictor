$(function() {

	var count = 0;
	
	var predictbutton = $('<button class="predict-button">Predict Now</button>');
	var refreshbutton = $('<button class="refresh-button">Refresh Teams</button>');

	var selectedTeams = new Array();

	$('.select-teams').on('click', function(){
		
		// if two teams have been selected, function ends
		if (count > 1) {
			return
		}

		// if no team has been selected, put this first team into .team1 div
		else if (count === 0) {	
			$(this).parent().removeClass("team").addClass("two-teams");
			$(this).parent().removeClass("team-name").addClass("team-name-chosen");
      $(this).parent().appendTo(".team1").hide().fadeIn(600);
      $(".versus").html('<h1>vs</h1>').hide().fadeIn(600);
      $(this).remove();
      
      count++;
    } 
    // if one team has been selected, input next team into .team2 div
    else {
			$(this).parent().removeClass('team').addClass("two-teams");
			$(this).parent().removeClass("team-name").addClass("team-name-chosen");
			$(this).parent().appendTo(".team2").hide().fadeIn(600);
			$(this).remove();

			var team2 = $('.team-name-chosen h4').each(function(){
				selectedTeams.push($(this).text());
			});

			count++;

			$(".predict-button-section").append(predictbutton).hide().fadeIn(300);
			$(".predict-button-section").append(refreshbutton).hide().fadeIn(300);
    }
	});

	
	// sends two teams into brain
	$(predictbutton).on('click', function(){
		var teamString = selectedTeams.toString();

		$.ajax ({
			type: 'POST',
			url: '/',
			data: { teams: teamString },
			success: function(data){
				console.log(data);
			},
			error: function() {
				console.log("error");
			},
			complete: function() {
				console.log("complete");
			}
		});
	}); // end of predict button

	
	// refreshes page in case someone wants to select other teams
	$(refreshbutton).on('click', function(){
		location.reload();
	})




}) // end of document ready

