import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';   // in react the the ./components/TopNav/index.js will provide the entry point for that folder
import CatNav from './components/CatNav';
import MainComponent from './components/MainComponent';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
      {/* <Products /> */}
    </div>
  );
}

export default App;
