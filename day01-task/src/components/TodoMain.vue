<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in todolist" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="deleteTodolist(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todolist() {
      return this.$store.state.todolist.data
    }
  },
  methods: {
    deleteTodolist(id) {
      this.$store.dispatch('todolist/deletetodoList', id)
    }
  }
}
</script>
