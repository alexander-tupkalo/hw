
import BaseController from './BaseController.js';

export default class FormController extends BaseController {
  constructor(model, view) {
    super(model, view);
  }

  // Обрабатываем отправку формы.
  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.view.form.reportValidity()) {
      return;
    }

    const formData = this.view.getFormData();

    this.save(formData);
  };

  // Метод должен быть реализован в дочерних классах.
  save() {
    throw new Error('Метод save() має бути реалізований у дочірньому класі.');
  }

  // Подключаем обработчики событий.
  init() {
    super.init();

    this.view.form?.addEventListener('submit', this.handleSubmit);
  }
}
