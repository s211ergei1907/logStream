const operations = {
    sum: '+',
    minus: '-',
    multiply: '*',
    division: '/'
}



function resultOperation({arg1: a, arg2: b, operation}) {
    switch (operation) {
        case operations.sum:
            return  sum(a, b);
        case operations.minus:
            return minus(a, b);
        case operations.multiply:
            return multiply(a, b)
        case operations.division:
            return division(a, b);
    }
}