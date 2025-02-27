// Class to manage the Todo list
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item
    TodoList.prototype.addTodo = function (task, dueDate) {
        var todo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(todo);
        console.log("Task added: \"".concat(task, "\" (Due: ").concat(dueDate.toDateString(), ")"));
    };
    // Mark a task as completed
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (!todo) {
            console.log("No task found with ID ".concat(id, "."));
            return;
        }
        todo.completed = true;
        console.log("Task completed: \"".concat(todo.task, "\""));
    };
    // Remove a task from the list
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index === -1) {
            console.log("No task found with ID ".concat(id, "."));
            return;
        }
        var removed = this.todos.splice(index, 1)[0];
        console.log("Task removed: \"".concat(removed.task, "\""));
    };
    // Display all tasks
    TodoList.prototype.listTodos = function () {
        if (this.todos.length === 0) {
            console.log("No tasks available.");
            return;
        }
        console.log("Todo List:");
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ". ").concat(todo.task, " - ").concat(todo.completed ? "✅ Completed" : "❌ Pending", " (Due: ").concat(todo.dueDate.toDateString(), ")"));
        });
    };
    // Filter tasks by completion status
    TodoList.prototype.filterTodos = function (completed) {
        var filtered = this.todos.filter(function (todo) { return todo.completed === completed; });
        if (filtered.length === 0) {
            console.log(completed ? "No completed tasks." : "No pending tasks.");
            return;
        }
        console.log(completed ? "Completed Tasks:" : "Pending Tasks:");
        filtered.forEach(function (todo) {
            console.log("".concat(todo.id, ". ").concat(todo.task, " (Due: ").concat(todo.dueDate.toDateString(), ")"));
        });
    };
    // Update the description of a task
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (!todo) {
            console.log("No task found with ID ".concat(id, "."));
            return;
        }
        console.log("Task updated: \"".concat(todo.task, "\" \u2192 \"").concat(newTask, "\""));
        todo.task = newTask;
    };
    // Remove all completed tasks
    TodoList.prototype.clearCompleted = function () {
        var beforeCount = this.todos.length;
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        var removedCount = beforeCount - this.todos.length;
        console.log("".concat(removedCount, " completed task(s) removed."));
    };
    return TodoList;
}());
// Example Usage
var myTodos = new TodoList();
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
