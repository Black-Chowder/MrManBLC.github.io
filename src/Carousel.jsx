import React from "react";

export const CarouselItem = ({ children }) => {
  return(
    <div className="h-full inline-flex overflow-hidden">
      {children}
    </div>
  );
}

export const Carousel = ({ setDisplayIndex, displayIndex, children }) => {

  return (
    <div className="h-full" style={{overflow: 'hidden'}}>
      <div className="h-full flex flex-wrap" 
      style={{transform:`translateY(-${displayIndex}00%)`, whiteSpace:"nowrap", transition: "transform 0.3s"}}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { width: "100%", height: "100%" });
        })}
        {console.log(`Display index = ${displayIndex}`)}

      </div>
    </div>
  )
}