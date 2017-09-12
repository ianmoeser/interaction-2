$(document).ready(function() {
	$('#button-12').click('click touchstart', function() {
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.8'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.6'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.2'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.4'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.6'}, 200);
		$(this).animate({opacity: '1'}, 200);
		$(this).animate({opacity: '.8'}, 200);
		$(this).animate({opacity: '.6'}, 200);

	});

});


 $(function() {
$( "#button-35" ).draggable();
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("#button-41").click(function(){
    $("div").animate({left: '250px'});
}); 

