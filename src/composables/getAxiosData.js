import { ref } from 'vue'
import axios from 'axios';

const fetAxiosData = () => {
  const todos = ref([]);
  const error = ref(null);

  const loadTodos = async () => {
    try{
      const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
      if(!data.ok) {
        throw Error('Error getting Data');
      }
      todos.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message)
    }
  }
  return {todos, error, loadTodos}
}
export default getFetchData;