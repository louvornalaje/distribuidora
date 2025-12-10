import type { ReactNode } from 'react'

interface PageContainerProps {
    children: ReactNode
    className?: string
    noPadding?: boolean
}

export function PageContainer({
    children,
    className = '',
    noPadding = false,
}: PageContainerProps) {
    return (
        <main
            className={`
        flex-1 pb-24 min-h-screen bg-gray-100
        ${noPadding ? '' : 'px-4 py-4'}
        ${className}
      `}
        >
            {children}
        </main>
    )
}
