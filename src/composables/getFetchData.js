
import {ref} from 'vue';

const getFetchData = () => {
  const users = ref([]);
  const error = ref(null);

  const loadUsers = async () => {
    try{
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      if(!data.ok) {
        throw Error('Error getting Data');
      }
      users.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message)
    }
  }
  return {users, error, loadUsers}
}
export default getFetchData;