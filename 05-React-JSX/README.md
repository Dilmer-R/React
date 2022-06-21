# JSX

<h2>¿Qué es JSX?</h2>

- JSX significa Javascript XML.
- JSX nos permite escribir sintaxis HTML en React.
- JSX facilita escribir y agregar HTML React.

<h2>Codificación JSX</h2>

- Nos permite escribir elementos HTML en javascript y colocarlos en el DOM sin ningún método ```createElement()``` u otro método.

- JSX convierte etiquetas HTML en elementos de React

```jsx
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myElement);
```
- Como puede ver en el primer ejemplo, JSX nos permite escribir HTML directamente dentro del código JavaScript.

- JSX es una extensión del lenguaje JavaScript basado en ES6 y se traduce a JavaScript normal en tiempo de ejecución.

<h2>Expresiones en JSX</h2>

- Con JSX puedes escribir expresiones dentro de llaves ```{ }```.

- La expresión puede ser una variable o propiedad de React o cualquier otra expresión de Javascript válida. JSX ejecutará la expresión y devolverá el resultado.

- Ejemplo:
    
    - Ejecutamos la expresión 5 + 5

    ```jsx
    const myElement = <h1>React es {5 + 5} veces mejor con JSX</h1>;
    ```

<h2>Bloques grandes de HTML</h2>

- Para escribir HTML de varias líneas, este debe ir entre paréntesis.

- Ejemplo:

    - Crear una lista no ordenada con tres elementos.

    ```jsx
    const myElement = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );
    ```
<h2>Insertar un bloque grande</h2>

- El código HTML debe estar envuelto en un elemento de nivel superior, como por ejemplo un elemento ```div```.

- Ejemplo:

    - Dos párrafos dentro de un div.

    ```jsx
    const myElement = (
        <div>
            <p>Párrafo Uno.</p>
            <p>Párrafo Dos.</p>
        </div>
    )
    ```

<h2>Clase de Atributo: className</h2>

- En JSX no se puede utilizar el atributo ```class``` porque es una palabra reservada de JS.

- En su lugar tenemos el atributo ```className```.

- Ejemplo:

    ```jsx
    const myElement = <h1 className="myclass">Hello World</h1>
    ```

<h2>Condicionales en JSX</h2>

- Las declaraciones ```if/else``` no pueden hacerse dentro de el código JXS.

