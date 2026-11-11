
import Model from './Model.js';
import { STORAGE_KEYS } from '../constants.js';

export default class ProductModel extends Model {
  constructor(defaultData = []) {
    super(defaultData, STORAGE_KEYS.PRODUCTS);

    // Инициализируем счётчик ID при первом запуске.
    const lastId = localStorage.getItem(STORAGE_KEYS.PRODUCTS_LAST_ID);

    if (lastId === null) {
      const items = this.getData();

      const maxId = items.length
        ? Math.max(...items.map((item) => item.id))
        : 0;

      localStorage.setItem(
        STORAGE_KEYS.PRODUCTS_LAST_ID,
        String(maxId),
      );
    }
  }

  // Создаём товар с уникальным ID.
  createItem(data) {
    const lastId = Number(
      localStorage.getItem(STORAGE_KEYS.PRODUCTS_LAST_ID),
    );

    const newItem = {
      ...data,
      id: lastId + 1,
    };

    const items = this.getData();
    items.push(newItem);

    this.saveData(items);

    // Запоминаем последний использованный ID.
    localStorage.setItem(
      STORAGE_KEYS.PRODUCTS_LAST_ID,
      String(newItem.id),
    );

    return newItem;
  }

  // Ищем товары по названию без учёта регистра.
  searchByTitle(query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return this.getData();
    }

    return this.getData().filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery),
    );
  }
}
