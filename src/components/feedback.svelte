
<script>
    import {beforeUpdate , afterUpdate} from 'svelte'
    import {legit_feedback} from './../store/feedback'
    import Item from './item.svelte'
    export let feedbacks = []

    beforeUpdate(() =>{
        // console.log('Component before update running')
    })

    afterUpdate(() =>{
        // console.log('component updated')
    })
</script>


<main>
    <b>Legit Feedbacks are: {$legit_feedback} </b>
    <p>Main Feedback component</p>
    {#each feedbacks as feedback (feedback.id)}
    <Item {feedback} on:emitBack on:delete/>
    {/each}
</main>

<style>

</style>