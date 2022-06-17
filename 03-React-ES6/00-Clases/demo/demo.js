class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }
    // Nuevo método
    presentacion() {
        console.log("Hello, my name is " + this.nombre)
    }
}

// Creamos nuevo objeto: newPersona
const newPersona = new Persona("Dilmer")
// Llamamos al método
newPersona.presentacion()