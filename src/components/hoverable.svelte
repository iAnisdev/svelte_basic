<script>
    let hovering = false

    function mouseOver() {
        console.log(true)
        hovering = true
    }

    function mouseOut() {
        console.log(false)
        hovering = false
    }
</script>


<div on:mouseenter={mouseOver} on:mouseleave={mouseOut}>
    <slot hovering={hovering}></slot>
</div>