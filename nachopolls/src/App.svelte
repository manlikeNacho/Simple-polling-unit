<script>
import CreatePollForm from "./components/createPollForm.svelte";
import Footer from "./components/footer.svelte";
import Header from "./components/header.svelte";
import PollList from "./components/pollList.svelte";
import Tabs from "./components/tabs.svelte";


let items = ['Current Polls', 'Add New Poll'];
let activeItem = 'Current Polls';

const tabChange = (e) =>{
	activeItem = e.detail
}

let polls = []

const handleAdd = (e) =>{
	activeItem = 'Current Polls'
}


</script>

<Header />
<main>
<Tabs {activeItem} {items} on:tabChange={tabChange} />
{#if activeItem === 'Current Polls'}
<PollList {polls} />
{:else if activeItem === 'Add New Poll'}
<CreatePollForm on:add={handleAdd} />
{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>