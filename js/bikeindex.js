export class BikeIndex{
  constructor(zipcode){
    this.zipcode = zipcode;
  }

  getBikes(displayData){
    console.log("getBikes"+this.zipcode);
    let results;
    // let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${this.zipcode}&distance=10&stolenness=stolen`;
    // let url = "https://bikeindex.org:443/api/v3/bikes/361593";
    let url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=97211&distance=10&stolenness=proximity";
    $.get(url)
      .then(function(results){
        // console.log("bike results found"+results.bikes.id);
      displayData(results);
    })
      .fail(function(){
        console.log("something went wrong");
      });
    }
}
