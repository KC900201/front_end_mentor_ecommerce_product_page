import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { Home, NotFound } from "@/components/pages"

/**
 * To-do:
 * [ ] Create UI components with unit test scripts
 * [ ] Include ContextProvider (CartProvider)
 * [ ] Include hooks for responsive layout
 * [ ] Publish to netlify
 *
 * @returns main App component
 */

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
