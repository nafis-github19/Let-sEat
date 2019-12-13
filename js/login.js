// JavaScript Document

function logInFunc(){

var jsUserEmail = document.getElementById("useremail").value;
var jsUserPass = document.getElementById("userpass").value;


var userArray = [{user1: "Admin@gmail.com",
									pass1: "UserPass123" },
								 {user2: "Customer1@gmail.com",
									pass2: "UserPass123"}];

if (jsUserEmail === userArray[0]["user1"] && jsUserPass === userArray[0]["pass1"]){
	alert("Welcome ADMIN");
	location.href = "admin.html"

}else if (jsUserEmail === userArray[1]["user2"] && jsUserPass === userArray[1]["pass2"]) {
	alert("Welcome User");
	location.href = "user.html"

}
else{
	alert("Not a VALID User");
}



	}
