import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualificaton from './components/Qualification/Qualificaton'
import Service from './components/Service/Service'
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
    </div>
  )
}

export default App
