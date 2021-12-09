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