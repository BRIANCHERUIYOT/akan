
function akaname(){

    var maleName =["kwasi (sunday)", "kwadwo (Monday)","kwabena (Tuesday)","kwaku (Wednesday)","yaw (Thursday)","kofi (Friday)","kwame (Saturday)"];
    var femaleName=["Akosua (sunday)", "Adwao (Monday)","Abenaa (Tuesday)", "Akua (Wednesday)","Yaa (Thursday)","Afua (Friday)","Ama (Saturday)"];

    // e.preventDefault();
    var day = parseInt(document.getElementById("day").value)
    var month = parseInt(document.getElementById("month").value)
    var year = document.getElementById("year").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var rname = document.getElementById("aka-name").value;

    


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
    

    var sliceY= year.slice(2,4);
    var sliceC= year.slice(0,2);
    var c= parseInt(sliceC);
    var y= parseInt(sliceY);
    var d= day;
    var m=month;

    var dayOfTheWeek= Math.round(( ( (c/4) - 2 * c - 1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) %7);
    alert(dayOfTheWeek);
    
    if(male.checked==true) {
     
        for(var a=0;a < maleName.length;a++){
            if(a===dayOfTheWeek-1){
               rname.innerHTML="your Akan name is " + maleName[a]; 
            }
        }
      }
    
    
      else if(female.checked==true){
        for(var a=0;a< femaleName.length;a++){
            if(a===dayOfTheWeek-1){
               rname.innerHTML= "your Akan name is " + femaleName[a];
            }
        }
    
    }
}

