$(document).ready(function(){

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsvnET_fdQGITBJy6S8bkvJa7kclDt614",
    authDomain: "time-tracker-2c13f.firebaseapp.com",
    databaseURL: "https://time-tracker-2c13f.firebaseio.com",
    projectId: "time-tracker-2c13f",
    storageBucket: "time-tracker-2c13f.appspot.com",
    messagingSenderId: "315092182444"
  };

  firebase.initializeApp(config);

  //define global variables

    var database = firebase.database();

    var employeeName="Anne Admin";

    const todayDate = moment().format("MMM Do YYYY");

    var currentHoursTotal = 0;

    var sickSum = 0;
    var vacaySum = 0;

    var vacationAvailable = 15 * 8;

    var sickAvailable = 10 * 8;

    function findname(){
        employeeName = "";
    }

    function displayName(){
        $(".username").text(employeename);
    }

    function writeDate(){
        $("#today-date").text(todayDate);
    }

    function writeName(){
        $("#account-name").text(employeeName);
    }

    function sumHours(){
        var currentHoursTotal=40;
    }

    function writeHours(){
        $("#user-hour-sum").text(currentHoursTotal);
    }

    function writeVacation(){
        var vacationDaysAvailable = vacationAvailable / 8;
        $("#user-vacation-left").text(vacationDaysAvailable);    
    }

    function writeSick(){
        var sickDaysAvailable = sickAvailable / 8;
        $("#user-sick-left").text(sickDaysAvailable);
    }

    function writeTotalHours(){
        $("#user-hour-sum").text(hoursSum);
    }

    function writeSickSum(){
        $("#sick-sum").text(sickSum);
    }

    function writeVacaySum(){
        $("#vacation-sum").text(vacaySum);
    }

    //define pay period
    const payperiod = 14;
    const payperiodStart = moment('2018-12-28');

    //determine current payperiod
    const timeSince = moment().diff(payperiodStart, 'days');
    const paycheckNumber = Math.floor(timeSince/payperiod);
    const lastPayday = payperiodStart.add(paycheckNumber*payperiod, 'days');

    //logging only
    const payStartFormatted = payperiodStart.format('MMM Do YYYY');
    console.log("pay start: "+payStartFormatted)
    console.log("days since start: " + timeSince);
    console.log("paychecks written: " + paycheckNumber);
    console.log("last pay was "+moment(lastPayday).format('MMM Do YYYY'));



    function writePayDay(){        
        let payday = lastPayday.add(payperiod, 'days');
        let paydayDisplay = payday.format('MMMM Do');        
        $("#next-payday").text(paydayDisplay);
    };

    writePayDay();

    writeDate();
    writeName();
    writeHours();
    writeVacation();
    writeSick();
    writeSickSum();
    writeVacaySum();

    //write dates automatically to timesheet

    //apply dates as data to identify user input

    //get user input from timesheet
    $('#time-enter').on('click', function(){
        event.preventDefault();
        
        var h1 = $(".h1").val();
        var h2 = $(".h2").val();
        var h3 = $(".h3").val();
        var h4 = $(".h4").val();
        var h5 = $(".h5").val();
        var h6 = $(".h6").val();
        var h7 = $(".h7").val();
        var h8 = $(".h8").val();
        var h9 = $(".h9").val();
        var h10 = $(".h10").val();
        var h11 = $(".h11").val();
        var h12 = $(".h12").val();
        var h13 = $(".h13").val();
        var h14 = $(".h14").val();
        console.log(h14);

        var v1 = $(".v1").val();
        var v2 = $(".v2").val();
        var v3 = $(".v3").val();
        var v4 = $(".v4").val();
        var v5 = $(".v5").val();
        var v6 = $(".v6").val();
        var v7 = $(".v7").val();
        var v8 = $(".v8").val();
        var v9 = $(".v9").val();
        var v10 = $(".v10").val();
        var v11 = $(".v11").val();
        var v12 = $(".v12").val();
        var v13 = $(".v13").val();
        var v14 = $(".v14").val();

        var s1 = $(".s1").val();
        var s2 = $(".s2").val();
        var s3 = $(".s3").val();
        var s4 = $(".s4").val();
        var s5 = $(".s5").val();
        var s6 = $(".s6").val();
        var s7 = $(".s7").val();
        var s8 = $(".s8").val();
        var s9 = $(".s9").val();
        var s10 = $(".s10").val();
        var s11 = $(".s11").val();
        var s12 = $(".s12").val();
        var s13 = $(".s13").val();
        var s14 = $(".s14").val();

        //format user input

        var hoursSum = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10 + h11 + h12 + h13 + h14;
        console.log(hoursSum);
        sickSum = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14;
        vacaySum = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 + v12 + v13 + v14;

        var currentHoursTotal = hoursSum + sickSum + vacaySum;


        writeTotalHours();
        writeSickSum();
        writeVacaySum();
    });

    //send timesheet info to database

    //pull timesheet info from database

    //display timesheet info from database

    //track longitudinal items like sick time and vacation from multiple time sheets
    //pass sick/vacay into variables separate from timesheets

    //compute changes to sick/vacay based on dates

    //to implement --store older timesheets in hidden status. Display on select. 

    
});