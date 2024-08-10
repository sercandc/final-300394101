

// get the date from the input field
function getDate() {
    var selectedDate  = new Date(document.getElementById("birthday").value)
    
    return selectedDate;

}

// start the countdown
function start() {
    
    // // Set the date we're counting down to
    // var selectedDate = getDate().getTime();
        
    // // Get today's date and time

    // var todaysDate = new Date().getTime();
    
    // // Find the distance between now and the count down date

    // var _dicsecs = 100;
    // var _second = _dicsecs*10;
    // var _minute = _second * 60;
    // var _hour = _minute * 60;
    // var _day = _hour * 24;
    // var timer;

    // // Update the count down every 0.1 second
    
    // timer = setInterval(showRemaining, 100);

    // function showRemaining() {
        
    //     //just a variable to adjust the timezone related issue in PDT time, adds 7 hours to bring PDT to UTC
    //     let additionAmount = 1000 * 60 * 60*7;
    //     var distance = selectedDate - todaysDate+additionAmount;

    //     if (distance < 0) {

    //         alert('expired')
    //         clearInterval(timer)
            
    //     }
        
    //         // Time calculations for days, hours, minutes and seconds
    //         var days = Math.floor(distance / _day);
    //         var hours = Math.floor((distance % _day) / _hour);
    //         var minutes = Math.floor((distance % _hour) / _minute);
    //         var seconds = Math.floor((distance % _minute) / _second);
    //         var dicsecs = Math.floor((distance % _second) / _dicsecs);
    
    //         document.getElementById('demo').innerHTML = days+ '<sub>days</sub>' +hours+' <sub>hrs</sub>' +minutes+ '<sub>mins</sub>'+seconds + '<sub>scnds</sub>' +dicsecs+ '<sub>decscnd</sub> ';
        
    // }

    var countDownDate = getDate().getTime();
    if(countDownDate<new Date().getTime())
    {
        alert("date selected is old")
        return
    }

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var dicsecs = Math.floor((distance % (100)));
  

    document.getElementById('demo').innerHTML = days+ '<sub>days</sub>' +hours+' <sub>hrs</sub>' +minutes+ '<sub>mins</sub>'+seconds + '<sub>scnds</sub>' +dicsecs+ '<sub>decscnd</sub> ';


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    alert('expired')
  }
}, 100);
}

