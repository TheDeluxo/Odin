const convertToCelsius = function(f) {
    c = ((f - 32) * 5) / 9;
    return Math.round(c * 10) / 10
  };

console.log(convertToCelsius(-32.1232))

