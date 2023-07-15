const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1200,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1250,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1280,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 900,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 300,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

function listarPizzasImpares() {
  console.log('Listado de pizzas con ID impar:');
  pizzas.forEach(pizza => {
    if (pizza.id % 2 !== 0) {
      console.log(`Nombre: ${pizza.nombre} | ID: ${pizza.id}`);
    }
  });
}

function verificarPrecioMenor600() {
  const pizzasMenos600 = pizzas.filter(pizza => pizza.precio < 600);
  if (pizzasMenos600.length > 0) {
    console.log('Las pizzas que valen menos de $600 son:');
    pizzasMenos600.forEach(pizza => {
      console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`);
    });
  } else {
    console.log('No hay pizzas que valgan menos de $600.');
  }
}

function mostrarNombreYPrecio() {
  console.log('El nombre y precio de cada pizza son:');
  pizzas.forEach(pizza => {
    console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`);
  });
}

function mostrarIngredientes() {
  console.log('Los ingredientes de cada pizza son:');
  pizzas.forEach(pizza => {
    console.log(`Ingredientes de la pizza "${pizza.nombre}":`);
    pizza.ingredientes.forEach(ingrediente => {
      console.log(ingrediente);
    });
    console.log('------------------');
  });
}