
/*

var starRating = ( function(){

		var starRating = function(args){
			var self = this;
			self.container = jQuery("#" + args.containerId);
			self.containerId = args.containerId;
			self.starWidth = args.starWidth;
			self.starHeight = args.starHeight;
			self.ratingPercent = args.ratingPercent;

			self.containerWidth = args.starWidth * 5;
			self.newRating = 0;
			self.canRate  = args.canRate;


			self.draw();
			};


			starRating.prototype.draw = function(){
				var self = this;
				var pointerStyle = ( self.canRate ? "cursor:pointer" : "");
				var starImg = '<img src="img/star_rating/star.png" style="width: ' + self.starWidth + 'px" />' ;
				var starImg = '<img src="img/star_rating/star.png" style="width: ' + self.starWidth + 'px" />' ;
				var html = '<div style = "width: ' + self.containerWidth + 'px; height: ' + self.starHeight + 'px; position:relative;' + pointerStyle + '">';


			};


		
		return starRating;

})();

$( function(){
	var rating = new starRating({
		containerId: "star_rating",
		starWidth: 50,
		starHeight: 50,
		ratingPercent: "20%",
		canRate: true,
		onRate: function(){
			console.log(rating);
			alert("You rated " + rating.newRating + " stars");
		}
	});
});



*/



// CUSTOMER REVIEW POST 

function postReview(){
	var restaurantName = document.getElementById("restaurant-name").value;
	var customerName = document.getElementById("customer-name").value; 
	
	alert("Thanks " + customerName + "! Your review of " + restaurantName + " has been received.");
	
}




















