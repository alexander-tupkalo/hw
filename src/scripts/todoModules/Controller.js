function Controller(model, view) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      
      const addButton = document.querySelector('[data-action="add"]');
      const todoList = document.querySelector("[data-todo-list]");
      const todoForm = document.querySelector("[data-todo-form]");
      const searchForm = document.querySelector("[data-search-form]");
      const searchInput = document.querySelector("[data-search-input]");
      const filterGroup = document.querySelector("[data-filter-group]");
      const confirmDeleteButton = document.querySelector(
        "[data-confirm-delete]",
      );

      let selectedTodoId = null;

      const initialUrl = new URL(location.href);
      const savedFilter = initialUrl.searchParams.get("filter");

      let currentFilter = ["all", "active", "completed"].includes(savedFilter)
        ? savedFilter
        : "all";

      function updateTodoList() {
        const query = searchInput.value.trim();
        const searchedTodos = model.searchTodos(query);
        const filteredTodos = model.filterTodos(currentFilter);

        const visibleTodos = filteredTodos.filter((todo) => {
          return searchedTodos.some((searchedTodo) => {
            return searchedTodo.id === todo.id;
          });
        });

        view.setActiveFilter(currentFilter);
        view.renderTodos(visibleTodos);
      }

      function updateUrlFilter() {
        const url = new URL(location.href);

        if (currentFilter === "all") {
          url.searchParams.delete("filter");
        } else {
          url.searchParams.set("filter", currentFilter);
        }

        history.pushState({}, "", url);
      }

      function updateUrlModal(action, todoId = null) {
        const url = new URL(location.href);

        if (action) {
          url.searchParams.set("action", action);
        } else {
          url.searchParams.delete("action");
        }

        if (todoId !== null) {
          url.searchParams.set("todoId", todoId);
        } else {
          url.searchParams.delete("todoId");
        }

        history.pushState({}, "", url);
      }

      function clearUrlModal() {
        const url = new URL(location.href);

        url.searchParams.delete("action");
        url.searchParams.delete("todoId");

        history.replaceState({}, "", url);
      }

      function openCreateModal() {
        updateUrlModal("create");
        view.openCreateModal();
      }

      function openEditModal(todo) {
        if (!todo) {
          return;
        }

        updateUrlModal("edit", todo.id);
        view.openEditModal(todo);
      }

      function openDeleteModal(todo) {
        if (!todo) {
          return;
        }

        selectedTodoId = todo.id;

        updateUrlModal("delete", todo.id);
        view.openDeleteModal(todo);
      }

      function restoreModalFromUrl() {
        const url = new URL(location.href);
        const action = url.searchParams.get("action");
        const todoId = url.searchParams.get("todoId");

        if (action === "create" && !todoId) {
          view.openCreateModal();
          return;
        }

        if (action === "edit" || action === "delete") {
          const id = Number(todoId);

          if (todoId && Number.isSafeInteger(id) && id > 0) {
            const todo = model.getTodoById(id);

            if (todo) {
              if (action === "edit") {
                view.openEditModal(todo);
              } else {
                openDeleteModal(todo);
              }

              return;
            }
          }
        }

        if (action || todoId) {
          clearUrlModal();
        }
      }

      model.getData();
      updateTodoList();

      addButton.addEventListener("click", () => {
        openCreateModal();
      });

      todoList.addEventListener("click", (event) => {
        const todoElement = event.target.closest("[data-todo-id]");

        if (!todoElement || !todoList.contains(todoElement)) {
          return;
        }

        const editButton = event.target.closest('[data-action="edit"]');
        const deleteButton = event.target.closest('[data-action="delete"]');

        const id = Number(todoElement.dataset.todoId);
        const todo = model.getTodoById(id);

        if (editButton) {
          openEditModal(todo);
        }

        if (deleteButton) {
          openDeleteModal(todo);
        }
      });

      todoList.addEventListener("change", (event) => {
        const checkbox = event.target.closest('[data-action="toggle"]');

        if (!checkbox) {
          return;
        }

        const todoElement = checkbox.closest("[data-todo-id]");

        if (!todoElement || !todoList.contains(todoElement)) {
          return;
        }

        const id = Number(todoElement.dataset.todoId);

        model.toggleTodoById(id);
        updateTodoList();
      });

      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
      });

      searchInput.addEventListener("input", () => {
        updateTodoList();
      });

      filterGroup.addEventListener("click", (event) => {
        const filterButton = event.target.closest("[data-filter]");

        if (!filterButton) {
          return;
        }

        currentFilter = filterButton.dataset.filter;

        updateUrlFilter();
        updateTodoList();
      });

      confirmDeleteButton.addEventListener("click", () => {
        if (selectedTodoId === null) {
          return;
        }

        model.removeTodoById(selectedTodoId);

        view.closeDeleteModal();
        selectedTodoId = null;

        updateTodoList();
      });

      todoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = view.getFormData();

        if (!formData.title) {
          return;
        }

        if (formData.id) {
          model.updateTodoById(
            Number(formData.id),
            formData.title,
            formData.description,
          );
        } else {
          model.addTodo(formData.title, formData.description);
        }

        view.resetTodoForm();
        view.closeTodoModal();

        updateTodoList();
      });

      view.todoModalElement.addEventListener("hidden.bs.modal", () => {
        clearUrlModal();
      });

      view.deleteModalElement.addEventListener("hidden.bs.modal", () => {
        selectedTodoId = null;
        clearUrlModal();
      });

      restoreModalFromUrl();
    },
    { once: true },
  );
}

export default Controller;
