# React primeros pasos

<h3>React directamente en HTML</h3>

*   Incluimos tres scripts en nuestro documento HTML, los dos primeros nos permiten escribir código React en nuestros Javascripts, y el tercero, Babel, nos permite escribir sintaxis JSX y ES6 en navegadores más antiguos.

- Ver la ```demo-01```.

<h3>Configurando entorno React</h3>

* Requisitos:

-   Tener instalado npx y Node.js.

* Ejecutar el comando: ```npx create-react-app my-app-react```.

Ya tenemos creada nuestra aplicación con el nombre ```my-app-react```.

Ahora:

* Nos movemos al directorio ```my-app-react```.

```cd my-app-react```

* Corremos nuestra app con:

```npm start```

Esto nos llevará a una nueva ventana

<img src="https://www.w3schools.com/react/screenshot_myfirstreact.png">

<h3>Modificar la app react</h3>

* Para ello buscamos en nuestra app la carpeta ```src```, dentro de esta hay un archivo ```App.js```. Lo abrimos y eliminamos el ```header``` y todo el contenido que está dentro de este mismo.

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
* Hacemos lo indicado anteriormente.

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Wolrd</h1>
    </div>
  );
}

export default App;
```

* Al guardar y actualizar, nos quedará de la siguiente forma:

<img src="https://www.w3schools.com/react/screenshot_helloworld.png">

<h4 align="center">¡FÍN!</h4>