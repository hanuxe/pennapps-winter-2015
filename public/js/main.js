/*
* | 
* January 16, 2015 11:35 pm
* main.js v1.0.0
*/

/*===============================*/
/* login/register page 
/* on click action switch 
/* container
/*===============================*/

/*
* $('data-login=""');
* $('data-register=""');
* 
* container variables
*/
$(function() {

	//onClick hide login container
	//content and show register 
	//content
	$('[login]').click(function() {
		$('[login]').hide();
		$('[register]').show();
	});

	//onClick hide register container
	//content and show login 
	//content
	$('[register]').click(function() {
		$('[register]').hide();
		$('[login]').hide();
	});

});