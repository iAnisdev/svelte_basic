<script>
    import {border} from './../directives/border'
    import { fly, fade } from "svelte/transition";
    let isAdmin = false;
    let showSelf = false
    function makeAdmin() {
        isAdmin = !isAdmin;
    }
    function updateShowSelf() {
        showSelf = !showSelf;
    }
</script>

<div>
    <p class:isAdmin use:border={isAdmin}>I am Admin</p>
    <br />
    {#if isAdmin}
	<div in:fly out:fade>
		flies in, fades out
	</div>
{/if}
<br />
    <button on:click={makeAdmin}>Toggle Account</button>
    {#if showSelf}
    <svelte:self/>
    {/if}
    <button on:click={updateShowSelf}>Toggle Self</button>
</div>

<style>
    .isAdmin {
        background-color: green;
        padding: 1px 1vw;
        color: #fff;
    }
</style>
