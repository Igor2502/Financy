import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Login } from "@/pages/Auth/Login"
import { Singup } from "./pages/Auth/Singup"
import { useAuthStore } from "@/stores/auth"
import { Dashboard } from "./pages/Dashboard"
import { Transactions } from "./pages/Transactions"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />
}

function App() {

  return (
    <Layout>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/singup"
          element={
            <PublicRoute>
              <Singup />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
