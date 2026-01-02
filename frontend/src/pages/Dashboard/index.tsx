import { Page } from "@/components/Page";
import { Summary } from "./components/summary";

export function Dashboard() {
  return (
    <Page>
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-8">
          <Summary
            label="SALDO TOTAL"
            value="R$ 12.847,32"
            icon={{ name: "WalletIcon", color: "purple-base" }}
          />
          <Summary
            label="RECEITAS DO MÊS"
            value="R$ 4.250,00"
            icon={{ name: "CircleArrowUpIcon", color: "brand-base" }}
          />
          <Summary
            label="DESPESAS DO MÊS"
            value="R$ 2.180,45"
            icon={{ name: "CircleArrowDownIcon", color: "red-base" }}
          />
        </div>
      </div>
    </Page>
  )
}