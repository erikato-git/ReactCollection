import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';   // in react the the ./components/TopNav/index.js will provide the entry point for that folder
import CatNav from './components/CatNav';
import MainComponent from './components/MainComponent';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />

      <Routes >
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetails' Component={ProductDetails}/>
      </Routes>

    </div>
  );
}

export default App;
