import React, { useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast ,{Toaster} from 'react-hot-toast'
import {motion} from 'framer-motion'


const Contact = () => {

const notify = () => toast.success('Thanks your email is sended')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbxpfum",
        "template_sm5ryp4",
        form.current,
        "ztS_JsitRrqmsJyXX"
      )
      .then(
        (result) => {
          console.log('sended')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <div id="contact" className="w-full lg:h-screen min-h-[900px]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <motion.p whileInView={{opacity : [0,1],x:[-30,0]}} transition={{duration:0.4,}}  className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </motion.p>

        <motion.h2 whileInView={{opacity : [0,1],x:[-50,0]}} transition={{duration:0.4,}}  className="py-4">MY Contact </motion.h2>

        <motion.div whileInView={{opacity : [0,1],x:[-100,0]}} transition={{duration:0.4,}}  className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease in duration-300"
                  src="/../public/assets/contact.jpg"
                  width="405"
                  height="155"
                  alt="/"
                />
              </div>

              <div>
                <h3 className="py-2 text-2xl"> Finoana Randri😉</h3>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>

                <div>
                  <p className="uppercase pt-8">Connect with me</p>

                  <div className="flex items-center justify-between py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                       <a href="https://www.linkedin.com/in/randri-finoana-ba771b24a/">
                         <FaLinkedin />
                       </a>
                     
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     
                      <a href="https://github.com/FinoanaRandria">
                         <FaGithub />
                      </a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <a href="">
                        <HiOutlineMail />
                      </a>
                      

                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                       <a href="">
                        <BsFillPersonLinesFill />
                       </a>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {/* fromulaire  sisa */}

              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" >
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" >
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone_number"
                    />
                  </div>
                </div>

                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2" >
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2" >
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2" >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button  className="w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-300 " onClick={notify}>
                  Send Message
                  
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 backdrop:">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
