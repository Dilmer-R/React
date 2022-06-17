# React ES6 Desestructuración(Destructuring)

- La desestructuración facilita extraer solo lo que se necesita.

<h3> Desestructuración de arrays a lo antigua</h3>

* En su forma antigua:

 ```js
 const vehículos = ["mustang", "f-150", "expedition"];

 const car = vehículos[0];
 const trunk = vehículos[1];
 const suv = vehículos[2];
 ```
<h3>Con Destructuring</h3>

```js
const vehículos = ["mustang", "f-150", "expedition"];
const [car, trunk, suv] = vehículos;

// Cabe recalcar que el orden de las variables es importante al utilizar destructuring.
```
* Vemos otro ejemplo de cuando una función devuelve una matriz(array).

```js
function calculator(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculator(12, 6)
```

* Destructuring de objetos 

<h3>Antes, sin destructuring</h3>

```js
const vehículoUno = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'Car',
    year: 2022,
    color: 'blue'
}

miVehículo(vehículoUno);

function miVehículo(vehículo) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
```
<h3>Con destructuring</h3>

```js
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
// Las propiedades de un objeto, no siempre se declaran en un orden en especifico.
```

```js
// Tambien podemos hacer destructuring de objetos anidados.
// Haciendo referencia al objeto anidado y luego usando dos puntos y llaves para destructurar nuevamente los elementos necesarios del objeto anidado.
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
```