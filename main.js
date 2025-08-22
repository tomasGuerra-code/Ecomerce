const products = [
  {
    id: "campera-01",
    tittle: "Campera Cuero",
    img: "./img/img01.png",
    category: {
      name: "Camperas",
      id: "jackets",
    },
    price: 10000,
  },
  {
    id: "campera-02",
    tittle: "Campera Jean",
    img: "./img/img04.png",
    category: {
      name: "Camperas",
      id: "jackets",
    },
    price: 9500,
  },
  {
    id: "vestido-01",
    tittle: "Vestido Verde",
    img: "./img/img02.png",
    category: {
      name: "Vestidos",
      id: "dresses",
    },
    price: 15000,
  },
  {
    id: "sueter-01",
    tittle: "Sueter Verde",
    img: "./img/img03.png",
    category: {
      name: "Sueters",
      id: "sueters",
    },
    price: 10500,
  },
];

const productContainer = document.querySelector("#product-container");
const btnCategory = document.querySelectorAll(".btn");
const mainTittle = document.querySelector("#main-tittle");
let addBtn = document.querySelectorAll(".product-add");
const number = document.querySelector("#number");

function loadProducts(productsChoosed) {
  productContainer.innerHTML = "";

  productsChoosed.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
            <img class="product-img" src="${product.img}" alt="${product.tittle}" />
            <div class="product-details">
            <h3 class="product-tittle">${product.tittle}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="product-add" id="${product.id}>Agregar</button>
        `;

    productContainer.append(div);
  });

  refreshBtnAdd();
}

loadProducts(products);

btnCategory.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    btnCategory.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "all") {
      const productCategory = products.find(
        (product) => product.category.id === e.currentTarget.id
      );
      mainTittle.innerText = productCategory.category.name;
      const btnProducts = products.filter(
        (product) => product.category.id === e.currentTarget.id
      );
      loadProducts(btnProducts);
    } else {
      mainTittle.innerText = "Todos los productos";
      loadProducts(products);
    }
  });
});

function refreshBtnAdd() {
  addBtn = document.querySelector(".product-add");

  addBtn.forEach((boton) => {
    boton.addEventListener("click", addCart);
  });
}

const productsInCart = [];

function addCart(e) {
  const idBtn = e.currentTarget.id;
  const productAdded = products.find((product) => product.id === idBtn);

  if (productsInCart.some((product) => product.id === idBtn)) {
    const index = productsInCart.findIndex((product) => product.id === idBtn);
    productsInCart[index].quantity++;
  } else {
    productAdded.quantity = 1;
    productsInCart.push(productAdded);
  }
  refreshNumber();

  localStorage.setItem("product-in-cart", JSON.stringify(productsInCart));
}

function refreshNumber() {
  let newNumber = productsInCart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  number.innerHTML = newNumber;
}
