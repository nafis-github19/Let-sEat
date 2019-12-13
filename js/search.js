

function searchFunc(){



var jsSearchArray  = ["indian", "chinese", "american", "greek", "mexican", "caribbean", "french","italian"];

var jsSearch_word = document.getElementById("search-word").value;

for (var i=0; i< jsSearchArray.length; i++){

    if (jsSearch_word === jsSearchArray[i]){
      // alert(jsSearch_word + " is found");

      document.getElementById("image1").src = "restaurant_rating/" + jsSearch_word + "1.jpg";
      document.getElementById("image2").src = "restaurant_rating/" + jsSearch_word + "2.jpg";
      document.getElementById("image3").src = "restaurant_rating/" + jsSearch_word + "3.jpg";
      document.getElementById("image4").src = "restaurant_rating/" + jsSearch_word + "4.jpg";
      document.getElementById("image5").src = "restaurant_rating/" + jsSearch_word + "5.jpg";

    }
  }

      // alert("Word is not found");

}
