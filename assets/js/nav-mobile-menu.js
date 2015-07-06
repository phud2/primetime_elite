//DOM is ready
$(function() {
	$('button').click(function() {
	  $(this).toggleClass('expanded').siblings('.nav-list-mobile').slideToggle();
	});
});