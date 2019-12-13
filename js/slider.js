//Javascript slider

function foodSlider(){

var food_array =["american","carribean","chinese","german","greek","indian","italian","soul"];
var jsImage = document.getElementById('food-image');

jsImage.src= "img/cuisine_slideshow/" + food_array[i] +".jpg";


var sum = 0;
for (var i=0; i<food_array.length; i++){
	sum = sum + i;
}
 
}


foodSlider();