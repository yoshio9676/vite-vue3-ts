import { defineStore } from "pinia";

export const useCounter2Store = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
        tripleCount(state) {
            return state.count * 3;
        }
    },
    actions: {
        countUp() {
            this.count++;
        }
    }
})