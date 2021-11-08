
<script>
    import {beforeUpdate , afterUpdate} from 'svelte'
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
    <p>Main Feedback component</p>
    {#each feedbacks as feedback (feedback.id)}
    <Item {feedback} on:emitBack on:delete/>
    {/each}
</main>

<style>

</style>