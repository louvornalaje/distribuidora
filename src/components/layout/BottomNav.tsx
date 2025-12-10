import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Plus, Share2, Bell } from 'lucide-react'

const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/contatos', icon: Users, label: 'Contatos' },
    { to: '/nova-venda', icon: Plus, label: 'Venda', isCenter: true },
    { to: '/indicacoes', icon: Share2, label: 'Indicações' },
    { to: '/recompra', icon: Bell, label: 'Recompra' },
]

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 safe-bottom">
            <div className="flex items-center justify-around px-2 py-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            item.isCenter
                                ? 'flex flex-col items-center justify-center -mt-6'
                                : `flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${isActive ? 'text-primary-500' : 'text-gray-500 hover:text-gray-700'
                                }`
                        }
                    >
                        {item.isCenter ? (
                            <div className="flex items-center justify-center w-14 h-14 bg-primary-500 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
                                <item.icon className="h-6 w-6 text-white" />
                            </div>
                        ) : (
                            <>
                                <item.icon className="h-5 w-5" />
                                <span className="text-xs mt-1 font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
