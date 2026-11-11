
export default class URLHelper {
  // Получаем значение параметра из URL.
  static getSearchParam(param) {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(param);
  }

  // Добавляем или обновляем параметр URL.
  static setSearchParam(param, value) {
    const url = new URL(window.location.href);

    url.searchParams.set(param, value);

    window.history.pushState({}, '', url);
  }

  // Удаляем параметр из URL.
  static removeSearchParam(param) {
    const url = new URL(window.location.href);

    url.searchParams.delete(param);

    window.history.pushState({}, '', url);
  }
}
