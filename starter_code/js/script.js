//add js to the html the link from former
$(document).ready(function(){
	alert('hello');


	// prevent default page loading
	function submitBtn(event){
	event.preventDefault();
}
	//if user types 
	function submitBtn(){
		//"New York" or "New York City" or "NYC" 
			//make "nyc.jpg" background
		if ('#city-type'="nyc","new york","new york city") {
		$(".nyc").backgroundImage="url(../images/nyc.jpg");
		//console.log("nyc");
		} else {		
		//"San Francisco" or "SF" or "Bay Area" 
			//make "sf.jpg" background
			//.var("san francisco", "sf","bay area")
			('#city-type'="san francisco","sf","bay area") {
			$(".sf").backgroundImage="url(../images/sf.jpg");
			//console.log("sf");
			} else {
		//"Los Angeles" or "LA" or "LAX" 
			//make "la.jpg" background
			//.var("los angeles","la","lax")
				('#city-type'="los angeles","la","lax") {
				$(".la").backgroundImage="url(../images/la.jpg");
				//console.log("la");
			} else {
		//"Austin" or "ATX" 
			//make "austin.jpg" background
			//.var("austin", "atx")
				('#city-type'="austin","atx") {
				$(".austin").backgroundImage="url(../images/austin.jpg");
				//console.log("austin");
			} else {
		//"Sydney" or "SYD" 
			//make "sydney.jpg"
			//.var("sydney","syd")
				('#city-type'="sydney","syd") {
				$(".sydney").backgroundImage="url(../images/sydney.jpg");
				//console.log("sydney");
			} if else {
		// if else 
			//show alert('We currently dont have any images of this city');
				alert('We currently dont have any images of this city');
			}




  //When a user clicks #submit-btn run a function called updateBackground
  $('#submit-btn').on('click', 'submitBtn');

	
});





//FAIL

// this is what i was meant to do
//'$('body').attr('class', 'nyc');
//$('input').val();
//|| to separate strings







