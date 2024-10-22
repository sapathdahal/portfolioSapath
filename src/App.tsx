import './App.css'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from './navBar/navBar'
import { Home } from './components/home'
import { About } from './components/about'
import { Works } from './components/works'
import { Contact } from './components/contact'

function App() {


  return (
   <> <div className='App bg-[#f8f8f8]'>

          <NavBar/>
        {/* <div className="container w-fit mx-auto"> */}
          <section id="home">
          <Home/>
          </section>
          <section id="about">
          <About/>
          </section>
          <section id="works">
          <Works/>
          </section>
          <section id="contact">
          <Contact/>
          </section>

        {/* </div> */}

      </div>

      <Router>    
          <Routes>
            {/* <Route path='/' element={<Home/>}></Route> */}
            {/* <Route path='about.tsx' element={<About/>}></Route>
            <Route path='works.tsx' element={<Works/>}></Route>
            <Route path='contact.tsx' element={<Contact/>}></Route> */}
          </Routes>
      
      </Router>
    </>

  )
}

export default App
