# Operador de Propagación(Spread Operator)

* Este operador nos permite copiar todo o parte de un array u objeto, en otro array u objeto.
```js
const frutasOne = ['manzanas', 'bananas', 'uvas'];
const frutasTwo = ['mandarinas', 'peras', 'naranjas'];

const frutasConbinadas = [...frutasOne, ...frutasTwo];

// Salida = ['manzanas', 'bananas', 'uvas', 'mandarinas', 'peras', 'naranjas'];
```

* En combinación con destructuring

```js
const frutas = ['manzanas', 'bananas', 'uvas', 'mandarinas', 'peras', 'naranjas'];

const [one, two, ...rest] = frutas

// Salida
// manzanas
// bananas
// ['uvas', 'mandarinas', 'peras', 'naranjas'];
```

* Operador de propagación sobre objetos

```js
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle)

//Observe que las propiedades que no coincidían se combinaron, pero la propiedad que sí coincidió color, fue sobrescrita por el último objeto que se pasó, updateMyVehicle. El color resultante ahora es amarillo.

// Salida
/*
{
  brand: 'Ford',
  model: 'Mustang',
  color: 'yellow',
  type: 'car',
  year: 2021
}
*/
```

