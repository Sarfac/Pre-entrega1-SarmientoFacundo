import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const  App = ()=> {
  return (
    <div className="App">
        <BrowserRouter>

          <NavBar />

          <Routes>

            <Route path='/' element = {<ItemListContainer />}/>
            <Route path='item' element = {<ItemDetailContainer itemID = {3} />} />

          </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;

