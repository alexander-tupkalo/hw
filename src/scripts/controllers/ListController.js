
import BaseController from './BaseController.js';
import URLHelper from '../utils/URLHelper.js';

export default class ListController extends BaseController {
  constructor(model, view) {
    super(model, view);
  }

  // Обработчик отправки формы поиска.
  handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = this.view.getSearchValue();

    if (query) {
      URLHelper.setSearchParam('search', query);
    } else {
      URLHelper.removeSearchParam('search');
    }

    this.renderProducts();
  };

  // Обработчик удаления товара.
  handleDeleteClick = (event) => {
    const deleteButton = event.target.closest('button[data-id]');

    if (!deleteButton || !this.view.productsContainer.contains(deleteButton)) {
      return;
    }

    const id = Number(deleteButton.dataset.id);
    const product = this.model.getItemById(id);

    if (!product) {
      return;
    }

    const confirmed = this.view.confirmDelete(product.title);

    if (!confirmed) {
      return;
    }

    this.model.removeItemById(id);

    // Перерисовываем список с учётом активного поиска.
    this.renderProducts();
  };

  // Обработчик изменения URL через кнопки браузера.
  handlePopState = () => {
    this.renderProducts();
  };

  // Получаем товары и отображаем их.
  renderProducts() {
    const query = URLHelper.getSearchParam('search') || '';

    this.view.setSearchValue(query);

    const products = this.model.searchByTitle(query);

    this.view.renderProducts(products);
  }

  // Инициализация контроллера.
  init() {
    super.init();

    this.view.searchForm?.addEventListener(
      'submit',
      this.handleSearchSubmit,
    );

    this.view.productsContainer?.addEventListener(
      'click',
      this.handleDeleteClick,
    );

    window.addEventListener('popstate', this.handlePopState);

    this.renderProducts();
  }
}
