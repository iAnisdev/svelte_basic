<script>
    import { onMount , setContext , getContext , hasContext} from "svelte";
    import Refresh, { alertTotal } from "./components/refresh.svelte";
    import BindClass from "./components/bindClass.svelte";
    import { fade } from "svelte/transition";


    let value = 12;
    let selected = 'a';
    let fillings = []
    let fillings2 = []
        console.log(hasContext('time'))
        if(hasContext('time')){
        console.log(getContext('time'))
        console.log(new Date())
        }
        setContext('time', new Date())
    onMount(() => {
        // setInterval(() => {
        //     console.log('called')
        //     console.log(value)
        //     value ++
        // }, 1000)
    });
</script>

<div class="container">
    <h5>Home Page</h5>
    <Refresh bind:age={value} gender="male" />
    <!-- {@debug value} -->
    <!-- {#key value}
	    <div transition:fade>{value}</div>
    {/key} -->
    {selected}
    <br />
    <select bind:value={selected}>
        <option value={'a'}>a</option>
        <option value={'b'}>b</option>
        <option value={'c'}>c</option>
    </select>
    <br />
    {fillings}
    <br />
    <select multiple bind:value={fillings}>
        <option value="Rice">Rice</option>
        <option value="Beans">Beans</option>
        <option value="Cheese">Cheese</option>
        <option value="Guac (extra)">Guac (extra)</option>
    </select>
    <br />
    {fillings2}
    <br />
    <select multiple bind:value={fillings2}>
        <option>Rice</option>
        <option>Beans</option>
        <option>Cheese</option>
        <option>Guac (extra)</option>
    </select>
    <br>
    <BindClass />
</div>

<style>
    div:global(.container) {
        padding: 1vh 2vw;
    }
</style>
