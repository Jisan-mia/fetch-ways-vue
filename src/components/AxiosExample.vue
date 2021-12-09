<template>
  <div v-for="todo in todos" :key="todo.id" class="container">
    <div class="item">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import getAxiosData from '../composables/getAxiosData'
export default {
  name: 'AxiosExample',
  setup() {
    
    const {todos, errors, loadTodos} = getAxiosData()
    loadTodos()


    return { todos , errors}
  }
}
</script>

<style>

</style>