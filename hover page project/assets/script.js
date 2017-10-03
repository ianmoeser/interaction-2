$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

});


/*if hover
	music plays
	shape wiggles
			get SVG date
			change svg data
			over time
			as long as hover
else (off hover)
	music stops
	wiggles stop*/