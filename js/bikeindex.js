export class BikeIndex{

  constructor(zipcode){
    this.zipcode = zipcode;
  }

   filterBikeData (resultBikes){
    let bikeArray = [];
    resultBikes.bikes.forEach(function(bike){
        bikeArray.push({
          "title" : bike.title,
          "serial" : bike.serial,
          "year": bike.year,
          "stolen_location": bike.stolen_location,
          "date_stolen": bike.date_stolen
        });
    });
    return bikeArray;
  }

  getBikes(displayData){
    let filteredBikes;
    let results;
    let url = `https://bikeindex.org:443/api/v3/search?location=${this.zipcode}&distance=10&stolenness=proximity`;
    $.get(url)
      .then( (results) => {
      filteredBikes = this.filterBikeData(results);
      displayData(filteredBikes);
    })
      .fail( () => {
        console.log("something went wrong");
        filteredBikes = [];
      });
    }
}
