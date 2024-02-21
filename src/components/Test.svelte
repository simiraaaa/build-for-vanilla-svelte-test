<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  /** @type {string} */
  export let name;
  let count = 0;

  export function incrementCount() {
    count += 1;
    dispatch("increment");
  }

  export function decrementCount() {
    count -= 1;
    dispatch("decrement");
  }
</script>

<style>
</style>

<div>
  <h1>Hello, {name}!</h1>
  <p>Count: {count}</p>
</div>
