import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartContex } from './contex/CartContex';
import { useState } from 'react';

const  App = ()=> {

  const [carrito , setCarrito ] = useState([]) 

  const cantCarrito = ()=> {
    return carrito.reduce( (acu , prod ) => acu + prod.cont , 0 )
  }

  const precioTotal = () => {
    return carrito.reduce( (acu, prod) => acu + prod.precio * prod.cont, 0 )
  }

  return (
    <div className="App">

      <CartContex.Provider value={ { carrito , setCarrito , cantCarrito , precioTotal }}>

        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element = {<ItemListContainer />}/>
            <Route path="/item/:id" element = {<ItemDetailContainer />} />
            <Route path="/categoria/:categoria" element = {<ItemListContainer />} />
            <Route path="/carrito" element = { <Carrito />} />
          </Routes>
          
        </BrowserRouter>

      </CartContex.Provider>
    </div>
  );
}

export default App;

