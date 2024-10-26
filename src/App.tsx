import './App.css'
import { NavBar } from './navBar/navBar'
import { Home } from './components/home'
import { About } from './components/about'
import { Works } from './components/works'
import { Contact } from './components/contact'

function App() {


  return (
   <div className='App bg-[#f8f8f8]'>

          <NavBar/>

          <section id="home" className='secs'>
          <Home/>
          </section>
          <section id="about" className='secs'>
          <About/>
          </section>
          <section id="works" className='secs'>
          <Works/>
          </section>
          <section id="contact" className='secs'>
          <Contact/>
          </section>

      </div>

  )
}

export default App
