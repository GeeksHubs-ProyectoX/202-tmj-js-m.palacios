const potencia = require('./test01.js');

test('Pow with base: 12, Exponent: 0', function () {
    var expected =1 ;
    var result = potencia(12,0);
    expect(result).toBe(expected);
});

test('Pow with base: 0, Exponent: 12', function () {
    var expected = Infinity;
    var result = potencia(0,12);
    expect(result).toBe(expected);
});

test('Pow with base: 0, Exponent: -1', function () {
    var expected = Infinity;
    var result = potencia(0,-1);
    expect(result).toBe(expected);
});

test('Pow with base: -12, Exponent: 0', function () {
    var expected = 1;
    var result = potencia(-12,0);
    expect(result).toBe(expected);
});

test('Pow with base: 10, Exponent: 0', function () {
    var expected = 1 ;
    var result = potencia(10,0);
    expect(result).toBe(expected);
});

test('Pow with base: 10, Exponent: -5', function () {
    var expected = 0.00001;
    var result = potencia(10,-5);
    expect(result).toBe(expected);
});

test('Pow with base: 1, Exponent: 120', function () {
    var expected = 1;
    var result = potencia(1, 120);
    expect(result).toBe(expected);
});

test('Pow with base: -1, Exponent: 120', function () {
    var expected = 1;
    var result = potencia(-1,120);
    expect(result).toBe(expected);
});

test('Pow with base: 12, Exponent: 12', function () {
    var expected = 8916100448256 ;
    var result = potencia(12,12);
    expect(result).toBe(expected);
});

test('Pow with base: -13, Exponent: 2', function () {
    var expected = 169;
    var result = potencia(-13,2);
    expect(result).toBe(expected);
});

test('Pow with base: 12, Exponent: 5', function () {
    var expected = 248832;
    var result = potencia(12,5);
    expect(result).toBe(expected);
});

test('Pow with base: -13, Exponent: 7', function () {
    var expected = -62748517;
    var result = potencia(-13,7);
    expect(result).toBe(expected);
});

test('Pow with base: 5, Exponent: -3', function () {
    var expected =  0.008 ;
    var result = potencia(5,-3);
    expect(result).toBe(expected);
});

test('Pow with base: -2, Exponent: -2', function () {
    var expected = 0.25;
    var result = potencia(-2,-2);
    expect(result).toBe(expected);
});

test('Pow with base: 2, Exponent: -5', function () {
    var expected = 0.03125;
    var result = potencia(2, -5);
    expect(result).toBe(expected);
});

test('Pow with base: -2, Exponent: -7', function () {
    var expected = -0.0078125;
    var result = potencia(-2,-7);
    expect(result).toBe(expected);
});
