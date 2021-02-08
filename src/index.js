const { sort } = require("semver");

exports.min = function min (array) {
let result = 0;

if (array){
  const sortArray = array.sort(function(a, b){
    if(a < b ){
      return -1;
    }
    if (a > b){
      return 1;
    }
    if (a === b){
      return 0;
    }
  });

  result = sortArray[0];
}


  return result;
}
exports.max = function max (array) {
  let result = 0;

  if (array){
    const sortArray = array.sort(function(a, b){
      if(a < b ){
        return -1;
      }
      if (a > b){
        return 1;
      }
      if (a === b){
        return 0;
      }
    });
  
    result = sortArray[sortArray.length -1];
  }
  
  
    return result;
};

exports.avg = function avg (array) {
  return 0;
}
