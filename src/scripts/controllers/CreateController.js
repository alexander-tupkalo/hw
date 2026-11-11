
import FormController from './FormController.js';
import FlashMessage from '../utils/FlashMessage.js';

export default class CreateController extends FormController {
  constructor(model, view) {
    super(model, view);
  }

  // Подготавливаем форму создания.
  init() {
    this.view.setTitle('Додати новий товар');

    super.init();
  }

  // Сохраняем новый товар.
  save(data) {
    const newProduct = this.model.createItem({
      ...data,
      updatedAt: new Date().toISOString().slice(0, 10),
    });

    FlashMessage.set('Товар успішно створено!');

    window.location.href = `view.html?id=${newProduct.id}`;
  }
}
