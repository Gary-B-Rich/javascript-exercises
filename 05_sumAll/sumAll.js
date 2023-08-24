//delcare sumAll()
const sumAll = function(para1, para2) {
    //Error for negative numbers
    if(para1 < 0 || para2 < 0) {
        return "ERROR";
    }
    //Check to make sure params are numbers 
    else if(Number.isInteger(para1) && Number.isInteger(para2)) {
        //declare variables
        let lower = 0;
        let higher = 0;
        let total = 0;
        //compare params and set variables for loop
        if(para1 > para2) {
            higher = para1;
            lower = para2;
        } else if(para1 < para2) {
            higher = para2;
            lower = para1;
        } else {
            //if params are equal return total of both
            total = (para1 + para2);
            return total;
        }
        //set loop
        for(let i = lower; i <= higher; i++) {
            total += i;
        }
        return total;
    } 
    //return error for non number params
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
