import { useRef, useEffect, useState } from 'react';
import './NavBar.css';

export const NavBar = ({itemSelected}) => {
  const boundingRef = useRef();
  const aboutMeRef = useRef();
  const resumeRef = useRef();
  const gamesRef = useRef();
  const navY = useState(0);

  const calcNavBarTransform = (curRef) => {
    navY[1](curRef.current.getBoundingClientRect().top - boundingRef.current.getBoundingClientRect().top);
  }

  useEffect(() => {
    window.addEventListener("scroll", calcNavBarTransform, true);
    return () => {
      window.removeEventListener("scroll", calcNavBarTransform, true);
    };
  }, []);

  return(
    <div className="pt-0 px-5 h-full overflow-y-hidden overflow-x-visible w-full">
      
      {/* "Logo" here */}
      <div className="LogoContainer my-5 bg-space-cadet-800 w-full p-1 rounded-md shadow-lg shadow-space-cadet-900">
        <h1 className="text-3xl font-extrabold text-center">MrManBLC</h1>
      </div>

      {/* Content listed here */}
      <div className="content display relative z-0">
        <div className="absolute rounded-md w-full h-10 bg-lavender z-10 opacity-30" 
        style={{top: 0, transform:`translate(0px, ${navY[0]}px)`, transitionDuration: '.3s', 
        boxShadow: `0px 0px 15px #EAEAEA`}}></div> {/* Selector */}

        <ul className="flex flex-col w-full" ref={boundingRef}>
          <li ref={aboutMeRef} id="About Me" className="p-2 z-20" onClick={() => {calcNavBarTransform(aboutMeRef)}}>About Me</li>
          <li ref={resumeRef} id="Resume" className="p-2 z-20" onClick={() => {calcNavBarTransform(resumeRef)}}>Resume</li>
          <li ref={gamesRef} id="Games" className="p-2 z-20" onClick={() => {calcNavBarTransform(gamesRef)}}>Games</li>
        </ul>
      </div>
    </div>
  );
}