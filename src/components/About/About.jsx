import React from 'react'
import { TypeAnimation} from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/photo.png';

const About = () => {
  return (
    <section
    id='about'
    className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Bhumica Arora
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            
            <TypeAnimation
            
              sequence={[
                'Frontend Developer',1000,
                'React JS Developer',1000,
                'Coder',1000,
              ]}
              speed={70}
              deletionspeed={80}
              repeat={Infinity}
              cursor={true}
              className='text-[#8245ec'
            />
          </h3>
          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           Hi, I am a passionate Frontend Developer with a strong focus on building clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and React.js. 
           I enjoy turning complex problems into elegant, efficient web solutions. I am constantly exploring new tools and frameworks to improve my skills and deliver the best user experience.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ioyPymeGjBHC9zf-6Z8pWVrs8w3mLGki/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}  
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Bhumica Arora"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
