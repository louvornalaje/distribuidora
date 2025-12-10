import { Share2 } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { EmptyState } from '../components/ui/EmptyState'

export function Indicacoes() {
    return (
        <>
            <Header title="Indicações" />
            <PageContainer>
                <EmptyState
                    icon={<Share2 className="h-16 w-16" />}
                    title="Nenhuma indicação"
                    description="Quando um cliente indicar outro, a indicação aparecerá aqui"
                />
            </PageContainer>
        </>
    )
}
