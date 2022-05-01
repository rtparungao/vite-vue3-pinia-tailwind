import { defineStore } from "pinia"

interface State {
    txt: String
}

export const useHomeStore = defineStore('home', {
    state: (): State => {
        return {
            txt: "Hello"
        }
    }
})