const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures"
  }
];

// Criação de Arrays vazios
const actionFiguresArray = [];
const paintingsArray = [];

// Função que separará os cards por tipo e adicionará cada um em seu respectivo array
function separateItems(lista) {
  for (let i = 0; i < lista.length; i++) {
    const produto = lista[i];

    if (produto.type === "Paintings") {
      paintingsArray.push(produto);
    } else if (produto.type === "Action Figures") {
      actionFiguresArray.push(produto);
    }
  }
}

separateItems(productsArray);

// Criação dos elementos
function renderProducts(lista) {
  const paintingsList = document.querySelector("#pictures-section .pictures-list");
  const actionFiguresList = document.querySelector("#action-figures-section .pictures-list");

  for (let i = 0; i < lista.length; i++) {
    const produto = lista[i];
    
    const li = document.createElement("li");
    li.className = "card-pictures";

    const img = document.createElement("img");
    img.src = produto.image;
    img.alt = produto.name;
    img.className = "img-card";

    const contentDiv = document.createElement("div");
    contentDiv.className = "card-content";

    const h3 = document.createElement("h3");
    h3.className = "nome-card";
    h3.innerText = produto.name;

    const p = document.createElement("p");
    p.className = "preco";
    p.innerText = produto.price;
    // Hierarquia
    contentDiv.append(h3, p);
    li.append(img, contentDiv);

    if (produto.type === "Paintings") {
      paintingsList.appendChild(li);
    } else if (produto.type === "Action Figures") {
      actionFiguresList.appendChild(li);
    }
  }
}

renderProducts(productsArray);
