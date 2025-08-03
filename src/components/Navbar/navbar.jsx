import React, { useEffect, useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';

const Navbar=()=>{
  //for responsive toggle menu  
  const[isOpen, setIsOpen]=useState(false);
  const[activeSection, setActiveSection]= useState("");
  const[isScrolled, setIsScrolled]=useState(false);

  //check scroll and change bg
  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY>50);
    }

    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
  },[])

  {/*scroll function*/}
  const handleMenuItemClick=(sectionId)=>{
    setActiveSection(sectionId);  //as soon as we click on any particular section our navbar should get closed
    setIsOpen(false);
  }

  const menuItems=[
    //if we click on any menuitem we will directly redirect to that particular section
    {id:"about",label:"About"},     
    {id:"Education",label:"Education"},
    {id:"skills",label:"Skills"},
    {id:"projects",label:"Projects"}
  ]

    return(
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414 ] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
        <div className="text-white py-5 flex justify-between items-center">

          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-white">Bhumica Arora</span>
        </div>

        {/*Desktop menu*/}
        <ul className="hidden md.flex space-x-8 text-gray-300">
          {/*map is used to access all menuitems together*/}
          {menuItems.map((item)=>(            
          //key is used for unique identification
            <li key={item.id}className={`cursor-pointer hover:text-[#8245ec] ${
              activeSection===item.id? "text-[#8245ec]":""
            }`}>     
                <button onClick={()=>handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
            </li>
          ))}
        </ul>

        {/*social icons*/}
        <div className="hidden md:flex space-x-4">
          <a
          href="https://github.com/BhumicaArora"
          target="_blank" //link open on new page
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24}/>
          </a>
          <a
          href="https://leetcode.com/u/Bhumicaarora/"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec]"
          >
            <SiLeetcode size={24}/>
          </a>
        </div>

        {/*mobile menu icons*/}
        <div className="md:hidden">
          {
            isOpen?(
              <FiX className="text-3xl text-[#8245ec]cursor pointer"
              onClick={()=> setIsOpen(false)}/>       
            ):(
              <FiMenu className="text-3xl text-[#8245ec]cursor pointer"
              onClick={()=> setIsOpen(true)}/>
            )         
          }
        </div>
      </div>

      {/*mobile menu items*/}
      {isOpen &&(
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/BhumicaArora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Bhumicaarora/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </ul>
        </div>
       )
      }
    </nav>
  );
}
export default Navbar;