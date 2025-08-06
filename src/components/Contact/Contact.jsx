import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {FiPhone} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';

const Contact = () => {
  const formRef = useRef(null);

  return (
    <section
    id="contact"
    className='scroll-mt-32 flex flex-col items-center justify-center py-23 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
      {/*Section title*/}
      <div className='text-center mb-6'>
        <h2 className='text-4xl font-bold text-white'>CONTACT</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
        I'd love to hear from you- reach out for any opportunities or questions</p>
      </div>

        {/*connect info
        <div className='text-center mb-6'>
          <h3 className='mb-4 text-xl font-semibold text-white text-center'>
            Connect with me
            </h3>
            <div className='w-20 h-0.5 bg-gray-400 mx-auto mt-1'></div>
          </div>
*/}

          {/*contact info*/}
          <div className="flex flex-col items-center gap-2 text-white">
         
          <a
          href="tel:+91 7417917698"
          className="flex items-center gap-2 hover:text-[#8245ec] transition"
        >
          <FiPhone size={24} />
          <span className="text-lg">+91 7417917698</span>
        </a>
         <a
          href="mailto: bhumicaarora16@gmail.com"
          className="flex items-center gap-3 hover:text-[#8245ec] transition"
          >
            <SiGmail size={24}/>
            <span className="text-lg">bhumicaarora16@gmail.com</span>
          </a>
      </div>

      {/*contact from*/}
      <form
      ref={formRef}
        className="m-12 w-full max-w-xl bg-[#0d081f] p-8 rounded-lg shadow-lg border border-gray-700"
        onSubmit={(e) =>{
         e.preventDefault();
         window.location.reload();
        }}
        >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-[#8245ec] text-white py-3 rounded-md hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </div>
      </form>

    </section>
  )
}

export default Contact;
