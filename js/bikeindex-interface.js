import { BikeIndex } from './../js/bikeindex.js';

 let displayData = function(results){
  console.log("your in DisplayData"+results);
  results.bikes.forEach(function(bike){
    // var parsedResult = JSON.parse(result);
    for (let key in bike) {
      if(key === 'id'){
        console.log(bike[key]);
      }

    }
    return;
    // console.log(bike.id);
    // console.log("inside foreach ResultCheck"+parsedResult.bike.id);
    // $('#bike-list').append(`<li> ${parsedResult.bikes.id} <\li>`);
  });
};

$(document).ready(function() {

  $('#bike-search').submit(function(event) {
    event.preventDefault();

    let inputZipcode = $('#zipcode').val();
    let bikeIndex = new BikeIndex(inputZipcode);

    console.log("zip"+inputZipcode);
    bikeIndex.getBikes(displayData);
  });

});
