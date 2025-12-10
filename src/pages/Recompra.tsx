import { Bell } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { EmptyState } from '../components/ui/EmptyState'

export function Recompra() {
    return (
        <>
            <Header title="Recompra" />
            <PageContainer>
                <EmptyState
                    icon={<Bell className="h-16 w-16" />}
                    title="Nenhum alerta de recompra"
                    description="Quando clientes precisarem ser recontatos, os alertas aparecerão aqui"
                />
            </PageContainer>
        </>
    )
}
