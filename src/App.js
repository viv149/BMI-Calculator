
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BMI from './components/BMI';
import Cart from './components/cart/Cart';
import Header from './components/Header';
import Shopping from './components/Shopping';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<BMI/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shopping' element={<Shopping/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
