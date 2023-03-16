import React , {useRef, useEffect}from "react";
import Image from "next/image";
import animationData2 from '../public/assets/json/40238-happy-coding.json'
import lottie from "lottie-web";
import vscode from '../assets/tools/file_type_vscode_icon_130084.png'
import vsstudio from '../assets/tools/visual_studio_18908.png'
import eclipse from '../assets/tools/eclipse_icon_191751.png'
import androidstd from '../assets/tools/android_studio_alt_macos_bigsur_icon_190394.png'
import pycharm from '../assets/tools/PyCharm_Icon.svg.png'
import unity from '../assets/tools//unity_logo_icon_144772.png'
import ubuntu from '../assets/tools/ubuntu_14143.png'
import linux from '../assets/tools/kisspng-linux-fedora-unix-operating-systems-linux-5ab6faa3d2f047.949926281521941155864.png'


import {motion} from 'framer-motion';
const Tools = () => {



    const containerRef2 = useRef(null);
    let anim = null;
  /* tsy maintsy atao destroy le anim satria tsy vaofafa tsara ny cache le sary de miduplique le izy */
    useEffect(() => {
      anim = lottie.loadAnimation({
        container: containerRef2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData2,
      });
  
      return () => {
        anim.destroy();
      };
    }, []);






  return (
    <div id="tools" className="w-full lg:h-screen min-h-[900px] h-auto  p-2">
      <div  className="max-w-[1240px] mx-auto flex flex-col justify-center h-full  ">
        <motion.p whileInView={{opacity : [0,1],x:[-30,0]}} transition={{duration:0.4,}} className="text-xl  tracking-widest uppercase text-[#5651e5]">
          Tools
        </motion.p>
        <motion.h2 whileInView={{opacity : [0,1],x:[-50,0]}} transition={{duration:0.4,}} className="py-4">What I use</motion.h2>
        <motion.div whileInView={{opacity : [0,1],x:[-100,0]}} transition={{duration:0.4,}}className="grid md:grid-flow-col-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={vscode}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vs Code</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={vsstudio}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Visual Studio</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={pycharm}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Pycharm</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={eclipse}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Eclipse</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={linux}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ubuntu}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ubuntu</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={androidstd}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Android STD</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={unity}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Unity</h3>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-[300px] flex justify-center mx-auto mb-4" ref={containerRef2}></div>
      </div>
    </div>
  );
};

export default Tools;
