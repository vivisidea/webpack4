<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }} <button @click="del(todo)">X</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      todos: [
        { id: 1, text: "todo 1" },
        { id: 2, text: "todo 2" },
        { id: 3, text: "todo 3" }
      ]
    };
  },
  methods: {
    del(todo) {
      this.todos.splice(this.todos.findIndex(t => t.id == todo.id), 1);
    }
  }
};
</script>