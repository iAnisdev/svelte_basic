<script context="module">
	// let totalComponents = 0;

	// this allows an importer to do e.g.
	// `import Example, { alertTotal } from './Example.svelte'`
	export function alertTotal() {
		alert(totalComponents);
	}
</script>

<script>
	let totalComponents = 0;
    export let age = 0
    let isOpen = false
    export const name = 'refreshComponent'
	totalComponents += 1;
	console.log(`total number of times this component has been created: ${totalComponents}`);
    console.log($$props)
    console.log($$restProps)

    $: console.log(age)
</script>


<div class="container">
<p>{name}</p>
<p>{age}</p>

<br />
<details bind:open={isOpen}>
	<summary>Details</summary>
	<p>
		Something small enough to escape casual notice.
	</p>
</details>
</div>

<style>


</style>