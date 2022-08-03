import {writable} from 'svelte/store'

const PollStore = writable([
    {
      id:1,
      question: 'Do you like nacho sins?',
      answerA:'Yes,amigo',
      answerB:"Only a fool will pick me",
      votesA:5,
      votesB:15,  
    },
])

export default PollStore