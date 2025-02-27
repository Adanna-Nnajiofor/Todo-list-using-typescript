// Interface for a Todo item
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

// Class to manage the Todo list
class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  // Add a new todo item
  addTodo(task: string, dueDate: Date): void {
    const todo: TodoItem = {
      id: this.nextId++,
      task,
      completed: false,
      dueDate,
    };

    this.todos.push(todo);
    console.log(`Task added: "${task}" (Due: ${dueDate.toDateString()})`);
  }

  // Mark a task as completed
  completeTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = true;
      console.log(`Completed: "${todo.task}"`);
    } else {
      console.log(`Todo with id ${id} not found.`);
    }
  }

  // Remove a task from the list
  removeTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const removed = this.todos.splice(index, 1);
      console.log(`Removed: "${removed[0].task}"`);
    } else {
      console.log(`Todo with id ${id} not found.`);
    }
  }

  // Display all tasks
  listTodos(): void {
    if (this.todos.length === 0) {
      console.log("No tasks available.");
      return;
    }

    console.log("Todo List:");
    this.todos.forEach((todo) => {
      console.log(
        `${todo.id}. ${todo.task} - ${
          todo.completed ? "✅ Completed" : "❌ Pending"
        } (Due: ${todo.dueDate.toDateString()})`
      );
    });
  }

  // Filter tasks by completion status
  filterTodos(completed: boolean): void {
    const filtered = this.todos.filter((todo) => todo.completed === completed);

    if (filtered.length === 0) {
      console.log(completed ? "No completed tasks." : "No pending tasks.");
      return;
    }

    console.log(completed ? "Completed Tasks:" : "Pending Tasks:");
    filtered.forEach((todo) => {
      console.log(
        `${todo.id}. ${todo.task} (Due: ${todo.dueDate.toDateString()})`
      );
    });
  }

  // Update the description of a task
  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      console.log(`No task found with ID ${id}.`);
      return;
    }

    console.log(`Task updated: "${todo.task}" → "${newTask}"`);
    todo.task = newTask;
  }

  // Remove all completed tasks
  clearCompleted(): void {
    const beforeCount = this.todos.length;
    this.todos = this.todos.filter((todo) => !todo.completed);

    const removedCount = beforeCount - this.todos.length;
    console.log(`${removedCount} completed task(s) removed.`);
  }
}

// Example Usage
const myTodos = new TodoList();

// Adding multiple tasks
myTodos.addTodo("Learn TypeScript", new Date("2025-03-01"));
myTodos.addTodo("Build a Todo App", new Date("2025-03-05"));
myTodos.addTodo("Write documentation", new Date("2025-03-10"));
myTodos.addTodo("Review pull requests", new Date("2025-03-15"));
myTodos.addTodo("Prepare for a coding interview", new Date("2025-03-20"));

// Listing all tasks
myTodos.listTodos();

// Completing some tasks
myTodos.completeTodo(1); // Completing "Learn TypeScript"
myTodos.completeTodo(3); // Completing "Write documentation"

// Listing only completed tasks
myTodos.filterTodos(true);

// Listing only pending tasks
myTodos.filterTodos(false);

// Updating a task
myTodos.updateTodo(2, "Build an advanced Todo App with authentication");

// Removing a task
myTodos.removeTodo(4); // Removing "Review pull requests"

// Listing tasks after modification
myTodos.listTodos();

// Clearing all completed tasks
myTodos.clearCompleted();

// Final listing to verify completed tasks are removed
myTodos.listTodos();
