<script>
    import {page} from '$app/stores';
    import Matchup from './matchup.svelte';
    

    let matchup_list = $page.data.matchup_data;
    $: filtered_matchup_list = matchup_list;

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
	<title>{$page.data.title}</title>
</svelte:head>

<h1> Hello! </h1>

<h3> This page has matchup info</h3>

<div class="container">
{#each filtered_matchup_list as matchup}
    <Matchup {...matchup}></Matchup>
{/each}
</div>