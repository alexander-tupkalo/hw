
export default class Model {
  constructor(defaultData = [], dataKey) {
    this.dataKey = dataKey;

    // Проверяем, есть ли данные в localStorage.
    const storedData = localStorage.getItem(this.dataKey);

    // Начальные данные записываем только при первом запуске.
    if (storedData === null) {
      localStorage.setItem(this.dataKey, JSON.stringify(defaultData));
    }
  }

  // Получаем все данные.
  getData() {
    return JSON.parse(localStorage.getItem(this.dataKey)) || [];
  }

  // Получаем одну запись по ID.
  getItemById(id) {
    return this.getData().find((item) => item.id === Number(id)) || null;
  }

  // Создаём новую запись.
  createItem(data) {
    const items = this.getData();

    const nextId = items.length
      ? Math.max(...items.map((item) => item.id)) + 1
      : 1;

    const newItem = {
      ...data,
      id: nextId,
    };

    items.push(newItem);
    this.saveData(items);

    return newItem;
  }

  // Обновляем запись по ID.
  updateItemById(id, updatedData) {
    const items = this.getData();
    const itemIndex = items.findIndex((item) => item.id === Number(id));

    if (itemIndex === -1) {
      return null;
    }

    items[itemIndex] = {
      ...items[itemIndex],
      ...updatedData,
      id: Number(id),
    };

    this.saveData(items);

    return items[itemIndex];
  }

  // Удаляем запись по ID.
  removeItemById(id) {
    const items = this.getData();
    const filteredItems = items.filter((item) => item.id !== Number(id));

    if (filteredItems.length === items.length) {
      return false;
    }

    this.saveData(filteredItems);

    return true;
  }

  // Сохраняем массив в localStorage.
  saveData(data) {
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }
}
