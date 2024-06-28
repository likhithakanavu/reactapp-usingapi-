import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Test from './component/test';
import About from './component/About';
import ArowFuction from './pages/ArowFuction';
import Map from './pages/Map';
import { Description } from '@mui/icons-material';
import Destructure from './pages/Destructure';
import SpreadOp from './pages/SpreadOp';
import TernaryOp from './pages/TernaryOp';
import Es6 from './component/Es6';
import Category from './pages/category';
import Product from './pages/Product';
import Allproduct from './pages/Allproduct';
import Childcom from './component/Childcom';
import Parentcom from './component/Parentcom';
import Usestate from './pages/Usestate';
import UseEffect from './pages/UseEffect';
import Header from './component/header';

import Register from './component/register';
import Login from './component/Login';
import Logout from './component/Logout';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   
   <Routes>
    <Route  exact path="/" element={<Home/>} />
    <Route  exact path="/about" element={<About/>} />
    <Route  exact path="/Arrow" element={<ArowFuction/>} />
    <Route  exact path="/map" element={<Map/>} />
    <Route  exact path="/des" element={<Destructure/>} />
    <Route  exact path="/spre" element={<SpreadOp/>} />
    <Route  exact path="/ter" element={<TernaryOp/>} />
    <Route  exact path="/Es6" element={<Es6/>} />
    <Route  exact path="/cat" element={<Category/>} />
    <Route  exact path="/product/:catname" element={<Product/>} />
    <Route  exact path="/allproduct" element={<Allproduct/>} />
    <Route  exact path="/props" element={<Parentcom/>} />
    
    <Route  exact path="/state" element={<Usestate/>} />
    <Route  exact path="/effect" element={<UseEffect/>} />

    <Route  exact path="/reg" element={<Register/>} />
    <Route  exact path="/login" element={<Login/>} />
    <Route  exact path="/logout" element={<Logout/>} />
    
 
   </Routes>
   </BrowserRouter>

  
    </div>
  );
}

export default App;
