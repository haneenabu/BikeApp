import { BikeIndex } from './../js/bikeindex.js';

 let displayData = function(ourList){
  console.log("your in DisplayData"+ourList);
  ourList.forEach(function(bike){
    console.log(bike);
    let dateStolen = moment.unix(bike.date_stolen).format('MM-DD-YYYY');
   $('#bike-list').append(`<li> <span class="bikes"> ${bike.title} ${dateStolen} ${bike.serial} </span> </li>`);
    // for (let key in bike) {
    //   if(key === 'id'){
    //     console.log(bike[key]);
    //   }
    //}
  });
};

$(document).ready(function() {

  $('#bike-search').submit(function(event) {
    event.preventDefault();
     $("#bike-list li").remove();

    let inputZipcode = $('#zipcode').val();
    let bikeIndex = new BikeIndex(inputZipcode);

    console.log("zip"+inputZipcode);
    bikeIndex.getBikes(displayData);

    $(".bikes").last().click(function(){
      alert("you are good");
      $(".show-bike").show();
      $(".show-bike h4").text("test");

    });
  });

});
