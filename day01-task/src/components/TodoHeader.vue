<template>
  <header class="header">
    <h1 :style="{ color: $store.state.color.colorStr }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="addTodolist"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTodolist() {
      if (this.task.length === 0) {
        return alert('请输入任务')
      }
      this.$store.dispatch('todolist/addtodoList', this.task)
      this.task = ''
    }
  }
}
</script>
