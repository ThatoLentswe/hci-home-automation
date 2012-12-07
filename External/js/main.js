
$(function() {

	//find all the inputs that has the class setBlackIcon and sets it's icon to black.
	$("#homePage").bind("pagebeforeshow", function(){
		$("div .setBlackIcon").parent().addClass("blackIcon");
	});

});

