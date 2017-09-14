import { BikeIndex } from './../js/bikeindex.js';
import { Chart } from './../node_modules/chart.js';

$(document).ready(function() {

  let displayData = function(bikes){
   bikes.forEach(function(bike){
    //  console.log(bike);
     let dateStolen = moment.unix(bike.date_stolen).format('MM-DD-YYYY');
    $('ul#bike-list').append(`<li> <span class="bikes"> ${bike.title} ${dateStolen} ${bike.serial} </span> </li>`);
     // for (let key in bike) {
     //   if(key === 'id'){
     //     console.log(bike[key]);
     //   }
     //}
   });
 };

 //Chart.js
   let displayChart = function (chartData) {
     console.log("inside DisplayChart"+chartData);
     var ctx = document.getElementById("myChart").getContext('2d');
     var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"],
         datasets: [{
             label: 'Bikes Stolen By Month',
             data: [chartData[0], chartData[1], chartData[2], chartData[3], chartData[4], chartData[5], chartData[6], chartData[7], chartData[8], chartData[9], chartData[10], chartData[11], chartData[12]],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255,99,132,1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
   });

 };


  $('#bike-search').submit(function(event) {
    event.preventDefault();
    $("#bike-list li").remove();

    let inputZipcode = $('#zipcode').val();
    let bikeIndex = new BikeIndex(inputZipcode);

    bikeIndex.getBikes(displayData,displayChart);
    bikeIndex.getGraphData();


// We do not have access to the bikes array so cannot render the
//  individual bike details. if I put this click event handler inside
// the displayData function....it loops through all the li's on one click
    $("#bike-list").last().on('click', '.bikes',function(){
      // console.log(`Bike info ${bike.title}`);
      alert("you are good");
      $(".show-bike").show();
      $(".show-bike h4").text("test");
    });
  });
});
