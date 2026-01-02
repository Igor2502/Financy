import { useAuthStore } from "@/stores/auth"

import logoIcon from "@/assets/logo.svg"
import { Link } from "react-router-dom"

export function Header() {
  const { user, isAuthenticated } = useAuthStore()

  return (
    <div className="w-full px-16 py-4 bg-white">
      {isAuthenticated && (
        <div className="flex items-center justify-between w-full">
          <div className="min-w-48">
            <img src={logoIcon} alt="Logo" className="h-6 w-[100px]" />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-brand-base font-medium hover:text-gray-700 hover:font-medium">
              Dashboard
            </Link>
            <Link to="/transactions" className="text-gray-600 hover:text-gray-700 hover:font-medium">
              Transações
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-700 hover:font-medium">
              Categorias
            </Link>
          </div>
          <div className="bg-gray-200 p-2 rounded-3xl w-9 h-9 flex items-center justify-center">
            <span className="font-medium text-gray-800h">CT</span>
          </div>
        </div>
      )}
    </div>
  )
}