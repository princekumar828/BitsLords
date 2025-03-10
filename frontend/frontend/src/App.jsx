import { useState } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
import LoginPage from './pages/login/LoginPage'
import RegistrationForm from './pages/register/Register'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  
  return (
    <div className='App font-open-sans'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/article/:id' element={<ArticleDetailPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegistrationForm/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
    </Routes>
    </div >
  )
}

export default App
