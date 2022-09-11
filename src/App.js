import './App.css';
import Header from './components/Header';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route exact path="/" element= <ProductList/> />
              <Route exact path="/cart" element= <Cart/> />
              <Route exact path="/product/:id" element= <ProductPage/> />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  