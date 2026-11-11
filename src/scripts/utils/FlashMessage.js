
import { STORAGE_KEYS } from '../constants.js';

export default class FlashMessage {
  // Сохраняем уведомление.
  static set(text, type = 'success') {
    const message = {
      text,
      type,
    };

    localStorage.setItem(
      STORAGE_KEYS.FLASH,
      JSON.stringify(message),
    );
  }

  // Получаем уведомление и сразу удаляем его.
  static consume() {
    const storedMessage = localStorage.getItem(STORAGE_KEYS.FLASH);

    if (!storedMessage) {
      return null;
    }

    localStorage.removeItem(STORAGE_KEYS.FLASH);

    return JSON.parse(storedMessage);
  }
}
