# Clases de React ES6

<h3>Clases</h3>

* ES6 Introdujo las clases.

* La clase es un tipo de funcion pero en lugar de usar la palabra clave ```function``` para iniciarla, se usa la palabra clave ```class``` y las propiedades se asignan dentro de un método ```constructor()```.

```js
class Persona {
    constructor(name) {
        this.nombre = nombre;
    }
}
```

* Pasamos a crear un objeto llamado "myname" basado en la clase Persona:

```js
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const myname = new Persona("Freed");
```

<h3>Métodos de Clases</h3>

* Creamos un método llamado "present"

* Nota: Nosotros podemos crear nuestros propios métodos.

```js
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    present() {
        return "My name is" + this.nombre;
    }
}

const myname = new Persona("Juan");
// Llamamos al método, haciendo referencia, primero al objeto llamado "myname", un punto, al método y seguido de paréntesis.
myname.present();
```

<h3>Herencia de Clase</h3>

* Para crear una herencia de una clase se utiliza la palabra clave ```extends```.
* Esta clase creada con una herencia de clase, hereda todos los métodos de otra clase:

```js
class Car {
    constructor(nombre) {
        this.brand = nombre;
    }
    present() {
        return "I have a" + this.brand;
    }
}

/****************************************************************************
Creamos una clase llamada Madel que heredará los métodos de la clase "Coche".
*****************************************************************************/
class Model extends Car {
    constructor(numbre, mod) {
        super(nombre);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

const mycar = new Model("Ford", "Mustang");
mycar.show();

```

* El método ```super()``` se refiere a la clase padre.

* Cuando llamamos al método ```super()``` en el método constructor, llamamos al método constructor del padre y obtenemos acceso a las propiedades y métodos del padre.