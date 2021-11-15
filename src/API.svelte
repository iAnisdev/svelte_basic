<script>
    import { onMount } from "svelte";
    let start = 1;
    let limit = 500;
    let currency = "USD";

    let API_BASE_URL = "https://pro-api.coinmarketcap.com";
    let API_KEY = "f1fcaff7-8096-4122-9188-d09ae37cf949";

    async function fetchLatestListings(params) {
        const response = await fetch(
            `${API_BASE_URL}/v1/cryptocurrency/listings/latest?` +
                new URLSearchParams({
                    start: start,
                    limit: limit,
                    convert: currency,
                }),{
                headers: {
                    "X-CMC_PRO_API_KEY": API_KEY,
                },
            });
        console.log(response.data);
    }

    onMount(() => {
        // fetchLatestListings();
    });

</script>

<div class="container">
    <div class="filter">
        <h3>Filter Box</h3>
        <div class="row">
            <div class="col-4">
                <input type="text" value={start} />
            </div>
            <div class="col-4">
                <input type="text" value={limit} />
            </div>
            <div class="col-4">
                <input type="text" value={currency} />
            </div>
        </div>
    </div>
    <br />
    <div class="data-box"></div>
</div>

<style>
    .container {
        padding: 1vh 2vw 2vh;
    }
    .filter {
        padding: 1vh 2vw 2vh;
        border: 2px solid #f7f7ff;
        border-radius: 18px;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .col-3 {
        width: 25%;
    }
    .col-4 {
        width: 33.3%;
    }
    .col-6 {
        width: 50%;
    }
    .data-box{
        padding: 1vh 2vw;
        border: 2px solid #f7f7ff;
        border-radius: 18px;
    }
</style>
