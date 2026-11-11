import FlashMessage from "../utils/FlashMessage.js";

export default class BaseController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  // Предоставляем дочерним классам доступ к модели.
  get model() {
    return this.#model;
  }

  // Предоставляем дочерним классам доступ к представлению.
  get view() {
    return this.#view;
  }

  // Общая инициализация контроллера.
  init() {
    const message = FlashMessage.consume();
    this.view.renderFlash(message);
  }
}
