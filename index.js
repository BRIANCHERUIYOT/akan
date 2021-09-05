
function akaname(){

    var maleName =["kwasi (sunday)", "kwadwo (Monday)","kwabena (Tuesday)","kwaku (Wednesday)","yaw (Thursday)","kofi (Friday)","kwame (Saturday)"];
    var femaleName=["Akosua (sunday)", "Adwao (Monday)","Abenaa (Tuesday)", "Akua (Wednesday)","Yaa (Thursday)","Afua (Friday)","Ama (Saturday)"];

    // e.preventDefault();
    var day = parseInt(document.getElementById("day").value)
    var month = parseInt(document.getElementById("month").value)
    var year = document.getElementById("year").value;
    var Male = document.getElementById("male").value;
    var Female = document.getElementById("female").value;
    var Rname = document.getElementById("aka-name").value;


    if (day== null || day == "", month == null || month== "", year == null || year == "") {
        alert("Please Fill All Required Field");
        return false;
      }

      if( day <= 0 || day>31)
      {
          alert("enter valid date"); 
          return false;
      }
       else if(month <=0 || month > 12)
       {
           alert("enter valid month");
           return false;
       }
    var yearA = year.slice(0,2);
    alert(yearA);

    // let sum =  day + 12;
    // alert(sum);

    

}

// function resetform(){
//     day="";
//     month="";
//     year="";
// };

// if((day < 1) || (day>31) || (isNaN(day))) {
    //     alert("Please select a valid date");
    // 
