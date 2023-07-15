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
import {Logout} from "./components/Logout";

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
         <Route path="/" element={<Home />}/>
         <Route path="images" element={<Images />}/>
         <Route path="products" element={<Products />}/>
         <Route path="products/:id" element={<Product />}/>
         <Route path="contact" element={<Contact />}/>
         <Route path="faq" element={isLoggedIn? <Faq /> : <Login setIsLoggedIn={setIsLoggedIn}/>}/>
         <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser}/>}/>
         {/*<Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>}/>*/}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
