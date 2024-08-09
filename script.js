

// get the date from the input field
function getDate() {
    var selectedDate  = new Date(document.getElementById("birthday").value)
    if(selectedDate<new Date())
    {
        alert("date is expired");
    }
    return selectedDate;

}

// start the countdown
function start() {
    
    // Set the date we're counting down to
    var selectedDate = getDate();
    
    // Update the count down every 0.1 second

    // Get today's date and time

    var todaysDate = new Date();
    
    // Find the distance between now and the count down date

    var _dicsecs = 100;
    var _second = _dicsecs*10;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        
        //just a variable to adjust the timezone related issue in PDT time, adds 7 hours to bring PDT to UTC
        let additionAmount = 1000 * 60 * 60*7;
        var distance = selectedDate - todaysDate+additionAmount;

        if (distance < 0) {

            alert('expired')
            
            return;
        }
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        var dicsecs = Math.floor((distance % _second) / _dicsecs);


        document.getElementById('demo').innerHTML = days+ '<sub>days</sub>' +hours+' <sub>hrs</sub>' +minutes+ '<sub>mins</sub>'+seconds + '<sub>scnds</sub>' +dicsecs+ '<sub>decscnd</sub> ';
        
    }
    timer = setInterval(showRemaining, 100);
}

