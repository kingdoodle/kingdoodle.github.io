
var updateGreeting = function(hour) {
	var greeting;

	if( hour >= 18) {
		greeting = "Good Evening!!";
		document.getElementById("container").style.backgroundColor = "red";

	}
	else if( hour >= 13) {
		greeting = "Good Afternoon!!";
		document.getElementById("container").style.backgroundColor = "turquoise";
	}
	else if( hour >= 0) {
		greeting = "Good Morning!!";
		document.getElementById("container").style.backgroundColor = "orange";
	}
	else{
		greeting = "Welcome!!";
	}

	return greeting;

}
var updateClock = function(hour) { 
	var currentTime = new Date();
	//alert(currentTime); 

	var currentHours24 = currentTime.getHours();

	var currentMinutes = currentTime.getMinutes();

	var currentSeconds = currentTime.getSeconds();

	var amOrpm = ( currentHours24 < 12) ? "Am" : "PM" ;

	var currentHours12 = ( currentHours24 > 12 ) ? currentHours24-12 : currentHours12 ;

	currentHours12 = (  currentHours12 == 0) ? 12 : currentHours12;



	var currentTimeString = "Current time is " + currentHours12 + " : " +currentMinutes + " : " +currentSeconds + " " +
	amOrpm;

	document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
	document.getElementById("clock").innerHTML = currentTimeString;

}