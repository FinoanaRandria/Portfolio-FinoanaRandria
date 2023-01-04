import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualificaton from './components/Qualification/Qualificaton'
import Service from './components/Service/Service'
import Portfol from './components/Portfolio/Portfol'
import './App.css'

function App() {
  

  return (
    <div className="App">
       <Navbar/>
       <Home/>
      <About/>
      <Skills/>
      <Qualificaton/>
      <Service/>
      <Portfol/>
    </div>
  )
}

export default App
