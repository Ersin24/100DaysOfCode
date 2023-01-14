const TodosApp = {
  data() {
    return {
      //   newTodo: "Learn Vue.js!",
      todos: [],
      enteredTodoText: "",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      //   this.newTodo = "Updated!";
      //   this.newTodo = this.enteredTodoText;
      const newTodo = {
        text: this.enteredTodoText,
        id: new Date().toISOString(),
      };
      this.todos.push(newTodo);
      
      this.enteredTodoText = "";
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
