import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./page"
import { AuthProvider } from "./context"
import { Header } from "./components/common/header"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App