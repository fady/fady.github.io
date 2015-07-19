$(document).ready(function() {
	$(".topMenuAction").click( function() {
		if ($("#openCloseIdentifier").is(":hidden")) {
			$("#slider").animate({ 
				marginTop: "-31px"
				}, 300 );
			$("#topMenuImage").html('<img src="http://static.tumblr.com/fkm6sn6/0n9lb7jpq/topnavbutton.png" alt="Show Navigation"/>');
			$("#openCloseIdentifier").show();
		} else {
			$("#slider").animate({ 
				marginTop: "0px"
				}, 300 );
			$("#topMenuImage").html('<img src="http://static.tumblr.com/fkm6sn6/0n9lb7jpq/topnavbutton.png" alt="Hide Navigation"/>');
			$("#openCloseIdentifier").hide();
		}
	});  
});