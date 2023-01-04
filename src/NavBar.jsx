import { useRef, useEffect, useState } from 'react';
import './NavBar.css';

export const NavBar = ({itemSelected}) => {
  const topicsListRef = useRef();
  const selectedBarY = useState(0);

  const topicRefs = [];
  
  //Calculates the y position of the nav bar according to the component passed in
  const calcNavBarTransform = (curRef) => {
    selectedBarY[1](curRef.current.getBoundingClientRect().top - topicsListRef.current.getBoundingClientRect().top);
  }

  useEffect(() => {
    window.addEventListener("scroll", calcNavBarTransform, true);
    return () => {
      window.removeEventListener("scroll", calcNavBarTransform, true);
    };
  }, []);

  //Returns list component to be used in topics list
  const CreateTopic = (name) => {
    const thisRef = useRef();
    topicRefs.push(thisRef);
    return (
      <li 
        ref={thisRef} 
        id={name}
        className="Topic" 
        onClick={() => calcNavBarTransform(thisRef)}>
          {name}
      </li>
    );
  }

  return(
    <div className="pt-0 px-5 h-full w-full z-10">
      
      {/* "Logo" here */}
      <div className="LogoContainer bg-space-cadet-800 shadow-lg shadow-space-cadet-900">
        <h1 className="text-3xl font-extrabold text-center">MrManBLC</h1>
      </div>

      {/* Content listed here */}
      <div className="TopicsContainer">
        <div className="SelectedBar bg-lavender" 
        style={{transform:`translate(0px, ${selectedBarY[0]}px)`}}></div> {/* Selector */}

        <ul className="flex flex-col" ref={topicsListRef}>
          {CreateTopic("About Me")}
          {CreateTopic("Resume")}
          {CreateTopic("My Games")}
        </ul>
      </div>
    </div>
  );
}