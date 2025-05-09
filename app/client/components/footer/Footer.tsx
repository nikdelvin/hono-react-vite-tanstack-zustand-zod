import type { ComponentProps, FC, HTMLAttributes } from 'react'
import { Link } from 'react-router'
import css from './style.module.css'

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Footer: FC<Props> = () => {
    return (
        <footer className={css.root}>
            <nav className={css.nav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </footer>
    )
}

export default Footer
