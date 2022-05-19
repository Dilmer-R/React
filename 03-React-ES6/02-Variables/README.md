# React ES6 variables

* Antes de ES6 solo había una forma de definir variables, con ```var```.

<h3>var</h3>

```js
var nombre = "Benyamin";
```

- Cuando se usa ```var``` fuera de una función, pertenece al alcance global.

- Cuando se usa ```var``` dentro de una función, pertenece a esa función.

- Cuando se usa ```var``` dentro de un bucle, la variable todavía está disponible fuera de ese bloque o bucle.

- ```var``` tiene un alcance de función, no de bloque.

<h3>let</h3>

```js
let pi = 3.1416;
```

- ```let``` Tiene un alcance de bloque.

- Ahora, si usamos ```let``` dentro del bloque, osea, dentro de un bucle for, la variable solo está disponible en ese bloque o bucle.

<h3>const</h3>

```js
const id = 939083864;
```

- ```const``` es una "variable" que una vez creada, su valor no puede cambiar.

- ```const``` tiene un alcance en bloque.