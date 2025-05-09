import MainLayout from '@c/layouts/main/MainLayout'
import AboutPage from '@c/pages/about/AboutPage'
import HomePage from '@c/pages/home/HomePage'
import { createBrowserRouter } from 'react-router'

export default createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/about', Component: AboutPage }
        ]
    }
])
