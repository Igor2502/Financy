import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { useQuery } from "@apollo/client/react"
import { Page } from "@/components/Page";
import { Summary } from "./components/summary";
import { ListHeader } from "./components/list-header";
import { TransactionItem } from "./components/transaction-item";
import { CategoryItem } from "./components/category-item";
import { CreateTransactionDialog } from "@/components/CreateTransactionDialog";
import { LIST_TRANSACTIONS_DASHBOARD } from "@/lib/graphql/queries/Transaction";
import { Category, Transaction } from "@/types";
import { LIST_CATEGORIES_DASHBOARD } from "@/lib/graphql/queries/Category";

export function Dashboard() {
  const [openDialog, setOpenDialog] = useState(false)
  const [balance, setBalance] = useState(0)
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState(0)

  const { data: dataTransactions } = useQuery<{ listTransactions: Transaction[] }>(LIST_TRANSACTIONS_DASHBOARD)
  const { data: dataCategories } = useQuery<{ listCategories: Category[] }>(LIST_CATEGORIES_DASHBOARD)

  const transactions = dataTransactions?.listTransactions || []
  const categories = dataCategories?.listCategories || []

  useEffect(() => {
    const totalInput = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((total, transaction) => total += transaction.amount, 0)

    const totalOutput = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((total, transaction) => total += transaction.amount, 0)

    const totalBalance = (totalInput + totalOutput)

    setInput(totalInput)
    setOutput(totalOutput)
    setBalance(totalBalance)

  }, [transactions.length])

  return (
    <Page>
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <Summary label="SALDO TOTAL" value={`R$ ${balance}`} icon={{ name: "WalletIcon", color: "purple-base" }} />
          <Summary label="RECEITAS DO MÊS" value={`R$ ${input}`} icon={{ name: "CircleArrowUpIcon", color: "brand-base" }} />
          <Summary label="DESPESAS DO MÊS" value={`R$ ${output}`} icon={{ name: "CircleArrowDownIcon", color: "red-base" }} />
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
              transactions.map(transaction => (
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
              categories.map(category => (
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