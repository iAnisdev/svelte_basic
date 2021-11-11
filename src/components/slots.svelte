<script>

    import { getContext , getAllContexts } from 'svelte';
    
    let role = getContext('userRole')
    let user = getContext('userinfo')
</script>

<div>
    <p>Slot Component with role {role}</p>
    <p>loggedIn User: {JSON.stringify(user , null , 4)}</p>
    <slot name="greeting">
        <h1>Hi there</h1>
    </slot>
    <slot name="info">
        <p>We are currently closed!</p>
    </slot>
</div>

<style>


</style>