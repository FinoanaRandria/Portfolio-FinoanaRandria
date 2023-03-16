import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Education from '../../components/Education'
import Tools from '../../components/Tools'
import toast ,{Toaster} from 'react-hot-toast'
import Contribution from '../../components/Contribution'



export default function Home() {

  

  return (
    <>
      <Head>
        <title>Finoana Randri | portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         
      <Navbar/>
       <Main/>
       <About/>
    
       <Education/>
         
       <Skills/>
       <Tools/>
        <Contribution/>
       <Projects/>
        <Contact/>
        <Toaster
                      position="bottom-center"
                      reverseOrder={false}
                  />

       
    </>
  )
}