let deysId = document.getElementById("deys");	
let hoursId = document.getElementById("hours");	
let minetsId = document.getElementById("minets");	
let secondsId = document.getElementById("seconds");	

let targetDate = new Date(`20 may ${new Date().getFullYear()}` );
if (new Date() > targetDate) {
	targetDate = new Date(`20 may ${new Date().getFullYear()+1}` );
}


function tic() {
	let diff = Math.floor((targetDate - new Date())/1000);
	let deys = Math.floor(diff/3600/24);
	let hours =Math.floor(diff/3600)%24 ;
	let minets = Math.floor(diff/60)%60;
	let seconds = diff%(60);

	function formatDate(dt) {
		return (dt < 10) ? ":0"+dt : ":"+dt; 
		
	}
	
	// console.log(deys, hours, minets, seconds)

	deysId.innerHTML = deys;
	hoursId.innerHTML = formatDate(hours);
	minetsId.innerHTML = formatDate(minets);
	secondsId.innerHTML = formatDate(seconds);
	
}


tic();

setInterval(tic, 1000)
