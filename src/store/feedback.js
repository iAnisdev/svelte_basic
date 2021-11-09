import {  writable,  readable ,  derived } from 'svelte/store'

export const feedback_count = writable(4)

export const feedbacks = writable([{
            id: 1,
            byUser: "Anis",
            comment: "Good Work",
        },
        {
            id: 2,
            byUser: "Bla Bla",
            comment: "Good Work",
        },
        {
            id: 5,
            byUser: "Noocne",
            comment: "Not a good Work",
        },
        {
            id: 4,
            byUser: "ro2",
            comment: "stipid Work",
        },
    ])


export const legit_feedback = derived(feedbacks , ($feedbaks) =>{
    return $feedbaks.length
})