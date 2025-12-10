import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { ToastContainer } from '../ui/Toast'

export function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Outlet />
            <BottomNav />
            <ToastContainer />
        </div>
    )
}
