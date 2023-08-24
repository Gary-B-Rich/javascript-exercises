const convertToCelsius = function(temp) {
  //convert temp to C
  let celcius = ((temp-32)*5/9);
  //round to one decimal and return result
  return Math.round(celcius*10)/10;
};

const convertToFahrenheit = function(temp) {
  //convert temp to F
  let fahrenheit = ((temp*9/5)+32);
  //round to one decimal and return result
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
