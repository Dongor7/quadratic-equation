function solveEquation(equation) {
    let variables = equation.split(' ');
    let a = variables[0];
    let b = variables[3] === '+' ? variables[4] : -1 * variables[4];
    let c = variables[7] === '+' ? variables[8] : -1 * variables[8];

    let d = b * b - 4 * a * c;

    let result = [];

    result.push( Math.round(( - b - Math.sqrt( d ) ) / ( 2 * a)) );
    result.push( Math.round(( - b + Math.sqrt( d ) ) / ( 2 * a)) );

    return result
}

console.log(solveEquation('30 * x^2 + 63436590 * x - 56700499682640'));

module.exports = solveEquation;
