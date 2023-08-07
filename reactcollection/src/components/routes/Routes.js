import React from 'react'
import About from './About'
import Home from './Home'
import Products from './Products'
import {Link, Routes, Route, useRoutes} from 'react-router-dom'
import ProductDetail from './ProductDetail'
import NotFound from './NotFound'
import './Routes.css';
import '../../App.css'

// Will only work if the component is wrapped in a browser-router in index.js
// react-router-dom has to be installed by following command: npm install react-router-dom --save

function RoutesNav() {
    // is equivallent to Routes-section
    let routeElements=useRoutes([
        {
          path:'/',
          children:[
            {
              index:true,
              element:<Home/>
            },
            {
              path:'/about',
              element:<About/>
            },
            {
              path:'/products',
              element:<Products/>,
              children:[
                {
                  path:':id',
                  element:<ProductDetail/>
                }
              ]
    
            },
            {
              path:'*',
              element:<NotFound/>
            }
          ]
        }
      ])
    


    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
            {/* <Routes>
                <Route path='/'/>
                <Route>
                    index points to the first parent route
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/products" element={<Products />}>
                        Child route of "/products"
                        <Route path=":id" element={<ProductDetail />}/>    
                    </Route>
                    Invalid routes
                    <Route path='*' element={<NotFound />}/>
                </Route>
            </Routes> */}
            {routeElements}
        </div>
    )
}

export default RoutesNav