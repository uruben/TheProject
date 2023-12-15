import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./components/Contact"
import MovieBrowser from "./components/MovieBrowser"
import './App.css'

function App() {return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieBrowser />}></Route>
          <Route path="/MovieBrowser" element={<MovieBrowser />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

        </Route>
      </Routes>


    </BrowserRouter>
   
  )
}
export default App

