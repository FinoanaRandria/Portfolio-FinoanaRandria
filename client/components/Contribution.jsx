import React, { useRef, useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import {motion} from 'framer-motion'
import animationData3 from '../public/assets/json/16421-github-icon-black.json'

const Contribution = () => {



  

  return (
    <div id="stats" className="w-full lg:h-screen min-h-[900px] h-auto  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full  ">
      <motion.p whileInView={{opacity : [0,1],x:[-30,0]}} transition={{duration:0.4,}} className="text-xl  tracking-widest uppercase text-[#5651e5]">
          Stats
        </motion.p>
        <motion.h2 whileInView={{opacity : [0,1],x:[-50,0]}} transition={{duration:0.4,}} className="py-4">Github stats</motion.h2>
        <motion.div whileInView={{opacity : [0,1],x:[-100,0]}} transition={{duration:0.4,}}  className="flex flex-row justify-center mt-10">
        <GitHubCalendar fontSize={17}  username="finoanarandria" />
        
        </motion.div>
      </div>
    </div>
  );
};

export default Contribution ;
