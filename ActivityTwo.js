import moment from "moment";
//const moment = require("moment");

//EJERCICIO 1

/*function showDate() {
    let date = new Date();
    let output = String(date.getFullYear()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getDate();
    console.log(output);
    
}

showDate();*/

        //     W/MOMENT




const today= moment();
console.log(today.format('YYYY MMMM Do'));


    //EJERCICIO 2

/*function valideDate(date){
  let format = date.split("/");
  let day = format[0];
  let month = format[1];
  let year = format[2];
  var date = new Date(year,month,"");
  if((day-1) >(date.getDate()-1)){
      return false;
  }
   return true;
}

console.log(valideDate('29/04/1998'));
console.log(valideDate('29/02/1998'));

// W/MOMENT

function validateDateM(date){
    return moment(date, 'DD/MM/YYYY').isValid() ? console.log("Fecha valida") : console.log("Fecha invalida")
}
validateDateM("29/04/1998");*/


//EJERCICIO 3
/*
function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var age = calculateAge("29/04/1998");
alert( age );*/

//    W/MOMENT

/*let bday = "1998-04-29"

let bdayM = moment(bday, "YYYY-MM-DD");
let years = moment().diff(bdayM, 'years', false);
let days = moment().diff(bdayM.add(years, 'years'), 'days', false);
console.log(years);*/