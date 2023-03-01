<script>
    import {trim_comment} from '$lib/util';

    export let champion_name = "Teemo";
    export let levelling = "Hard";
    export let runes = "Predator";
    export let items = "Kraken";
    export let difficulty = "EZ";
    export let comments = "Kill";
</script>

<style>
    .card{
        width: 300px;
        height: 500px;
        grid-column: auto;
        grid-row: auto;
        justify-self: center;
        border: 2px solid;
        padding: 5px;
    }
    .name{
        font-size: 24px;
        font-weight: bold;
        text-align:center;
        padding-bottom: 5px;
    }
    .level{
        padding-bottom: 5px;
    }
    .subtitle{
        font-weight: bold;
        text-align: center;
    }
    .difficulty{
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }
</style>

<div class="card">
    <div class="name">{champion_name}</div>
    <div class="difficulty">{difficulty}</div>
    <div class="level">{levelling}</div>
    <div class="subtitle">Runes</div>
    <div class="level">{runes}</div>
    <div class="subtitle">Items</div>
    <div class="level">{items}</div>
    <p>{trim_comment(comments)}</p>
</div>