const sumar = require('./app');

if (sumar(2, 3) !== 5) {
  throw new Error("La prueba falló: 2 + 3 debería ser 5");
} else {
  console.log("¡Prueba superada correctamente!");
}