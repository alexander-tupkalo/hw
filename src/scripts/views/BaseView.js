import FlashMessage from "../utils/FlashMessage.js";

export default class BaseView {
  constructor() {
    this.messageContainer = document.querySelector("#message-container");
  }

  // Показываем Flash-сообщение.
  renderFlash(message) {
    if (!message || !this.messageContainer) {
      return;
    }

    const alert = document.createElement("div");
    alert.className = `alert alert-${message.type} alert-dismissible fade show`;
    alert.setAttribute("role", "alert");
    alert.textContent = message.text;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("aria-label", "Закрити");

    closeButton.addEventListener("click", () => {
      alert.remove();
    });

    alert.append(closeButton);
    this.messageContainer.append(alert);
  }

  // Показываем сообщение, если товар не найден.
  renderNotFound() {
    const container = document.querySelector("#content-container");

    if (!container) {
      return;
    }

    const alert = document.createElement("div");

    alert.className = "alert alert-warning";
    alert.setAttribute("role", "alert");
    alert.textContent = "Товар не знайдено.";

    const backLink = document.createElement("a");

    backLink.href = "index.html";
    backLink.className = "alert-link d-block mt-2";
    backLink.textContent = "Повернутися до списку товарів";

    alert.append(backLink);

    container.replaceChildren(alert);
  }

  // Запрашиваем подтверждение удаления товара.
  confirmDelete(title) {
    return window.confirm(`Ви дійсно хочете видалити товар "${title}"?`);
  }
}
