import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
}

export function Card({
    children,
    hover = false,
    padding = 'md',
    className = '',
    ...props
}: CardProps) {
    return (
        <div
            className={`
        bg-white rounded-xl shadow-sm
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-md transition-shadow cursor-pointer' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
}

interface CardHeaderProps {
    title: string
    subtitle?: string
    action?: ReactNode
}

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
    return (
        <div className="flex items-start justify-between mb-3">
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                {subtitle && (
                    <p className="text-sm text-gray-500">{subtitle}</p>
                )}
            </div>
            {action}
        </div>
    )
}

interface CardContentProps {
    children: ReactNode
    className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={className}>{children}</div>
}
