$(function(){
	var height = Math.max($(".leftcolumn").height(), $(".rightcolumn").height());
    $(".leftcolumn").height(height);
    $(".rightcolumn").height(height);

    var x = $("#myTopnav");
    $(".icon").click(function() {	
	    if (x.hasClass("topnav")) {
	        x.toggleClass("responsive");
	    }
	});
});