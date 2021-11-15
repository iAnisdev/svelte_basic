<script>
    import { setContext } from 'svelte'

    import SlotsComponent from "./components/slots.svelte";
    import Hoverable from "./components/hoverable.svelte"; 

    let userinfo = {
        name: 'Anis',
        username: 'marahmanjs',
        loggedIn: true
    }

    let userRole = 'basic'

    setContext('userinfo' , userinfo)
    setContext('userRole' , userRole)
</script>


<svelte:head>
        <link rel="stylesheet" href="https://svelte.dev/tutorial/dark-theme.css">
</svelte:head>

<div>
    <p>Main Page</p>
    <SlotsComponent>
        <span slot="greeting">
            <h4>Welcome to My Store</h4>
        </span>
        <span slot="info">
            <p>How can i help you sir?</p>
        </span>
    </SlotsComponent>

    <br />
    <br />

    <Hoverable let:hovering={hovering}>
        <h4>hover me {hovering}</h4>
    </Hoverable>
</div>
