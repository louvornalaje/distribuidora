interface BadgeProps {
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'gray'
    children: React.ReactNode
    className?: string
}

const variantClasses = {
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-600',
    danger: 'bg-danger-50 text-danger-600',
    gray: 'bg-gray-100 text-gray-700',
}

export function Badge({ variant = 'primary', children, className = '' }: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    )
}
