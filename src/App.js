import './App.css';
import Header from './components/Header';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/cart" element= <Cart/> />
          </Routes>
      </BrowserRouter>
      <ProductList/>
    </div>
  );
}

export default App;
  