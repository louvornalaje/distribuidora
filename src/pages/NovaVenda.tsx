import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { Card } from '../components/ui/Card'

export function NovaVenda() {
    return (
        <>
            <Header title="Nova Venda" showBack />
            <PageContainer>
                <Card className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-3">1. Selecionar Cliente</h3>
                    <input
                        type="text"
                        placeholder="Buscar cliente por nome ou telefone..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                </Card>

                <Card className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-3">2. Produtos</h3>
                    <p className="text-sm text-gray-500">Selecione um cliente primeiro</p>
                </Card>

                <Card className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-3">3. Pagamento</h3>
                    <p className="text-sm text-gray-500">Adicione produtos para continuar</p>
                </Card>
            </PageContainer>
        </>
    )
}
