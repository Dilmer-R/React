# React Render HTML

* El objetivo de react es representar HTML en una página web.

* Para motrar HTML en la página web se tiene que urilizar la siguiente función:

```ReactDOM.render()```

* Esta función resibe dos parámetros, código html y la seleccion de el elemento HTML.

    * Ejemplo 1:

        - Vamos a mostrar un h1 con el texto, "Hello World" y lo renderizamos en el id ```root```;

        ```js
        ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById('root'));
        ```
        - Primero, mostramos un ```h1``` con el texto ```Hola Mundo```.

        - Segundo, estamos seleccionando un elemento ```div``` que está dentro de ```public``` en el archivo ```index.html```.

        - Todo esto lo renderizamos en nuestro documento html.

    * Ejemplo 2:

        1. Vamos a crear una carpeta ```demo```.

        2. Vamos a crear dentro de ```demo```, un archivo ```index.html```.

        3. Vamos a crear una carpeta ```componente```.

        4. En la carpeta ``componente``, crearemos un archivo ```Hola.jsx```.

        5. En el archivo ```index.html```, importaremos los tres scripts de react, reactdom y Babel.

        6. En el archivo ```index.html```, crearemos un div con un id donde lleve cualquier nombre de id.

        7. En el archivo ```Hola.jsx```, crearemos un componente Hola.

        8. Renderizar dicho componente.