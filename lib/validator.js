var nonPositive = require('./../rules/nonPositive');
var nonDiv = require('./../rules/nonDivisible');

var validateRules = [
  nonPositive,
  nonDiv(3, 'error.three'),
  nonDiv(5, 'error.five')
]

module.exports = (n)=>{
  return validateRules.reduce((result, rule)=>{
    rule(n, result);
    return result;
  }, []);
};


// const validator = (num) =>{
//   let result=[];
//   if (num <= 0) {
//     result.push('error.nonpositive');
//   }

//   return result;
  
// }

// var result = [];

// const rule = (divisor,error)=>{
//   console.log(arguments)
//   console.log(divisor)
//   console.log(error)

//   return (n, result)=>{
    
//     console.log(result);
//     console.log(n)
      
//     if(n%divisor === 0) {
//       result.push(error);
//     }
//     return result;
//     console.log(result)
//   }
// }

// var rule3 = rule(3,'error.three');
// console.log(rule3(9, result));


// console.log(validator(0));

// module.exports = validator;