import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Service from './components/service/Service'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/home/Home'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Pricing from './components/pricing/Pricing'
function App() {
  

  return (
    <div className="App">
           <Sidebar/>
           <main className='main'>
              <Home/>
              <About/>
              <Service/>
              <Resume/>
              <Portfolio/>
                <Pricing/>
                <Testimonials/>
                <Blog/>
                 <Contact/>
           </main>
    </div>
  )
}

export default App
