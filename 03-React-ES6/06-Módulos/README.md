# Módulos

* Como sabemos, la modularisación, es muy buena porque nos permite dividir código en archivos más pequeños o subarchivos.

* Los Módulos se basan en las declaraciones  ```import``` y ```export```.

<h2>Exportar Módulos</h2>

* Vamos a crear un archivo llamado ```person.js``` donde contendra todo el código que vayamos a exportar

    <h3> Exportaciones con nombre </h3>

    - En línea individualmente:

    ```js
    export const nombre = "Benyamin";
    export const edad = 18;
    ```

    - Todo a la vez en la parte inferior

    ```js
    const nombre = "Benyamin";
    const edad = 18;

    export { nombre, edad };
    ```

    <h3>Exportaciones predeterminadas</h3>

    - Creamos un archivo ```mensaje.js```

    ```js
    const mensaje = () => {
        const nombre = "Benyamin";
        const edad = 18;
        console.log("Mi nombre es " +  nombre + " " + "y tengo " + edad + " " + "años")
    }

    export default mensaje;
    ```
<h2>Importar Módulos</h2>

* Las exportaciones con nombre deben desestructurarse dentro de llaves

    <h3>Importar desde exportaciones con nombre</h3>

    - Desde el archivo ```person.js```

    ```js
    import { nombre, edad } from "./person.js";
    ```

    <h3>Importar desde exportaciones predeterminadas</h3>

    ```js
    import mensaje from './mensaje.js'
    ```