import BaseView from "./BaseView.js";

export default class ListView extends BaseView {
  constructor() {
    super();

    this.productsContainer = document.querySelector("#products-container");
    this.searchForm = document.querySelector("#search-form");
    this.searchInput = document.querySelector("#search-input");
  }

  // Отображаем список товаров.

  renderProducts(products) {
    if (!this.productsContainer) return;

    this.productsContainer.replaceChildren();

    if (products.length === 0) {
      const alert = document.createElement("div");
      alert.className = "alert alert-info";
      alert.textContent = "Товари не знайдено.";
      this.productsContainer.append(alert);
      return;
    }

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-responsive";

    const table = document.createElement("table");
    table.className =
      "table table-striped table-hover align-middle text-nowrap";

    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
      <th scope="col">Назва</th>
      <th scope="col">Категорія</th>
      <th scope="col">Ціна</th>
      <th scope="col">Кількість</th>
      <th scope="col">Оновлено</th>
      <th scope="col">Дії</th>
    </tr>
  `;

    const tbody = document.createElement("tbody");

    products.forEach((product) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = product.title;

      const categoryCell = document.createElement("td");
      categoryCell.textContent = product.category;

      const priceCell = document.createElement("td");
      priceCell.textContent = `${product.price} грн`;

      const quantityCell = document.createElement("td");
      quantityCell.textContent = product.quantity;

      const updatedAtCell = document.createElement("td");
      updatedAtCell.textContent = product.updatedAt;

      const actionsCell = document.createElement("td");

      const viewLink = document.createElement("a");
      viewLink.href = `view.html?id=${product.id}`;
      viewLink.className = "btn btn-sm btn-outline-primary me-1";
      viewLink.textContent = "Переглянути";

      const editLink = document.createElement("a");
      editLink.href = `edit.html?id=${product.id}`;
      editLink.className = "btn btn-sm btn-outline-secondary me-1";
      editLink.textContent = "Редагувати";

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "btn btn-sm btn-outline-danger";
      deleteButton.textContent = "Видалити";
      deleteButton.dataset.id = product.id;

      actionsCell.append(viewLink, editLink, deleteButton);

      row.append(
        titleCell,
        categoryCell,
        priceCell,
        quantityCell,
        updatedAtCell,
        actionsCell,
      );

      tbody.append(row);
    });

    table.append(thead, tbody);
    tableWrapper.append(table);
    this.productsContainer.append(tableWrapper);
  }

  // Устанавливаем значение поля поиска.
  setSearchValue(value) {
    if (this.searchInput) {
      this.searchInput.value = value;
    }
  }

  // Получаем поисковый запрос.
  getSearchValue() {
    return this.searchInput?.value.trim() || "";
  }
}
