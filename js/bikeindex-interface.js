import { BikeIndex } from './../js/bikeindex.js';

$(document).ready(function() {

  let displayData = function(bikes){
   bikes.forEach(function(bike){
     console.log(bike);
     let dateStolen = moment.unix(bike.date_stolen).format('MM-DD-YYYY');
    $('ul#bike-list').append(`<li> <span class="bikes"> ${bike.title} ${dateStolen} ${bike.serial} </span> </li>`);
     // for (let key in bike) {
     //   if(key === 'id'){
     //     console.log(bike[key]);
     //   }
     //}
   });
 };

  $('#bike-search').submit(function(event) {
    event.preventDefault();
    $("#bike-list li").remove();

    let inputZipcode = $('#zipcode').val();
    let bikeIndex = new BikeIndex(inputZipcode);

    bikeIndex.getBikes(displayData);

// We do not have access to the bikes array so cannot render the
//  individual bike details. if I put this click event handler inside
// the displayData function....it loops through all the li's on one click 
    $("#bike-list").last().on('click', '.bikes',function(){
      console.log(`Bike info ${bike.title}`);
      alert("you are good");
      $(".show-bike").show();
      $(".show-bike h4").text("test");
    });
  });
});
