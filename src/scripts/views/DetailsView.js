import BaseView from "./BaseView.js";

export default class DetailsView extends BaseView {
  constructor() {
    super();

    this.productContainer = document.querySelector("#product-container");
  }

  // Отображаем подробную информацию о товаре.

  renderProduct(product) {
    if (!this.productContainer || !product) return;

    this.productContainer.replaceChildren();

    const card = document.createElement("div");
    card.className = "card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h2");
    title.className = "card-title mb-4";
    title.textContent = product.title;

    const category = document.createElement("p");
    category.innerHTML = "<strong>Категорія:</strong> ";
    category.append(document.createTextNode(product.category));

    const price = document.createElement("p");
    price.innerHTML = "<strong>Ціна:</strong> ";
    price.append(document.createTextNode(`${product.price} грн`));

    const quantity = document.createElement("p");
    quantity.innerHTML = "<strong>Кількість:</strong> ";
    quantity.append(document.createTextNode(String(product.quantity)));

    const description = document.createElement("p");
    description.innerHTML = "<strong>Опис:</strong> ";
    description.append(
      document.createTextNode(product.description || "Опис відсутній"),
    );

    const updatedAt = document.createElement("p");
    updatedAt.innerHTML = "<strong>Останнє оновлення:</strong> ";
    updatedAt.append(document.createTextNode(product.updatedAt));

    const actions = document.createElement("div");
    actions.className = "d-flex gap-2 mt-4";

    const editLink = document.createElement("a");
    editLink.href = `edit.html?id=${product.id}`;
    editLink.className = "btn btn-primary";
    editLink.textContent = "Редагувати";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Видалити";
    deleteButton.dataset.id = product.id;

    const backLink = document.createElement("a");
    backLink.href = "index.html";
    backLink.className = "btn btn-outline-secondary";
    backLink.textContent = "Назад до списку";

    actions.append(editLink, deleteButton, backLink);

    cardBody.append(
      title,
      category,
      price,
      quantity,
      description,
      updatedAt,
      actions,
    );

    card.append(cardBody);
    this.productContainer.append(card);
  }
}
