# Métodos de matriz React ES6

<h3>Métodos array</h3>

- Existen muchos métodos de array, pero el más usado en React es ```.map()```

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('root'));

```

* Resultado:
```
- manzana
- plátano
- naranja
```