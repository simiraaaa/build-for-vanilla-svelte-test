<script>
  import Test from '../components/Test.svelte';

  /** @type {Test} */
  let testComponent;

  function handleIncrement() {
    console.log('increment');
  }

  function handleDecrement() {
    console.log('decrement');
  }

  function handleClickPlus() {
    testComponent.incrementCount();
  }

  function handleClickMinus() {
    testComponent.decrementCount();
  }

</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Test name="Test" bind:this={testComponent} on:increment={handleIncrement} on:decrement={handleDecrement}></Test>
<div>
  <button on:click={handleClickPlus}>+</button>
  <button on:click={handleClickMinus}>-</button>
</div>
