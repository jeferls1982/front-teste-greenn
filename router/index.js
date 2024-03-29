import { createRouter, createMemoryHistory } from 'vue-router'


import Home from "../src/components/HomeComponent.vue"
import HeloWorld from "../src/components/HelloWorld.vue"


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HeloWorld },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createMemoryHistory(),
  routes, // short for `routes: routes`
})

export default router