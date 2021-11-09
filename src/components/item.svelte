<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  import { feedback_count } from "./../store/feedback";

  const dispatch = createEventDispatcher();
  export let feedback = {};
  var interval = {};

  function emitBack() {
    dispatch("emitBack", feedback);
  }
  function deleteFeedback() {
    dispatch("delete", feedback);
  }
  const feedback_count_subscriber = feedback_count.subscribe((value) => {
    console.log("Value is ==> ", value);
  });

  onMount(() => {
    // console.log('mounted')
    // interval = setInterval(() => {
    //   console.log('item is still up ', feedback.id)
    // }, 1000);
  });
  onDestroy(() => {
    feedback_count_subscriber
  });
</script>

<main class="card">
  <p>Item component</p>
  <p>{feedback.byUser}</p>
  <button on:click={emitBack}>view info</button>
  <button on:click={deleteFeedback}>Delete Feedback</button>
</main>

<style>
  .card {
    padding: 5px 10px;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
</style>
