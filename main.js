

function newTime (){

	

	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes(); 
	var seconds = today.getSeconds();
	
	
	var showHours=document.getElementById('hours')

 		if(hours >= 10){
 		showHours.innerHTML = hours + ':'
 	} 	else { 
 		hours = "0" + hours + ':'
 	}

	
 	var showMinutes=document.getElementById('minutes')
 	
 		if(minutes >= 10){
 		showMinutes.innerHTML = minutes + ':'
 	} 	else {
 		hours = "0" + minutes + ':'
 	}


 var showSeconds=document.getElementById('seconds')
 	
 	if(seconds >= 10){
 		showSeconds.innerHTML = seconds + ':'
 	} else {
 		seconds = "0" + seconds + ':'
 	}

};

 	
 var hexCodeNumber = 123456;

function hexCodeChange () {
	hexCodeNumber = hexCodeNumber + 1;
};

function hexColorBackground () {
	var hexBlock = document.getElementById("hexCode");
	hexBlock.innerHTML = "<div style=\"width:730px; height:300px; border:10px; background-color: " + hexCodeNumber + ";margin-left:auto; text-align: center;display: inline-block;\">#" + hexCodeNumber;
	hexBlock.style.backgroundColor = ("#" + hexCodeNumber);
};


 setInterval (newTime,1000);
 setInterval (hexColorBackground, 250)
 setInterval (hexCodeChange, 500)

         



