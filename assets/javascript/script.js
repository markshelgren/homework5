
$(document).ready(function () {

    //Setting up the date and appending to the HTML page - using moment
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);
  
    var now = parseInt(moment().format('HH'));
    console.log(now)
  
    // variables for button ids 
    var $hour9AM = $("#hour9AM");
    var $hour10AM = $("#hour10AM");
    var $hour11AM = $("#hour11AM");
    var $hour12AM = $("#hour12AM");
    var $hour1PM = $("#hour1PM");
    var $hour2PM = $("#hour2PM");
    var $hour3PM = $("#hour3PM");
    var $hour4PM = $("#hour4PM");
    var $hour5PM = $("#hour5PM");
  
  // Each hourly html cell is defined with a text area class that enables this function to be executed for all 10 hourly cells
    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        console.log("Name: " + name);
        console.log("Now: " + 
        now)
        if (name < now) {
            $(this).addClass("bg-gray");
        }
  
  
        if (name > now) {
            $(this).addClass("bg-green")
        }
  
        if (name === now) {
            $(this).addClass("bg-red")
        }
  
  
  
    })
  
    // Save to local storage 
    $("button").on("click", function () {
  
        //setting items in the local storage
        localStorage.setItem("9AM", ($hour9AM.val()))
        localStorage.setItem("10AM", ($hour10AM.val()))
        localStorage.setItem("11AM", ($hour11AM.val()))
        localStorage.setItem("12AM", ($hour12AM.val()))
        localStorage.setItem("13PM", ($hour1PM.val()))
        localStorage.setItem("14PM", ($hour2PM.val()))
        localStorage.setItem("15PM", ($hour3PM.val()))
        localStorage.setItem("16PM", ($hour4PM.val()))
        localStorage.setItem("17PM", ($hour5PM.val()))
  
    })
  
    //retreive the stored content from local storage 
    $("#hour9AM").append(localStorage.getItem("9AM"));
    $("#hour10AM").append(localStorage.getItem("10AM"));
    $("#hour11AM").append(localStorage.getItem("11AM"));
    $("#hour12AM").append(localStorage.getItem("12AM"));
    $("#hour1PM").append(localStorage.getItem("13PM"));
    $("#hour2PM").append(localStorage.getItem("14PM"));
    $("#hour3PM").append(localStorage.getItem("15PM"));
    $("#hour4PM").append(localStorage.getItem("16PM"));
    $("#hour5PM").append(localStorage.getItem("17PM"));
  
  })    