import './App.css'
import { Images } from "./components/Images";
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Images />
    </QueryClientProvider>
  )
}
export default App