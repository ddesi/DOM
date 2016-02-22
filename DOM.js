$(document).ready(function(){
	$("#username").keypress(function(){
		console.log(event.keyCode)
		if((event.keyCode >= 48) && (event.keyCode <= 57)) {
			document.getElementById('text').innerHTML = "this is a number"
		} else if((event.keyCode >= 97) && (event.keyCode <= 122)) {
			document.getElementById('text').innerHTML = "this is a letter"
			//this is for uppercase
		} else if((event.keyCode >= 65) && (event.keyCode <= 90)) {
			document.getElementById('text').innerHTML = "this is a letter"
		}
	})

	$("form").submit(function(){

		if($("#username").val() == ""){
    	alert('username cannot be blank');
    	return false;
    } else if($("#password").val() != "12345"){
    	alert('wrong password');
    	return false;
    } else {
    	alert('good to go');
    }
})

})	