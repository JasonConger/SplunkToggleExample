require.config({
    paths: {
        "app": "../app"
    }
});
require(['splunkjs/mvc/simplexml/ready!'], function(){
    require(['splunkjs/ready!'], function(){
        // The splunkjs/ready loader script will automatically instantiate all elements
        // declared in the dashboard's HTML.
	
	// ************************************************************
	// This fuction toggles the visibility and height of an element
	// and is reusable.
	// ************************************************************
	function toggle(button, target) {
	    
	    if(target.css("visibility") == "hidden" ) {
		button.attr("src", "/static/app/ToggleExample/collapse.png");
		target.css({
		    "height": "auto",
		    "visibility": "visible"});
	    }
	    else
	    {
		button.attr("src", "/static/app/ToggleExample/expand.png");
		target.css({
		    "height": "0px",
		    "visibility": "hidden"});
	    }
	}
	
        // Use jQuery to add the toggle button the the element we want
        $("#single").find("h3").after('<img id="imgToggle" src="/static/app/ToggleExample/expand.png" style="float: right; padding-right: 15px; cursor: pointer" />');
	
	// Setup the click handler for the toggle button
	$("#imgToggle").click(function(){
	    toggle($(this), $(".dashboard-row2"));
        });
    });
});