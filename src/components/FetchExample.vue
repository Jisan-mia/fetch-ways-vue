<template>
  <div v-for="user in users" :key="user.id" class="container">
    <div class="item">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import getFetchData from '../composables/getFetchData'

export default {
  name: 'FetchExample',
  setup() {
    const {users, error, loadUsers} = getFetchData()
    console.log('hellow')

    loadUsers();

    return {
      users, 
      error
    }
  }
}
</script>

<style>

</style>