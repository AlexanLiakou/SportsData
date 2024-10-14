import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Terms from './pages/Terms';
import ErrorPage from './pages/ErrorPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Registration/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/donate' element={<Donate/>}></Route>
            <Route path='/terms' element={<Terms/>}></Route>
          </Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes> 
    </BrowserRouter>
  )
}

export default App