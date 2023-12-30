import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './mycomponents/Login';
import Register from './mycomponents/Register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './mycomponents/Home';
import Succesfully from './mycomponents/Succesfully';
import Cart from './mycomponents/Cart';
import PlaceOrder from './mycomponents/PlaceOrder';

function App() {
  const [islogin,setLogin] = useState(false)
  const [orderdata,setOrderdata] = useState([])



  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home islogin={islogin} setOrderdata={setOrderdata}/>}/>
      <Route path='/succesfull' element={<Succesfully/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<PlaceOrder orderdata={orderdata} setOrderdata={setOrderdata}/>}/>
      <Route path='/login' element={<Login islogin={islogin} setLogin={setLogin}/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
