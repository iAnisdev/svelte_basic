<script>
  import { tick } from "svelte";
  import {feedback_count, feedbacks } from './store/feedback'
  import Feedback from "./components/feedback.svelte";
  let Feedbacks = []
  $: totalFeedbacks = Feedbacks.length;
  async function deleteFeedback(event) {
    Feedbacks = Feedbacks.filter((Feedback) => Feedback.id !== event.detail.id);
    console.log("totalFeedbacks before tick =>>> ", totalFeedbacks);
    await tick();
    console.log("totalFeedbacks after tick =>>> ", totalFeedbacks);
    feedback_count.set(totalFeedbacks)
    feedbacks.set(Feedbacks)
  }
    feedbacks.subscribe((value) => {
      Feedbacks = value
    })
  function viewInfo(event) {
    console.log(event.detail);
  }

</script>

<main>
  <p>Total Feedbacks are : {totalFeedbacks}</p>
  <p>Total Feedbacks in store are : {$feedback_count}</p>
  <Feedback feedbacks={$feedbacks} on:emitBack={viewInfo} on:delete={deleteFeedback} />
</main>

<style>
</style>
