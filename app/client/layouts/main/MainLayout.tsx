import Footer from '@c/components/footer/Footer'
import Header from '@c/components/header/Header'
import { getEnv } from '@u/env'
import type { ComponentProps, FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router'
import css from './style.module.css'

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const MainLayout: FC<Props> = () => {
    return (
        <main className={css.root}>
            <Header />
            <Outlet />
            <Footer />
            {getEnv('VITE_PUBLIC_KEY')}
        </main>
    )
}

export default MainLayout
