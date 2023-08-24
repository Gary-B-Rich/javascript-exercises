


// define function
const removeFromArray = function(arr, ...remove) {
    remove.forEach((remove) => {
        const index = arr.indexOf(remove);
        if (index > -1)
          arr.splice(index, 1);
      });
      return arr;
};

//removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
