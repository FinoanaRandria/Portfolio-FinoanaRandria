import React, { useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
          alert('Email is send')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>

        <h2 className="py-4">Contact </h2>

        <div className="grid lg:grid-cols-5 gap-8">
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
                      <FaLinkedin />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <HiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
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
                    <label className="uppercase text-sm py-2" text-sm py-2>
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" text-sm py-2>
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
                  <label className="uppercase text-sm py-2" text-sm py-2>
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2" text-sm py-2>
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2" text-sm py-2>
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button  className="w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-300 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
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
