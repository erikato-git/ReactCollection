import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DigitalClock from './components/useEffect/DigitalClock';
import RefFocus from './components/useRef/RefFocus';
import Memo from './components/optimization/Memo1';
import Memo2 from './components/optimization/Memo2';
import RenderingList from './components/list/ListRendering';
import SubmitForm from './components/eventHandling/SubmitForm';
import Conditionals from './components/conditional-rendering/Conditionals';
import { BrowserRouter } from 'react-router-dom';
import RoutesNav from './components/routes/Routes';
import ShoppingCart from './components/context/ShoppingCart';
import ReduxOld from './components/redux_old/ReduxOld';
import Counter from './components/testing/Counter';
import Users from './components/testing/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DigitalClock /> */}
    {/* <RefFocus /> */}
    {/* <Memo /> */}
    {/* <Memo2 /> */}
    {/* <RenderingList /> */}
    {/* <SubmitForm /> */}
    {/* <Conditionals /> */}
    {/* <BrowserRouter>
      <RoutesNav />
    </BrowserRouter> */}
    {/* <ShoppingCart /> */}
    {/* <ReduxOld /> */}
    {/* <Counter /> */}
    <Users />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
