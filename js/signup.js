

function signUp(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	
	var pass = document.getElementById("pass").value;
	var con_pass = document.getElementById("con-pass").value;
	
	if (pass !== con_pass){
		alert("Passwords do not match!!!");
	}else{
		
		alert("Congrats " + fname + " " + lname + " ! Your LetsEat User Account has been created.");
	}
	
	
	
}