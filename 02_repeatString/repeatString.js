const repeatString = function(string, num) {
    while(num < 0){
        return "ERROR";
    }
    let word = "";
    for (let i = 0; i < num; i++) {
        word += string;
    }
  return word;
    
};

// Do not edit below this line
module.exports = repeatString;
