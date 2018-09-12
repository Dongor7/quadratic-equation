function solveEquation(equation) {
    let variables = equation.split(' ');
    let a = variables[0];
    let b = variables[3] === '+' ? variables[4] : -1 * variables[4];
    let c = variables[7] === '+' ? variables[8] : -1 * variables[8];

    let d = b * b - 4 * a * c;

    let result = [];

    let x1 = Math.round(( - b - Math.sqrt( d ) ) / ( 2 * a));
    let x2 = Math.round(( - b + Math.sqrt( d ) ) / ( 2 * a));

    if (a < 0) {
        result.push(x2);
        result.push(x1);
    } else {
        result.push(x1);
        result.push(x2);
    }

    return result
}

module.exports = solveEquation;
