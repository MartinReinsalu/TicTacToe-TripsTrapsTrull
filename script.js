/**
 * 
 */
var counter = 0;
var GameOver = false;
var turn = "";
var markedbyUser = [];
var markedbyComputer = [];
var canvases = ["Canvaslf", "Canvasmf", "Canvasrf", "Canvasls", "Canvasms", "Canvasrs", "Canvaslt", "Canvasmt", "Canvasrt"];

function minuX(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
   
    if(counter < 5 && !(markedbyComputer.includes(id))){
        context.lineWidth = 20;
        context.beginPath();
        context.strokeStyle = "#F9F507";
        context.moveTo(40, 40);
    	context.lineTo(160, 160);
    	context.stroke();
    	context.moveTo(160, 40);
    	context.lineTo(40, 160);
    	context.stroke();
        counter++;
        
        turn = "user";
        
        markedbyUser.push(id);
        removeElement(id);
        
        if(canvases.length > 0 && !((markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasmf") && markedbyUser.includes("Canvasrf")) ||
        		                  (markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasls") && markedbyUser.includes("Canvaslt")) ||
        		                  (markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasrt")) ||
        		                  (markedbyUser.includes("Canvasmf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasmt")) ||
        		                  (markedbyUser.includes("Canvasrf") && markedbyUser.includes("Canvasrs") && markedbyUser.includes("Canvasrt")) ||
        		                  (markedbyUser.includes("Canvasls") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasrs")) ||
        		                  (markedbyUser.includes("Canvaslt") && markedbyUser.includes("Canvasmt") && markedbyUser.includes("Canvasrt")) ||
        		                  (markedbyUser.includes("Canvasrf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvaslt")))){
        	if(radiobuttonValue() == "kerge"){
        		var opponent = randomElement(canvases);
        	}
        	else if(radiobuttonValue() == "raske"){
        		var possibleOpponent = [];
        		//FIRST
        		if(markedbyUser.includes("Canvaslf") && !markedbyUser.includes("Canvasmf") && !markedbyComputer.includes("Canvasmf")){
        			possibleOpponent.push("Canvasmf"); 
        		}
        		if(markedbyUser.includes("Canvaslf") && !markedbyUser.includes("Canvasls") && !markedbyComputer.includes("Canvasls")){
        			possibleOpponent.push("Canvasls"); 
        		}
        		if(markedbyUser.includes("Canvaslf") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasmf") && !markedbyUser.includes("Canvaslf") && !markedbyComputer.includes("Canvaslf")){
        			possibleOpponent.push("Canvaslf"); 
        		}
        		if(markedbyUser.includes("Canvasmf") && !markedbyUser.includes("Canvasrf") && !markedbyComputer.includes("Canvasrf")){
        			possibleOpponent.push("Canvasrf"); 
        		}
        		if(markedbyUser.includes("Canvasmf") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasrf") && !markedbyUser.includes("Canvasmf") && !markedbyComputer.includes("Canvasmf")){
        			possibleOpponent.push("Canvasmf"); 
        		}
        		if(markedbyUser.includes("Canvasrf") && !markedbyUser.includes("Canvasrs") && !markedbyComputer.includes("Canvasrs")){
        			possibleOpponent.push("Canvasrs"); 
        		}
        		if(markedbyUser.includes("Canvasrf") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		//SECOND
        		if(markedbyUser.includes("Canvasls") && !markedbyUser.includes("Canvaslf") && !markedbyComputer.includes("Canvaslf")){
        			possibleOpponent.push("Canvaslf"); 
        		}
        		if(markedbyUser.includes("Canvasls") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasls") && !markedbyUser.includes("Canvaslt") && !markedbyComputer.includes("Canvaslt")){
        			possibleOpponent.push("Canvaslt"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvaslf") && !markedbyComputer.includes("Canvaslf")){
        			possibleOpponent.push("Canvaslf"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasmf") && !markedbyComputer.includes("Canvasmf")){
        			possibleOpponent.push("Canvasmf"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasrf") && !markedbyComputer.includes("Canvasrf")){
        			possibleOpponent.push("Canvasrf"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasls") && !markedbyComputer.includes("Canvasls")){
        			possibleOpponent.push("Canvasls"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasrs") && !markedbyComputer.includes("Canvasrs")){
        			possibleOpponent.push("Canvasrs"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvaslt") && !markedbyComputer.includes("Canvaslt")){
        			possibleOpponent.push("Canvaslt"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasmt") && !markedbyComputer.includes("Canvasmt")){
        			possibleOpponent.push("Canvasmt"); 
        		}
        		if(markedbyUser.includes("Canvasms") && !markedbyUser.includes("Canvasrt") && !markedbyComputer.includes("Canvasrt")){
        			possibleOpponent.push("Canvasrt"); 
        		}
        		if(markedbyUser.includes("Canvasrs") && !markedbyUser.includes("Canvasrf") && !markedbyComputer.includes("Canvasrf")){
        			possibleOpponent.push("Canvasrf"); 
        		}
        		if(markedbyUser.includes("Canvasrs") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasrs") && !markedbyUser.includes("Canvasrt") && !markedbyComputer.includes("Canvasrt")){
        			possibleOpponent.push("Canvasrt"); 
        		}
        		//THIRD
        		if(markedbyUser.includes("Canvaslt") && !markedbyUser.includes("Canvasls") && !markedbyComputer.includes("Canvasls")){
        			possibleOpponent.push("Canvasls"); 
        		}
        		if(markedbyUser.includes("Canvaslt") && !markedbyUser.includes("Canvasmt") && !markedbyComputer.includes("Canvasmt")){
        			possibleOpponent.push("Canvasmt"); 
        		}
        		if(markedbyUser.includes("Canvaslt") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasmt") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		if(markedbyUser.includes("Canvasmt") && !markedbyUser.includes("Canvaslt") && !markedbyComputer.includes("Canvaslt")){
        			possibleOpponent.push("Canvaslt"); 
        		}
        		if(markedbyUser.includes("Canvasmt") && !markedbyUser.includes("Canvasrt") && !markedbyComputer.includes("Canvasrt")){
        			possibleOpponent.push("Canvasrt"); 
        		}
        		if(markedbyUser.includes("Canvasrt") && !markedbyUser.includes("Canvasrs") && !markedbyComputer.includes("Canvasrs")){
        			possibleOpponent.push("Canvasrs"); 
        		}
        		if(markedbyUser.includes("Canvasrt") && !markedbyUser.includes("Canvasmt") && !markedbyComputer.includes("Canvasmt")){
        			possibleOpponent.push("Canvasmt"); 
        		}
        		if(markedbyUser.includes("Canvasrt") && !markedbyUser.includes("Canvasms") && !markedbyComputer.includes("Canvasms")){
        			possibleOpponent.push("Canvasms"); 
        		}
        		var opponent = randomElement(possibleOpponent);
        	}
        	var opponentMove = document.getElementById(opponent);
        	var contextOpponent = opponentMove.getContext("2d");
        	contextOpponent.beginPath()
        	contextOpponent.arc(100,100,80,0,Math.PI*2, false); 
        	contextOpponent.arc(100,100,60,0,Math.PI*2, true); 
        	contextOpponent.fill();
        	turn = "opponent";
        	markedbyComputer.push(opponent);
        	removeElement(opponent);
        }
    }
    else{
        document.getElementById("id").disabled = true;
    }
    
    if(markedbyUser.length > 2){
    	if((markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasmf") && markedbyUser.includes("Canvasrf")) ||
    	   (markedbyComputer.includes("Canvaslf") && markedbyComputer.includes("Canvasmf") && markedbyComputer.includes("Canvasrf"))){
    		var cnvslf = document.getElementById("Canvaslf");
    	    var contextlf = cnvslf.getContext("2d");
    	    contextlf.lineWidth = 20;
    	    contextlf.beginPath();
    	    contextlf.strokeStyle = "red";
    	    contextlf.moveTo(0, 100);
    	    contextlf.lineTo(200, 100);
    	    contextlf.stroke();
    	    
    	    var cnvsmf = document.getElementById("Canvasmf");
    	    var contextmf = cnvsmf.getContext("2d");
    	    contextmf.lineWidth = 20;
    	    contextmf.beginPath();
    	    contextmf.strokeStyle = "red";
    	    contextmf.moveTo(0, 100);
    	    contextmf.lineTo(200, 100);
    	    contextmf.stroke();
    	    
    	    var cnvsrf = document.getElementById("Canvasrf");
    	    var contextrf = cnvsrf.getContext("2d");
    	    contextrf.lineWidth = 20;
    	    contextrf.beginPath();
    	    contextrf.strokeStyle = "red";
    	    contextrf.moveTo(0, 100);
    	    contextrf.lineTo(200, 100);
    	    contextrf.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasls") && markedbyUser.includes("Canvaslt")) ||
    			(markedbyComputer.includes("Canvaslf") && markedbyComputer.includes("Canvasls") && markedbyComputer.includes("Canvaslt"))){
    		var cnvslf = document.getElementById("Canvaslf");
    	    var contextlf = cnvslf.getContext("2d");
    	    contextlf.lineWidth = 20;
    	    contextlf.beginPath();
    	    contextlf.strokeStyle = "red";
    	    contextlf.moveTo(100, 0);
    	    contextlf.lineTo(100, 200);
    	    contextlf.stroke();
    	    
    	    var cnvsls = document.getElementById("Canvasls");
    	    var contextls = cnvsls.getContext("2d");
    	    contextls.lineWidth = 20;
    	    contextls.beginPath();
    	    contextls.strokeStyle = "red";
    	    contextls.moveTo(100, 0);
    	    contextls.lineTo(100, 200);
    	    contextls.stroke();
    	    
    	    var cnvslt = document.getElementById("Canvaslt");
    	    var contextlt = cnvslt.getContext("2d");
    	    contextlt.lineWidth = 20;
    	    contextlt.beginPath();
    	    contextlt.strokeStyle = "red";
    	    contextlt.moveTo(100, 0);
    	    contextlt.lineTo(100, 200);
    	    contextlt.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvaslf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasrt")) ||
    			(markedbyComputer.includes("Canvaslf") && markedbyComputer.includes("Canvasms") && markedbyComputer.includes("Canvasrt"))){ //diagonaal
    		var cnvslf = document.getElementById("Canvaslf");
    	    var contextlf = cnvslf.getContext("2d");
    	    contextlf.lineWidth = 20;
    	    contextlf.beginPath();
    	    contextlf.strokeStyle = "red";
    	    contextlf.moveTo(0, 0);
    	    contextlf.lineTo(200, 200);
    	    contextlf.stroke();
    	    
    	    var cnvsms = document.getElementById("Canvasms");
    	    var contextms = cnvsms.getContext("2d");
    	    contextms.lineWidth = 20;
    	    contextms.beginPath();
    	    contextms.strokeStyle = "red";
    	    contextms.moveTo(0, 0);
    	    contextms.lineTo(200, 200);
    	    contextms.stroke();
    	    
    	    var cnvsrt = document.getElementById("Canvasrt");
    	    var contextrt = cnvsrt.getContext("2d");
    	    contextrt.lineWidth = 20;
    	    contextrt.beginPath();
    	    contextrt.strokeStyle = "red";
    	    contextrt.moveTo(0, 0);
    	    contextrt.lineTo(200, 200);
    	    contextrt.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvasmf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasmt")) ||
    			(markedbyComputer.includes("Canvasmf") && markedbyComputer.includes("Canvasms") && markedbyComputer.includes("Canvasmt"))){
    		var cnvsmf = document.getElementById("Canvasmf");
    	    var contextmf = cnvsmf.getContext("2d");
    	    contextmf.lineWidth = 20;
    	    contextmf.beginPath();
    	    contextmf.strokeStyle = "red";
    	    contextmf.moveTo(100, 0);
    	    contextmf.lineTo(100, 200);
    	    contextmf.stroke();
    	    
    	    var cnvsms = document.getElementById("Canvasms");
    	    var contextms = cnvsms.getContext("2d");
    	    contextms.lineWidth = 20;
    	    contextms.beginPath();
    	    contextms.strokeStyle = "red";
    	    contextms.moveTo(100, 0);
    	    contextms.lineTo(100, 200);
    	    contextms.stroke();
    	    
    	    var cnvsmt = document.getElementById("Canvasmt");
    	    var contextmt = cnvsmt.getContext("2d");
    	    contextmt.lineWidth = 20;
    	    contextmt.beginPath();
    	    contextmt.strokeStyle = "red";
    	    contextmt.moveTo(100, 0);
    	    contextmt.lineTo(100, 200);
    	    contextmt.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvasrf") && markedbyUser.includes("Canvasrs") && markedbyUser.includes("Canvasrt")) ||
    			(markedbyComputer.includes("Canvasrf") && markedbyComputer.includes("Canvasrs") && markedbyComputer.includes("Canvasrt"))){
    		var cnvsrf = document.getElementById("Canvasrf");
    	    var contextrf = cnvsrf.getContext("2d");
    	    contextrf.lineWidth = 20;
    	    contextrf.beginPath();
    	    contextrf.strokeStyle = "red";
    	    contextrf.moveTo(100, 0);
    	    contextrf.lineTo(100, 200);
    	    contextrf.stroke();
    	    
    	    var cnvsrs = document.getElementById("Canvasrs");
    	    var contextrs = cnvsrs.getContext("2d");
    	    contextrs.lineWidth = 20;
    	    contextrs.beginPath();
    	    contextrs.strokeStyle = "red";
    	    contextrs.moveTo(100, 0);
    	    contextrs.lineTo(100, 200);
    	    contextrs.stroke();
    	    
    	    var cnvsrt = document.getElementById("Canvasrt");
    	    var contextrt = cnvsrt.getContext("2d");
    	    contextrt.lineWidth = 20;
    	    contextrt.beginPath();
    	    contextrt.strokeStyle = "red";
    	    contextrt.moveTo(100, 0);
    	    contextrt.lineTo(100, 200);
    	    contextrt.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvasls") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvasrs")) ||
    			(markedbyComputer.includes("Canvasls") && markedbyComputer.includes("Canvasms") && markedbyComputer.includes("Canvasrs"))){
    		var cnvsls = document.getElementById("Canvasls");
    	    var contextls = cnvsls.getContext("2d");
    	    contextls.lineWidth = 20;
    	    contextls.beginPath();
    	    contextls.strokeStyle = "red";
    	    contextls.moveTo(0, 100);
    	    contextls.lineTo(200, 100);
    	    contextls.stroke();
    	    
    	    var cnvsms = document.getElementById("Canvasms");
    	    var contextms = cnvsms.getContext("2d");
    	    contextms.lineWidth = 20;
    	    contextms.beginPath();
    	    contextms.strokeStyle = "red";
    	    contextms.moveTo(0, 100);
    	    contextms.lineTo(200, 100);
    	    contextms.stroke();
    	    
    	    var cnvsrs = document.getElementById("Canvasrs");
    	    var contextrs = cnvsrs.getContext("2d");
    	    contextrs.lineWidth = 20;
    	    contextrs.beginPath();
    	    contextrs.strokeStyle = "red";
    	    contextrs.moveTo(0, 100);
    	    contextrs.lineTo(200, 100);
    	    contextrs.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvaslt") && markedbyUser.includes("Canvasmt") && markedbyUser.includes("Canvasrt")) ||
    			(markedbyComputer.includes("Canvaslt") && markedbyComputer.includes("Canvasmt") && markedbyComputer.includes("Canvasrt"))){
    		var cnvslt = document.getElementById("Canvaslt");
    	    var contextlt = cnvslt.getContext("2d");
    	    contextlt.lineWidth = 20;
    	    contextlt.beginPath();
    	    contextlt.strokeStyle = "red";
    	    contextlt.moveTo(0, 100);
    	    contextlt.lineTo(200, 100);
    	    contextlt.stroke();
    	    
    	    var cnvsmt = document.getElementById("Canvasmt");
    	    var contextmt = cnvsmt.getContext("2d");
    	    contextmt.lineWidth = 20;
    	    contextmt.beginPath();
    	    contextmt.strokeStyle = "red";
    	    contextmt.moveTo(0, 100);
    	    contextmt.lineTo(200, 100);
    	    contextmt.stroke();
    	    
    	    var cnvsrt = document.getElementById("Canvasrt");
    	    var contextrt = cnvsrt.getContext("2d");
    	    contextrt.lineWidth = 20;
    	    contextrt.beginPath();
    	    contextrt.strokeStyle = "red";
    	    contextrt.moveTo(0, 100);
    	    contextrt.lineTo(200, 100);
    	    contextrt.stroke();
    	    
    	    GameOver = true;
    	}
    	else if((markedbyUser.includes("Canvasrf") && markedbyUser.includes("Canvasms") && markedbyUser.includes("Canvaslt")) ||
    			(markedbyComputer.includes("Canvasrf") && markedbyComputer.includes("Canvasms") && markedbyComputer.includes("Canvaslt"))){ //diagonaal
    		var cnvsrf = document.getElementById("Canvasrf");
    	    var contextrf = cnvsrf.getContext("2d");
    	    contextrf.lineWidth = 20;
    	    contextrf.beginPath();
    	    contextrf.strokeStyle = "red";
    	    contextrf.moveTo(200, 0);
    	    contextrf.lineTo(0, 200);
    	    contextrf.stroke();
    	    
    	    var cnvsms = document.getElementById("Canvasms");
    	    var contextms = cnvsms.getContext("2d");
    	    contextms.lineWidth = 20;
    	    contextms.beginPath();
    	    contextms.strokeStyle = "red";
    	    contextms.moveTo(200, 0);
    	    contextms.lineTo(0, 200);
    	    contextms.stroke();
    	    
    	    var cnvslt = document.getElementById("Canvaslt");
    	    var contextlt = cnvslt.getContext("2d");
    	    contextlt.lineWidth = 20;
    	    contextlt.beginPath();
    	    contextlt.strokeStyle = "red";
    	    contextlt.moveTo(200, 0);
    	    contextlt.lineTo(0, 200);
    	    contextlt.stroke();
    	    
    	    GameOver = true;
    	}
    	
    	if(GameOver == true){
    		counter = 5;
    		
    		if(turn == "user"){
    			alert("Palju õnne, võitsid!");
    		}
    		else if(turn == "opponent"){
    			alert("Kahjuks kaotasid!");
    		}
    		
    		setTimeout(function(){ 
    			clear();
    		}, 3000);
    	}
    	else if(GameOver == false && counter == 5){
    		alert("Mäng jäi viiki!");
    		setTimeout(function(){ 
    			clear();
    		}, 3000);
    	}
    	
    }
}

function removeElement(element){
	for(var i = 0; i < canvases.length; i++){
		if(canvases[i] == element){
			canvases.splice(i, 1);
			break;
		}
	}
}

function randomElement(array){
	return array[Math.floor((Math.random()*array.length))];
}

function clear(){
	for(var i = 0; i < markedbyUser.length; i++){
		var c = document.getElementById(markedbyUser[i]);
		var cc = c.getContext("2d");
		cc.clearRect(0, 0, 200, 200);
	}
	for(var i = 0; i < markedbyComputer.length; i++){
		var c = document.getElementById(markedbyComputer[i]);
		var cc = c.getContext("2d");
		cc.clearRect(0, 0, 200, 200);
	}
	start.style.visibility="visible";
	canvases = ["Canvaslf", "Canvasmf", "Canvasrf", "Canvasls", "Canvasms", "Canvasrs", "Canvaslt", "Canvasmt", "Canvasrt"];
	
	turn = "user";
}

function radiobuttonValue() {
	  var radiobuttons = document.getElementsByClassName("levelButton");
	  for(var i = 0; i < radiobuttons.length; i++){
	    if(radiobuttons[i].checked){
	    	return radiobuttons[i].value;
	    }
	  }
}

function lines(linevf, linevs, linehf, linehs){
	var linevfcanvas = document.getElementById(linevf);
	var linevscanvas = document.getElementById(linevs);
	var linehfcanvas = document.getElementById(linehf);
	var linehscanvas = document.getElementById(linehs);
	
	var linevfcontext = linevfcanvas.getContext("2d");
	var linevscontext = linevscanvas.getContext("2d");
	var linehfcontext = linehfcanvas.getContext("2d");
	var linehscontext = linehscanvas.getContext("2d");

	linevfcontext.fillStyle = "#F0F3F4";
	linevfcontext.fillRect(0, 0, linevfcanvas.width, linevfcanvas.height);

	linevscontext.fillStyle = "#F0F3F4";
	linevscontext.fillRect(0, 0, linevscanvas.width, linevscanvas.height);

	linehfcontext.fillStyle = "#F0F3F4";
	linehfcontext.fillRect(0, 0, linehfcanvas.width, linehfcanvas.height);

	linehscontext.fillStyle = "#F0F3F4";
	linehscontext.fillRect(0, 0, linehscanvas.width, linehscanvas.height);
}

function visibillityOptionBox(){
	Canvaschoose.style.visibility="visible";
	firstContainer.style.visibility="visible";
	secondContainer.style.visibility="visible";
	play.style.visibility="visible";
}

function visibillityCanvases(){
	if(radiobuttonValue() == "kerge" || radiobuttonValue() == "raske"){
		Canvaslf.style.visibility="visible";
		Canvasmf.style.visibility="visible";
		Canvasrf.style.visibility="visible";
		Canvasls.style.visibility="visible";
		Canvasms.style.visibility="visible";
		Canvasrs.style.visibility="visible";
		Canvaslt.style.visibility="visible";
		Canvasmt.style.visibility="visible";
		Canvasrt.style.visibility="visible";
	
	
		Canvaschoose.style.visibility="hidden";
		firstContainer.style.visibility="hidden";
		secondContainer.style.visibility="hidden";
		play.style.visibility="hidden";
		start.style.visibility="hidden";
		
		counter = 0;
		GameOver = false;
		markedbyUser = [];
		markedbyComputer = [];
	}
	else{
		alert("Vali raskusaste!");
	}
}

function hide(){
	Canvaschoose.style.visibility="hidden";
	firstContainer.style.visibility="hidden";
	secondContainer.style.visibility="hidden";
	Canvaslf.style.visibility="hidden";
	Canvasmf.style.visibility="hidden";
	Canvasrf.style.visibility="hidden";
	Canvasls.style.visibility="hidden";
	Canvasms.style.visibility="hidden";
	Canvasrs.style.visibility="hidden";
	Canvaslt.style.visibility="hidden";
	Canvasmt.style.visibility="hidden";
	Canvasrt.style.visibility="hidden";
	play.style.visibility="hidden";
}

function level(){
	var canvasc = document.getElementById("Canvaschoose");
	var contextcanvasc = canvasc.getContext("2d");
	contextcanvasc.font = "bold 40px Arial";
	contextcanvasc.fillStyle = "#F9F507";
	contextcanvasc.fillText("Vali raskusaste:", 45, 70);
}