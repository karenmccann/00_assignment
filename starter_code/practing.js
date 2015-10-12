//add js to the html the link from former
$(document).ready(function(){
	alert('hello');


	//if user types 
	function submit(event){
	event.preventDefault();
}

	function updateBackground() {
		$("#submit-btn:#Get").click(function(){
		var entry = $("#city-type").attr({"cnyc":"new york","new york city"}),
		//var entry = $("#city-type").attr({"class":"filterform","action":"#"}),
		//input = $("<input>").attr({"class":"filterinput","type":"text"});

		$(form).append(input).appendTo('.nyc');
    	//$("#nyc").attr("width","680");
    	//$('#msg').html($('input:textbox').val());
    });

		//make type/search not case sensitive
	//jQuery.expr[':'].Contains = function(a,i,m){
    //return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	//};

		//"New York" or "New York City" or "NYC" 
			//make "nyc.jpg" background
			if("new york", "new york city", "nyc"){
				//if(userChoice="new york", "new york city", "nyc"){
							//.dispay(../images/nyc.jpg);
				//updateBackground = ('.nyc');
				//updateBackground = ('.nyc');
				$("body").css("background-image",".nyc");
				//.dispay(../images/nyc.jpg);
			}
		//"San Francisco" or "SF" or "Bay Area" 
			//make "sf.jpg" background
			.var("san francisco", "sf","bay area")
		//"Los Angeles" or "LA" or "LAX" 
			//make "la.jpg" background
			.var("los angeles","la","lax")
		//"Austin" or "ATX" 
			//make "austin.jpg" background
			.var("austin", "atx")
		//"Sydney" or "SYD" 
			//make "sydney.jpg"
			.var("sydney","syd")
		// if else 
			//show alert('We currently dont have any images of this city');
			else if {
				alert('We currently dont have any images of this city');
			}


  //When a user clicks #submit-btn run a function called updateBackground
  $('#submit').click(updateBackground);

	
});