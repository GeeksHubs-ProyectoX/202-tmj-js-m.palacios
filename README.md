<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto mediante recursión para calcular la potencia de un número.

    Propiedades:
	Exponente 1, el resultado es la base.
	Exponente 0, el resultado es 1.
	Exponente 0 con base 0 es infinito.
	Exponente >=2 , el resultado es la Base por N veces el exponente.
	
    Valida:
	Exponentes positivos
	Exponentes negativos
	Base positiva
	Base negativa
    
    El resultado se debe de ser el cálculo de la operación.
    
    
    Se atiente al siguiente ejemplo:
   
    2^1 = 2
    3^1 = 3
    7^0 = 1
    8^0 = 1
    0^0 = Infinity
    2^3 = 2*2*2
    



    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    



    [Suite Tests]
    
    const potencia = require('./test01.js');

	test('Pow with base: 12, Exponent: 0', function () {
		var expected =1 ;
		var result = potencia(12,0);
		expect(result).toBe(expected);
	});

	test('Pow with base: 0, Exponent: 12', function () {
		var expected = 0;
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
	
	
	 PASS  ./suite.test.js
	  √ Pow with base: 12, Exponent: 0 (20ms)
	  √ Pow with base: 0, Exponent: 12
	  √ Pow with base: 0, Exponent: -1
	  √ Pow with base: -12, Exponent: 0
	  √ Pow with base: 10, Exponent: 0 (1ms)
	  √ Pow with base: 10, Exponent: -5
	  √ Pow with base: 1, Exponent: 120
	  √ Pow with base: -1, Exponent: 120
	  √ Pow with base: 12, Exponent: 12 (1ms)
	  √ Pow with base: -13, Exponent: 2
	  √ Pow with base: 12, Exponent: 5
	  √ Pow with base: -13, Exponent: 7 (1ms)
	  √ Pow with base: 5, Exponent: -3 (2ms)
	  √ Pow with base: -2, Exponent: -2
	  √ Pow with base: 2, Exponent: -5
	  √ Pow with base: -2, Exponent: -7

	Test Suites: 1 passed, 1 total
	Tests:       16 passed, 16 total
	Snapshots:   0 total
	Time:        3.955s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
