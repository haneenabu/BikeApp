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

  getChartData(bikes){
    let numBikes = [];
    for (let i = 0 ; i < 12; i++) {
      numBikes[i] = 0;
    }
    bikes.forEach(function(bike) {
      let dateStolen = moment.unix(bike.date_stolen).format('MM');
      let date = parseInt(dateStolen) - 1;
      numBikes[date] += 1;
    });
    for (let i = 0 ; i < 12; i++) {
      //console.log("numBikes"+i+"  "+numBikes[i]);
    }
    return numBikes;
  }

  getBikes(displayData,displayChart){
    let filteredBikes;
    let chartData;
    let results;

    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=${this.zipcode}&distance=10&stolenness=proximity`;
    $.get(url)
      .then( (results) => {
      filteredBikes = this.filterBikeData(results);
      displayData(filteredBikes);
      chartData = this.getChartData(filteredBikes);
      displayChart(chartData);
    })
      .fail( () => {
        console.log("getBikes: something went wrong");
      });
    }
  }
// nested .get not working, can't access displayData
    // getCount(displayData,displayChart){
    //   let counts;
    //   let totalProximityPage;
    //   let loopOut;
    //   let filteredBikes;
    //   let chartData;
    //   let totalUrl = `https://bikeindex.org:443/api/v3/search/count?location=${this.zipcode}&distance=10&stolenness=proximity`;
    //
    //   $.get(totalUrl)
    //     .then( (counts, displayData) => {
    //       totalProximityPage = parseInt(counts.proximity)/100;
    //       console.log("TOTAL"+totalProximityPage.toFixed(0));
    //       for ( let i = 1; i < 3; i++){
    //         $.get(`https://bikeindex.org:443/api/v3/search?page=${i}&per_page=100&location=${this.zipcode}&distance=10&stolenness=proximity`)
    //           .then ( (loopOut, displayData) => {
    //           filteredBikes = this.filterBikeData(loopOut);
    //           this.displayData(filteredBikes);
    //           chartData = this.getChartData(filteredBikes);
    //           displayChart(chartData);
    //           console.log("APILoop"+loopOut);
    //         })
    //         .fail( () => {
    //           console.log("inLoop: something went wrong");
    //         });
    //       }
    //     })
    //     .fail( () => {
    //       console.log("getCount: something went wrong");
    //     });
    //   }
    //
//Try Javascript with Promises
  //getGraphData() {
  //----------get Total items
      //   let promise0 = new Promise((resolve, reject)=> {
      //   let request = new XMLHttpRequest();
      //   let totalUrl = `https://bikeindex.org:443/api/v3/search/count?location=${this.zipcode}&distance=10&stolenness=proximity`;
      //     request.onload = () => {
      //       if (this.status === 200) {
      //         resolve(request.response); //promise0 equals Total
      //       } else {
      //         reject(Error(request.statusText));
      //       }
      //     }
      //     request.open("GET", totalUrl, true);
      //     request.send();
      //     console.log("PROMISE0 total response"+request.response.proximity);
      //   });
      // }
        // totalProximityPage = parseInt(request.response.proximity)/100;
        // console.log("TOTAL"+totalProximityPage.toFixed(0));
        // for ( let i = 1; i < 3; i++){
        //   $.get(`https://bikeindex.org:443/api/v3/search?page=${i}&per_page=100&location=${this.zipcode}&distance=10&stolenness=proximity`)
        // }
    //------------iterate thru all pages------------
        // let promise = new Promise(function(resolve, reject) {
        // let request = new XMLHttpRequest();
        // let url =  ;
        // request.onload = function() {
        //   if (this.status === 200) {
        //     resolve(request.response);
        //   } else {
        //     reject(Error(request.statusText));
        //   }
        // }
        // request.open("GET", url, true);
        // request.send();
        // });
     //}
