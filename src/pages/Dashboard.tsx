import {
    TrendingUp,
    Users,
    DollarSign,
    ShoppingCart,
    ArrowUpRight,
    ArrowDownRight,
} from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { Card, CardHeader } from '../components/ui/Card'

export function Dashboard() {
    return (
        <>
            <Header title="MassasCRM" />
            <PageContainer>
                {/* Métricas rápidas */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <DollarSign className="h-5 w-5 opacity-80" />
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <ArrowUpRight className="h-3 w-3" />
                                12%
                            </span>
                        </div>
                        <p className="text-2xl font-bold">R$ 0,00</p>
                        <p className="text-sm opacity-80">Faturamento do mês</p>
                    </Card>

                    <Card className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <ShoppingCart className="h-5 w-5 opacity-80" />
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">0</span>
                        </div>
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-sm opacity-80">Vendas do mês</p>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between mb-2">
                            <TrendingUp className="h-5 w-5 text-success-500" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">R$ 0,00</p>
                        <p className="text-sm text-gray-500">Ticket médio</p>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between mb-2">
                            <Users className="h-5 w-5 text-primary-500" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">0</p>
                        <p className="text-sm text-gray-500">Clientes ativos</p>
                    </Card>
                </div>

                {/* Alertas de Recompra */}
                <Card className="mb-4">
                    <CardHeader
                        title="🔔 Alertas de Recompra"
                        subtitle="Clientes para recontatar"
                    />
                    <p className="text-sm text-gray-500 text-center py-4">
                        Nenhum alerta de recompra no momento
                    </p>
                </Card>

                {/* Top Indicadores */}
                <Card className="mb-4">
                    <CardHeader
                        title="🏆 Top Indicadores"
                        subtitle="Quem mais trouxe clientes"
                    />
                    <p className="text-sm text-gray-500 text-center py-4">
                        Nenhuma indicação registrada
                    </p>
                </Card>

                {/* Últimas Vendas */}
                <Card>
                    <CardHeader
                        title="🛒 Últimas Vendas"
                        subtitle="Vendas recentes"
                    />
                    <p className="text-sm text-gray-500 text-center py-4">
                        Nenhuma venda registrada
                    </p>
                </Card>
            </PageContainer>
        </>
    )
}
