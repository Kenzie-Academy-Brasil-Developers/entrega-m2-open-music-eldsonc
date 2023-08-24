/* Desenvolva sua lógica aqui ... */
import { categories } from "./productsData.js"
import { products } from "./productsData.js"

function createCardElement(tagName, className = '') {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    return element;
}

function createCards(products) {
    const listProducts = document.querySelector("#product");
  
    products.forEach(product => {
      const card = createCardElement("li", "card");
      const img = createCardElement("img");
      const textCard = createCardElement("div", "card_text");
      const p = createCardElement("p");
      const h2 = createCardElement("h2", "font-2");
      const span = createCardElement("span", "card_span");
      const pPrice = createCardElement("p");
      const button = createCardElement("button");
  
      img.src = product.img;
      p.textContent = `${product.band} ${product.year}`;
      h2.textContent = product.title;
      pPrice.textContent = `R$ ${product.price}`;
      button.textContent = "Comprar";
  
      span.appendChild(pPrice);
      span.appendChild(button);
  
      textCard.appendChild(p);
      textCard.appendChild(h2);
      textCard.appendChild(span);
  
      card.appendChild(img);
      card.appendChild(textCard);
  
      listProducts.appendChild(card);
    });
};

function createCardCategories(categories) {
    const listGender = document.querySelector("#gender")

    categories.map((data) => {
        const gender = document.createElement("li")
        const button = document.createElement("button")
        button.classList.add("gender_button")

        button.append(document.createTextNode(data))
        gender.appendChild(button)
        listGender.appendChild(gender)
    })
};

function renderCards(products) {
    const listProducts = document.querySelector("#product")
    listProducts.innerHTML = "";

    createCards(products)
}

function setupEvent(categories, products) {
    const buttons = document.querySelectorAll('.gender_button');
    let filteredArray = products;
    let buttonIndex = 0;
    let inputValue = document.querySelector('#price_input').value;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            const buttonText = button.innerText;

            
            if (buttonText === 'Todos') {
                filteredArray = products.filter(product => product.price <= inputValue);
                button.classList.add('active');
                
            } else {
                const categoryIndex = categories.findIndex(category => category === buttonText);
                if (categoryIndex !== -1) {
                    filteredArray = products.filter(product =>
                        product.category === categoryIndex && product.price <= inputValue
                    );
                    buttonIndex = categoryIndex;
                    button.classList.add('active');
                }
            }

            renderCards(filteredArray);
        });
    });

    const inputElement = document.querySelector('#price_input');
    inputElement.addEventListener('input', () => {
        const inputText = document.querySelector("#price_value")
        inputValue = parseFloat(inputElement.value);

        if (buttons[buttonIndex].innerText === 'Todos') {
            filteredArray = products.filter(product => product.price <= inputValue);
        } else {
            const categoryIndex = categories.findIndex(category => category === buttons[buttonIndex].innerText);
            if (categoryIndex !== -1) {
                filteredArray = products.filter(product =>
                    product.category === categoryIndex && product.price <= inputValue
                );
            }
        }

        inputText.innerText = `Até R$ ${inputValue.toFixed(0)}`



        renderCards(filteredArray);
    });

}

createCardCategories(categories)
renderCards(products)
setupEvent(categories, products)