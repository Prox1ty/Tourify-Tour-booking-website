import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home, ToursPage, About, Contact } from './pages';
import Layout from './Layout/Layout'

function App() {
  

  return (
     <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/tours" element={<ToursPage />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

            </Route>
          </Routes>
        </BrowserRouter>
     </>
  )
}

export default App
