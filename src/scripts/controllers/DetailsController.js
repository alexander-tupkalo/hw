
import BaseController from './BaseController.js';
import URLHelper from '../utils/URLHelper.js';
import FlashMessage from '../utils/FlashMessage.js';

export default class DetailsController extends BaseController {
  constructor(model, view) {
    super(model, view);
  }

  // Получаем ID товара из URL.
  getProductId() {
    const id = URLHelper.getSearchParam('id');

    if (!id || !/^\d+$/.test(id)) {
      return null;
    }

    return Number(id);
  }

  // Обрабатываем нажатие кнопки удаления.
  handleDeleteClick = (event) => {
    const deleteButton = event.target.closest('button[data-id]');

    if (!deleteButton) {
      return;
    }

    const id = Number(deleteButton.dataset.id);
    const product = this.model.getItemById(id);

    if (!product) {
      this.view.renderNotFound();
      return;
    }

    const confirmed = this.view.confirmDelete(product.title);

    if (!confirmed) {
      return;
    }

    const isRemoved = this.model.removeItemById(id);

    if (!isRemoved) {
      return;
    }

    FlashMessage.set('Товар успішно видалено!');

    window.location.href = 'index.html';
  };

  // Загружаем и отображаем товар.
  renderProduct() {
    const id = this.getProductId();

    if (!id) {
      this.view.renderNotFound();
      return;
    }

    const product = this.model.getItemById(id);

    if (!product) {
      this.view.renderNotFound();
      return;
    }

    this.view.renderProduct(product);
  }

  // Инициализация контроллера.
  init() {
    super.init();

    this.view.productContainer?.addEventListener(
      'click',
      this.handleDeleteClick,
    );

    this.renderProduct();
  }
}
