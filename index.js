const filters = {
    all: (todos) => todos,
    active: (todos) => todos.filter((todo) => !todo.completed),
    completed: (todos) => todos.filter((todo) => todo.completed)
  };
  
  new Vue({
    el: "#app",
    data: {
      newTodo: "",
      todos: [
        {
          id: uuidv4(),
          title: "學習Vue的使用",
          completed: true
        },
        {
          id: uuidv4(),
          title: "學習Vue中進行條件判斷",
          completed: false
        },
        {
          id: uuidv4(),
          title: "學習Vue中使用迴圈",
          completed: false
        }
      ],
      visibility: 'all' ,
    },
    methods: {
      addTodo() {
        const title = this.newTodo && this.newTodo.trim();
        if (!title) {
          return;
        }
  
        // 把newTodo放到todos
        this.todos.push({
          id: uuidv4(),
          title: this.newTodo,
          completed: false
        });
  
        // newTodo的內容清空
        this.newTodo = "";
      },
      removeTodo(todo) {
        this.todos = this.todos.filter((_todo) => _todo.id !== todo.id);
      },
      setVisibility(visibility) {
        this.visibility = visibility;
      }
    },
    computed: {
      filteredTodos() {
        return filters[this.visibility](this.todos)
      },
      remaining() {
        return filters.active(this.todos).length;
      }
    },
    filters: {
      pluralize(n) {
        return n ===1 ? 'item' : 'items'
      },
      toUpperCase(sentence) {
        return sentence.toUpperCase() + '.';
      }
    }
  });
  