 //GET requisition - pure js
var startRequisition = n => { 	
    //Defines te path for the requisition  
    var targetString = `../serverstuff/byget.php?n=${n}`;  

	var ajax = new XMLHttpRequest();
 	// Sets the type of requisition and parameters such as path
	ajax.open("GET", targetString, true);
 	// Sends the requisition
	ajax.send();
 	// Creates an event to deal with the return 
	ajax.onreadystatechange = function() {
    // 4 && 200 -> Requisition done well
	if (ajax.readyState == 4 && ajax.status == 200) {
   		var data = ajax.responseText;
	    // result is defined at index 
		result.innerHTML = data; 
	}
}	
}  
