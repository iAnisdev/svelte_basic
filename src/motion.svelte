<script>
    import { tweened} from 'svelte/motion'
    import {focus} from './directives/focus'
    let width = tweened(0);
    let borderWidth = ''
    function updateWidth(percent) {
        width.set(percent)
        borderWidth = `${percent}-width`
    }
</script>

<section>
    <div class="box">
        <div class="progress {borderWidth}" style="width: {$width}%;" />
    </div>
    <br />
    <br />
    <button on:click={() => updateWidth(0)}>0%</button>&nbsp;
    <button on:click={() => updateWidth(10)}>10%</button>&nbsp;
    <button on:click={() => updateWidth(20)}>20%</button>&nbsp;
    <button on:click={() => updateWidth(50)}>50%</button>&nbsp;
    <button on:click={() => updateWidth(80)}>80%</button>&nbsp;
    <button on:click={() => updateWidth(100)}>100%</button>&nbsp;


    <br />
    <br />

    <input type="text" name="" id="" use:focus>
</section>

<style>
    .box {
        width: 100vw;
        height: 20px;
        background-color: #f7f7f7;
    }
    .progress {
        height: 100%;
        background-color: green;
    }
</style>
