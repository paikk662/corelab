alert("Welcome! Please view console on your browser.");
  
  var fullName = "Katelyn E Paik";
  var age = 19;
  var nineteen = "nineteen"
  var admin = false
  var statement = fullName + age;

console.log(fullName + age + nineteen + admin + statement);

  console.log(10 + 9);
  console.log(38 / 2);
  console.log(29 - 10);
  console.log(6 * 3 + 1);
  console.log(19 * 0 + 20 - 1);

var country = ["Spain", "Iceland", "Greece", "Sweden", "Thailand"]
  console.log(country[0]);
  console.log(country.length);

var time = "The current time is ";
var d = new Date().getHours() + ":" + new Date().getMinutes() + ".";
  console.log(time + d);


var currentHour = new Date().getHours();
  console.log(currentHour);
    if (currentHour == 11) {
      var msg = "It is 11 now."
    } else {
      var msg = "It is not 11 yet."
    };
  console.log(msg);


if (fullName.length - 2 <= 9)  {
  var response = "My name is relatively short."
} else if (fullName.length - 2 >= 14) {
  var response = "My name is relatively long."
} else {
  var response = "My name is neither short nor long."
}

console.log(response);