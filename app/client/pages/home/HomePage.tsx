import Counter from '@c/components/counter/Counter'
import type { ComponentProps, FC, HTMLAttributes } from 'react'
import css from './style.module.css'

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const HomePage: FC<Props> = () => {
    return (
        <section className={css.root}>
            Home Page
            <Counter />
        </section>
    )
}

export default HomePage
