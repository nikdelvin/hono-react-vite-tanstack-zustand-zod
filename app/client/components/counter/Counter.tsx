import { useCounter } from '@c/states/counter/actions'
import type { ComponentProps, FC, HTMLAttributes } from 'react'
import css from './style.module.css'

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Counter: FC<Props> = () => {
    const { count, increaseByOne, decreaseByOne, resetAsync } = useCounter()
    return (
        <div className={css.root}>
            <button onClick={decreaseByOne}>-</button>
            <div className={css.counter}>{count ?? 'Loading...'}</div>
            <button onClick={increaseByOne}>+</button>
            <button onClick={resetAsync}>Reset Async</button>
        </div>
    )
}

export default Counter
