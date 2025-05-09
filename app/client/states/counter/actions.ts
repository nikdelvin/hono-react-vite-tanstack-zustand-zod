import client from '@c/providers/honoClient'
import { create } from 'zustand'

interface CounterState {
    count?: number
    increaseByOne: () => void
    decreaseByOne: () => void
    resetAsync: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const useCounter = create<CounterState>((set) => ({
    count: 0,
    increaseByOne: () => {
        set((state) => ({ count: (state.count ?? 0) + 1 }))
    },
    decreaseByOne: () => {
        set((state) => ({ count: (state.count ?? 0) - 1 }))
    },
    resetAsync: (e) => {
        void (async () => {
            const target = e.currentTarget
            target.disabled = true
            set({ count: undefined })
            await client.api.ping.$get({ query: { pong: '-1' } })
            set({ count: -1 })
            await client.api.pong.$get({ query: { ping: '0' } })
            set({ count: 0 })
            target.disabled = false
        })()
    }
}))
