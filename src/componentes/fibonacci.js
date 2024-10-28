// La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores, empezando por 0 y 1 ([0, 1]). Si empezamos con 0 y 1, el siguiente número sería 0 + 1 = 1, el siguiente sería 1 + 1 = 2, el siguiente 1 + 2 = 3, y así sucesivamente.

// Escribir una función que reciba un parámetro limit, el cual será un entero e indicará el máximo número que puede llegar la serie de Fibonacci.
// Ejemplos: fibonacci(10) // [0, 1, 1, 2, 3, 5, 8]

function fibonacci(limit) {
	let arr = [0, 1];
	if (limit >= 1) {
		for (let i = 1; i++; limit) {
			arr.push(arr[i] + arr[i - 1]);
		}
		return arr;
	} else {
		return 'El límite debe ser un número natural.';
	}
}

console.log(fibonacci(2));
