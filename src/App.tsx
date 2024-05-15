import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss'
import Footer from './Components/Footer'
import TopMenu from './Components/TopMenu'
import ProductsGrid from './Components/ProductsComponents/ProductsGrid'

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <div className='app-content'> 
        <TopMenu></TopMenu>
        <main className='main-container'>
          <ProductsGrid></ProductsGrid>
        </main>
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  )
}

export default App
