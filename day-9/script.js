    const API_URL = "https://jsonplaceholder.typicode.com/todos";
    const todoList = document.getElementById("todo-list");
    async function fetchTodos() {
      const response = await fetch(API_URL + "?_limit=15");
      const todos = await response.json();
      displayTodos(todos);
    }

    function displayTodos(todos) {
      todoList.innerHTML = "";

      todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
          updateTodo(todo.id, checkbox.checked, li);
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(" " + todo.title));
        todoList.appendChild(li);
      });
    }
    async function updateTodo(id, completed, listItem) {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          completed: completed
        })
      });

      const updatedTodo = await response.json();

      if (updatedTodo.completed) {
        listItem.classList.add("completed");
      } else {
        listItem.classList.remove("completed");
      }
    }

    fetchTodos();