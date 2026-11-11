
import FormController from './FormController.js';
import URLHelper from '../utils/URLHelper.js';
import FlashMessage from '../utils/FlashMessage.js';

export default class EditController extends FormController {
  constructor(model, view) {
    super(model, view);

    this.productId = null;
  }

  // Подготавливаем форму редактирования.
  init() {
    const id = URLHelper.getSearchParam('id');

    if (!id || !/^\d+$/.test(id)) {
      this.view.renderNotFound();
      return;
    }

    this.productId = Number(id);

    const product = this.model.getItemById(this.productId);

    if (!product) {
      this.view.renderNotFound();
      return;
    }

    this.view.setTitle('Редагувати товар');
    this.view.setFormData(product);

    super.init();
  }

  // Сохраняем изменения товара.
  save(data) {
    const updatedProduct = this.model.updateItemById(this.productId, {
      ...data,
      updatedAt: new Date().toISOString().slice(0, 10),
    });

    if (!updatedProduct) {
      this.view.renderNotFound();
      return;
    }

    FlashMessage.set('Товар успішно оновлено!');

    window.location.href = `view.html?id=${this.productId}`;
  }
}
