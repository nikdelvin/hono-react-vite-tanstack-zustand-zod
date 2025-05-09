import queryClient from '@c/providers/queryClient'
import router from '@c/router'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

const rootElement = document.getElementById('root')
if (rootElement != null) {
    const root = createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </React.StrictMode>
    )
}
