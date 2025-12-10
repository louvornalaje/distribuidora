import { useState } from 'react'
import { Plus, Search, Filter } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { Button, EmptyState } from '../components/ui'
import { Users } from 'lucide-react'

export function Contatos() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Header
                title="Contatos"
                rightAction={
                    <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Filter className="h-5 w-5" />
                    </button>
                }
            />
            <PageContainer>
                {/* Busca */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nome ou telefone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    />
                </div>

                {/* Lista vazia */}
                <EmptyState
                    icon={<Users className="h-16 w-16" />}
                    title="Nenhum contato cadastrado"
                    description="Adicione seu primeiro contato para começar a gerenciar seus clientes"
                    action={
                        <Button leftIcon={<Plus className="h-4 w-4" />}>
                            Novo Contato
                        </Button>
                    }
                />
            </PageContainer>
        </>
    )
}
