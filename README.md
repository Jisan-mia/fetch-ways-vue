## Project setup
- `yarn install` 
- `yarn serve` to compile and hot-reloads for development
- `yarn build` to compile and minifies for production

## Different ways to fetch/get data from API(Application Interface Programming) in Vue3.

- Using Fetch
```vue
<script>
import { ref } from 'vue'
export default {
  setup() {
    const result = ref(null);
    const loadData = async () => {
      const res = await fetch('url string');
      result.value = await res.json()
    }
    loadData();

    return { result }
  }
}
</script>

```

- Using axios
  
```vue

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const result = ref(null);

    const loadData = async () => {
      const data = await axios.get('url string');
      result.value = data;
    }
    return { result }
  }
}
</script>

```

- Custom fetch hook
```js
import { ref } from 'vue'
export const useFetch = (url, config = {}) => {
  const data = ref('null');
  const response = ref('null');
  const error = ref('null');
  const loading = ref('false');

  const fetch = async () => {
    loading.value = true
    try{
      const result = await axios.request({
        url, 
        ...config
      })
      response.value = result
      data.value = result.data
    } catch (ex) {
      error.value = ex;
    } finally {
      loading.value = false
    }
  }

  !config.skip && fetch();

  return {response, error, data, loading, fetch}


}

```