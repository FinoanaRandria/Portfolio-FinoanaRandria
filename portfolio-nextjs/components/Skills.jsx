import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 min-h-[900px]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <motion.p whileInView={{opacity : [0,1],x:[-30,0]}} transition={{duration:0.4,}}  className='text-xl  tracking-widest uppercase text-[#5651e5]'>Skills</motion.p>
          <motion.h2 whileInView={{opacity : [0,1],x:[-50,0]}} transition={{duration:0.4,}}  className='py-4'>What I Can Do</motion.h2>
          <motion.div whileInView={{opacity : [0,1],x:[-100,0]}} transition={{duration:0.4,}}  className='grid md:grid-flow-col-2 lg:grid-cols-4 gap-8'>
           
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/html.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/css.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>CSS</h3>
                    </div>
                </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/javascript.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>JavaScript</h3>
                    </div>
                </div>
            </div>



            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/react.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>React</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/nextjs.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>Next</h3>
                    </div>
                </div>
            </div>
      



            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/tailwind.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>Tailwind</h3>
                    </div>
                </div>
            </div>



            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/node.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>NodeJs</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/express.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>ExpressJS</h3>
                    </div>
                </div>
            </div>



            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/mongo.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>Mongo DB</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/github1.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>GitHub</h3>
                    </div>
                </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/python.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>Python</h3>
                    </div>
                </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/java.png" width="64" height="64" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>JAVA</h3>
                    </div>
                </div>



                
            </div>


            

          </motion.div>

          
      </div>
    </div>
  )
}

export default Skills
