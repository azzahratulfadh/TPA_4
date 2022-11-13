// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Project from "./pages/Project"

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project" element={<Project />} />
        </Routes>
      </Layout>
      
    </div>
  )
}

export default App
