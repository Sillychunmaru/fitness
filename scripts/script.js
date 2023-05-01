/* 
	Student Name: James Viglino
	File Name: script.js 
	Date: 5/1/2023
*/

//Global variables
	var video = document.getElementById("example");
	var videoSource = document.getElementById("vid-src");
	var descriptionSource = document.getElementById("despsrc");

//Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo"); 
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
		
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
		
	}
}

//function to display the burpees example video
function burpees() {
		videoSource.src = "media/burpees.mp4";
		descriptionSource.src = "media/burpees-descriptions.vtt";
		video.style.display = "block";
		video.load();
}

//function to display the plank example video
function plank() {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "media/plank-desctiptions.vtt";
	video.style.display = "block";
	video.load();
	
}

//Function to display the mountain climbers example video 
function mountain() {
	videoSource.src = "media/mc.mp4";
	descriptionSource.src = "media/mountain-descriptions";
	video.style.display = "block";
	video.load();
	
}

//Function to display a promo code
function discount() {
		var promo = document.getElementById("special");
		promo.firstChild.nodeValue = "Promo Code: D25start";
		promo.style.color = "#ff0000";
		promo.style.fontSize = "2em";
}








































