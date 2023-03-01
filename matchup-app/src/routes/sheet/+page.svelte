<script>
    import Matchup from './matchup.svelte';
    
    /** @type {import('./$types').PageData} */  
    export let data;
    let matchup_list = data.matchup_data;
    $: filtered_matchup_list = matchup_list.filter(function(entry){
        return entry.champion_name.toLowerCase().includes(filter_name.toLowerCase());
    });
    let filter_name = '';
</script>

<style>
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
}
</style>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<h1> Hello! </h1>

<h3> This page has matchup info</h3>
<div>
    Filter By Champion <input bind:value={filter_name}/>
</div>


<div class="container">
{#each filtered_matchup_list as matchup}
    <Matchup {...matchup}></Matchup>
{/each}
</div>