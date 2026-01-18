import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { Home, NotFound } from "@/components/pages"

/**
 * To-do:
 * [x] Create UI components with unit test scripts
 *  [x] Finish writing test scripts
 * [x] Publish to netlify
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
