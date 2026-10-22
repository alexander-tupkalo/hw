function View() {
  const todoList = document.querySelector("[data-todo-list]");
  const todoForm = document.querySelector("[data-todo-form]");
  const todoModalElement = document.querySelector("#todo-modal");
  const todoModal = new bootstrap.Modal(todoModalElement);
  const modalTitle = document.querySelector("#todo-modal-title");

  const deleteModalElement = document.querySelector("#delete-modal");
  const deleteModal = new bootstrap.Modal(deleteModalElement);
  const deleteModalTitle = document.querySelector("#delete-modal-title");
  const confirmDeleteButton = document.querySelector("[data-confirm-delete]");

  function createTodoTemplate({
    id,
    title,
    description,
    completed,
    updatedAt,
  }) {
    const wrapper = document.createElement("div");
    wrapper.className = "list-group-item";
    wrapper.dataset.todoId = id;

    const statusClass = completed
      ? "text-decoration-line-through text-secondary"
      : "";

    const statusText = completed ? "Виконано" : "Активне";

    const template = `
            <div class="d-flex justify-content-between align-items-start gap-3">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        data-action="toggle"
                        data-id="${id}"
                        ${completed ? "checked" : ""}
                    >
                </div>

                <div class="flex-grow-1">
                    <h5 class="mb-1 ${statusClass}">${title}</h5>
                    <p class="mb-2">${description}</p>
                    <small class="text-secondary">
                        ${statusText} · Оновлено: ${updatedAt}
                    </small>
                </div>

                <div class="controls d-flex gap-1">
                    <button
                        class="btn btn-sm btn-warning"
                        data-action="edit"
                        data-id="${id}"
                    >
                        Edit
                    </button>

                    <button
                        class="btn btn-sm btn-danger"
                        data-action="delete"
                        data-id="${id}"
                    >
                        Delete
                    </button>
                </div>
            </div>
        `;

    wrapper.innerHTML = template;

    return wrapper;
  }

  function renderTodos(todos) {
    if (!todoList) {
      return;
    }

    todoList.innerHTML = "";

    if (todos.length === 0) {
      todoList.textContent = "Завдань поки немає";
      return;
    }

    todos.forEach((todo) => {
      todoList.append(createTodoTemplate(todo));
    });
  }

  function setActiveFilter(status) {
    const filterGroup = document.querySelector("[data-filter-group]");

    filterGroup.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === status);
    });
  }

  function openCreateModal() {
    todoForm.reset();
    todoForm.elements.id.value = "";
    modalTitle.textContent = "Нова задача";
    todoModal.show();
  }

  function renderEditTodoModalData(todo) {
    if (!todo) {
      return;
    }

    todoForm.elements.id.value = todo.id;
    todoForm.elements.title.value = todo.title;
    todoForm.elements.description.value = todo.description;
    modalTitle.textContent = "Редагувати задачу";
  }

  function openEditModal(todo) {
    if (!todo) {
      return;
    }

    renderEditTodoModalData(todo);
    todoModal.show();
  }

  function renderDeleteTodoModalData(todo) {
    if (!todo) {
      return;
    }

    deleteModalTitle.textContent = `Видалити задачу: ${todo.title}?`;
  }

  function openDeleteModal(todo) {
    if (!todo) {
      return;
    }

    renderDeleteTodoModalData(todo);
    deleteModal.show();
  }

  function closeTodoModal() {
    todoModal.hide();
  }

  function closeDeleteModal() {
    deleteModal.hide();
  }

  function getFormData() {
    return {
      id: todoForm.elements.id.value,
      title: todoForm.elements.title.value.trim(),
      description: todoForm.elements.description.value.trim(),
    };
  }

  function resetTodoForm() {
    todoForm.reset();
    todoForm.elements.id.value = "";
  }

  return {
    setActiveFilter,
    renderTodos,
    openCreateModal,
    openEditModal,
    renderEditTodoModalData,
    renderDeleteTodoModalData,
    openDeleteModal,
    closeTodoModal,
    closeDeleteModal,
    getFormData,
    resetTodoForm,
    todoModalElement,
    deleteModalElement,
    confirmDeleteButton,
  };
}

export default View;
