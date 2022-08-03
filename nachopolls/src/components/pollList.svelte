<script>
    import {fade, slide, scale} from 'svelte/transition'
    import {flip} from 'svelte/animate'
    import PollStore from '../stores/PollStore'
    import PollDetails from "./pollDetails.svelte";
    // import {onDestroy, onMount} from 'svelte'
    // export let polls = [];

//    const unsub =  PollStore.subscribe((data)=>{
//         polls = data;
//     })

//     onMount(()=>{
//         console.log('component mounted')
//     })

//     onDestroy(()=>{
//         console.log('component destroyed')
//         unsub();
//     })

</script>

<div class="poll-list">
{#each $PollStore as poll (poll.id) }
<div in:fade out:slide|local animate:flip ='{{duration:'500'}}'>
    <PollDetails {poll} />
</div>
{/each}

</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>