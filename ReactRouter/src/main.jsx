import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Layout from "./Layout.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import App from './App.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}/>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)