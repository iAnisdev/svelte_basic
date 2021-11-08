<script>
  import { tick } from "svelte";
  import {feedback_count} from './store/feedback'
  import Feedback from "./components/feedback.svelte";
  let feedbacks = [
    {
      id: 1,
      byUser: "Anis",
      comment: "Good Work",
    },
    {
      id: 2,
      byUser: "Bla Bla",
      comment: "Good Work",
    },
    {
      id: 5,
      byUser: "Noocne",
      comment: "Not a good Work",
    },
    {
      id: 4,
      byUser: "ro2",
      comment: "stipid Work",
    },
  ];

  let store_feedback_count ;
  $: totalFeedbacks = feedbacks.length;

  async function deleteFeedback(event) {
    feedbacks = feedbacks.filter((Feedback) => Feedback.id !== event.detail.id);
    console.log("totalFeedbacks before tick =>>> ", totalFeedbacks);
    await tick();
    console.log("totalFeedbacks after tick =>>> ", totalFeedbacks);
    feedback_count.set(totalFeedbacks)
    
  }
  function viewInfo(event) {
    console.log(event.detail);
  }

  //store subscription 

  feedback_count.subscribe(value => {
    store_feedback_count = value
  })
</script>

<main>
  <p>Total Feedbacks are : {totalFeedbacks}</p>
  <p>Total Feedbacks in store are : {store_feedback_count}</p>
  <Feedback {feedbacks} on:emitBack={viewInfo} on:delete={deleteFeedback} />
</main>

<style>
</style>
