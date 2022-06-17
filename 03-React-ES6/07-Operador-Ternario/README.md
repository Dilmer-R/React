# El Operador Ternario

* Este operador no es nada mas que if/else pero simplificado.

<h2>Sintaxis:</h2>

```condition ? <expression if true> : <expression if false>```

Ejemplo:

- Usando if/else

```js
if (num <= 1) {
    return 1;
} else {
    return "Es mayor que 1";
}
```
- Usando el operador ternario

```js
num <= 1 ? return 1 : return "Es mayor que 1";
```