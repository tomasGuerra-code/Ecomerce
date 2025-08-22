const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));

const emptyCartContainer = document.querySelector("#empty-cart");
const productContainer = document.querySelector("#product-cart");
const actionCartContainer = document.querySelector("#action-cart");
const boughtCartContainer = document.querySelector("#bought-cart");

if (productsInCart) {
  emptyCartContainer.classList.add("disabled");
  productContainer.classList.remove("disabled");
  actionCartContainer.classList.remove("disabled");
  boughtCartContainer.classList.add("disabled");

  productsInCart.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-cart");
    div.innerHTML = `
                <img class="carrito-producto-imagen" src="${
                  producto.imagen
                }" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${
                  product.id
                }"><i class="bi bi-trash-fill"></i></button>
            `;
  });
} else {
}
