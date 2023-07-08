import "./App.css";
import { Images } from "./components/Images";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Product } from "./components/Product";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/images" element={<Images />}/>
         <Route path="/products" element={<Products />}/>
         <Route path="products/:id" element={<Product />}/>
         <Route path="/contact" element={<Contact />}/>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
