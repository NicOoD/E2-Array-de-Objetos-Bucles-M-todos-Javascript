
const Pizzas = [
    { id: 1, nombre: 'Margarita', ingredientes: [ 'Queso', 'Tuco' ], precio: 200 },
    { id: 2, nombre: 'Fugazzeta', ingredientes: [ 'Queso', 'Tuco','Jamon'], precio: 300 },
    { id: 3, nombre: 'Choclo', ingredientes: [ 'Queso', 'Tuco', 'Choclo' ], precio: 600 },
    { id: 4, nombre: 'Peperonni', ingredientes: [ 'Queso', 'Tuco', 'Peperonni' ], precio: 270 },
    { id: 5, nombre: 'Panceta', ingredientes: [ 'Queso', 'Tuco', 'Panceta' ], precio: 800 },
    { id: 6, nombre: 'Anana', ingredientes: [ 'Queso', 'Tuco', 'Anana' ], precio: 100 }
]


const pizzasConIdImpar = Pizzas.filter( elemento => elemento.id % 2 != 0 );

pizzasConIdImpar.forEach( elemento => {
    console.log(`La pizza ${elemento.nombre} tiene id ${elemento.id} y es impar`)
})


const pizzasConPrecioMenorDe600 = Pizzas.filter( elemento => elemento.precio < 600)

pizzasConPrecioMenorDe600.forEach( elemento => {
    console.log(`La pizza ${elemento.nombre} vale ${elemento.precio} y es menor a $ 600`)
})


Pizzas.forEach( elemento => {
    console.log(`Esta pizza se llama ${elemento.nombre}`)
})

Pizzas.forEach( elemento => {
    console.log(`El precio de esta pizza es de $ ${elemento.precio}`)
})

Pizzas.forEach( elemento => {
    console.log(`El precio de la ${elemento.nombre} es de $ ${elemento.precio}`)
})