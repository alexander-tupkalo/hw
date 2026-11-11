
import BaseView from './BaseView.js';

export default class FormView extends BaseView {
  constructor() {
    super();

    this.form = document.querySelector('#product-form');
    this.titleElement = document.querySelector('#form-title');

    this.titleInput = document.querySelector('#title');
    this.categoryInput = document.querySelector('#category');
    this.priceInput = document.querySelector('#price');
    this.quantityInput = document.querySelector('#quantity');
    this.descriptionInput = document.querySelector('#description');
  }

  // Изменяем заголовок формы.
  setTitle(title) {
    if (this.titleElement) {
      this.titleElement.textContent = title;
    }
  }

  // Заполняем форму данными товара.
  setFormData(product) {
    if (!product) {
      return;
    }

    this.titleInput.value = product.title;
    this.categoryInput.value = product.category;
    this.priceInput.value = product.price;
    this.quantityInput.value = product.quantity;
    this.descriptionInput.value = product.description || '';
  }

  // Получаем данные из формы.
  getFormData() {
    return {
      title: this.titleInput.value.trim(),
      category: this.categoryInput.value,
      price: Number(this.priceInput.value),
      quantity: Number(this.quantityInput.value),
      description: this.descriptionInput.value.trim(),
    };
  }
}
