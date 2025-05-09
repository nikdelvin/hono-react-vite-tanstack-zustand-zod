import client from '@c/providers/honoClient'
import { useQuery } from '@tanstack/react-query'
import type { ComponentProps, FC, HTMLAttributes } from 'react'
import css from './style.module.css'

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const AboutPage: FC<Props> = () => {
    const { data, status } = useQuery({
        queryKey: ['ping'],
        gcTime: 5000,
        staleTime: 5000,
        queryFn: async () => {
            return (await client.api.ping.$get({ query: { pong: 'about' } })).json()
        }
    })

    return (
        <section className={css.root}>
            About Page
            {status !== 'success' ? (
                <p>Loading...</p>
            ) : (
                <code>
                    <pre>{JSON.stringify(data, undefined, 2)}</pre>
                </code>
            )}
        </section>
    )
}

export default AboutPage
