import { Route, Routes } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Login } from "@/pages/Login"
import { Singup } from "./pages/Singup"

function App() {

  return (
    <Layout>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/singup"
          element={<Singup />}
        />
      </Routes>
    </Layout>
  )
}

export default App
