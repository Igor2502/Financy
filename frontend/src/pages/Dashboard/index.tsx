import { Page } from "@/components/Page";
import { Summary } from "./components/summary";
import { ListHeader } from "./components/list-header";
import { TransactionItem } from "./components/transaction-item";
import { PlusIcon } from "lucide-react";
import { CategoryItem } from "./components/category-item";
import { CreateTransactionDialog } from "@/components/CreateTransactionDialog";
import { useState } from "react";

const MOCK_TRANSACTIONS = [
  {
    id: "1",
    description: "Pagamento de Salário",
    amount: 4250.00,
    category: {
      title: "Receita",
      iconName: "BriefcaseBusinessIcon",
      iconColor: "green-base",
    },
    date: "2025-12-01",
  },
  {
    id: "2",
    description: "Jantar em Restaurante",
    amount: -89.50,
    category: {
      title: "Alimentação",
      iconName: "UtensilsIcon",
      iconColor: "blue-base",
    },
    date: "2025-11-30",
  },
  {
    id: "3",
    description: "Posto de Gasolina",
    amount: -100,
    category: {
      title: "Transporte",
      iconName: "CarFrontIcon",
      iconColor: "purple-base",
    },
    date: "2025-11-29",
  },
  {
    id: "4",
    description: "Compras no Mercado",
    amount: -156.80,
    category: {
      title: "Mercado",
      iconName: "ShoppingCartIcon",
      iconColor: "orange-base",
    },
    date: "2025-11-28",
  }
]

const MOCK_CATEGORIES = [
  { id: "1", title: "Alimentação", iconColor: "blue-base", count: 12, amount: 542.30 },
  { id: "2", title: "Transporte", iconColor: "purple-base", count: 8, amount: 385.50 },
  { id: "3", title: "Mercado", iconColor: "orange-base", count: 3, amount: 298.75 },
  { id: "4", title: "Entretenimento", iconColor: "pink-dark", count: 2, amount: 186.20 },
  { id: "5", title: "Utilidades", iconColor: "yellow-dark", count: 7, amount: 245.80 },
]

export function Dashboard() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Page>
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <Summary label="SALDO TOTAL" value="R$ 12.847,32" icon={{ name: "WalletIcon", color: "purple-base" }} />
          <Summary label="RECEITAS DO MÊS" value="R$ 4.250,00" icon={{ name: "CircleArrowUpIcon", color: "brand-base" }} />
          <Summary label="DESPESAS DO MÊS" value="R$ 2.180,45" icon={{ name: "CircleArrowDownIcon", color: "red-base" }} />
        </div>
        <div className="grid grid-cols-3 gap-6 items-start">
          <div className="col-span-2 bg-white py-4 rounded-lg border border-gray-200 max-h-[600px] overflow-y-auto">
            <ListHeader
              title="TRANSAÇÕES RECENTES"
              linkText="Ver todas"
              linkTo="/transactions"
              icon="ChevronRightIcon"
            />
            {
              MOCK_TRANSACTIONS.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  item={transaction}
                />
              ))
            }
            <div className="flex justify-center pt-4">
              <button type="button" className="flex hover:underline" onClick={() => setOpenDialog(true)}>
                <PlusIcon className="w-5 h-5 text-brand-base mr-2" />
                <span className="text-brand-base text-sm font-medium">Nova Transação</span>
              </button>
            </div>
          </div>

          <div className="col-span-1 bg-white py-4 rounded-lg border border-gray-200">
            <ListHeader
              title="CATEGORIAS"
              linkText="Gerenciar"
              linkTo="/categories"
              icon="ChevronRightIcon"
            />
            {
              MOCK_CATEGORIES.map(category => (
                <CategoryItem
                  key={category.id}
                  item={category}
                />
              ))
            }
          </div>
        </div>
      </div>

      <CreateTransactionDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
      />
    </Page>
  )
}