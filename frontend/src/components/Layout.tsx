import { } from "@/components/ui/sonner"
import { Toaster } from "sonner"
import { Header } from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-12">
        {children}
      </main>
      <Toaster />
    </div>
  )
}