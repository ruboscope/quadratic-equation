module.exports = function solveEquation(equation) {
  // your implementation
  var equationArray = equation.split(' ');
  var quadrCoef = equationArray[0];
  var linearCoef = equationArray[3] + equationArray[4];
  var freeCoef = equationArray[equationArray.length - 2] + equationArray[equationArray.length-1];
  var sqrtDiscr = Math.sqrt(linearCoef * linearCoef - 4 * quadrCoef * freeCoef);
  var results = [Math.round(((-1) * linearCoef + sqrtDiscr) / (2 * quadrCoef)), Math.round(((-1) * linearCoef - sqrtDiscr) / (2 * quadrCoef))];
  return results.sort(function (a, b) {
    return a - b;
  }); 
}
