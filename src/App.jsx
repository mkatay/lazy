import "./App.css";
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Images } from "./components/Images";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { Faq } from "./components/Faq";
import {Login} from "./components/Login";


const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn,setIsLoggedIn] =useState(false)
  const [loggedInUser,setLoggedInUser] = useState('')
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser}/>
        <Routes>
         <Route path="/lazy" element={<Home />}/>
         <Route path="/lazy/images" element={<Images />}/>
         <Route path="/lazy/products" element={<Products />}/>
         <Route path="/lazy/products/:id" element={<Product />}/>
         <Route path="/lazy/contact" element={<Contact />}/>
         <Route path="/lazy/faq" element={isLoggedIn? <Faq /> : <Login setIsLoggedIn={setIsLoggedIn}/>}/>
         <Route path="/lazy/login" element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser}/>}/>
         {/*<Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>}/>*/}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
