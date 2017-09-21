
import test from './test.vue'
function a (): string {
  return '1'
}
a()
test.data()
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
