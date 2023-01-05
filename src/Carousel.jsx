import React from "react";

export const CarouselItem = ({ children }) => {
  return(
    <div className="h-full max-w-full overflow-y-auto">
      {children}
    </div>
  );
}

export const Carousel = ({ setDisplayIndex, displayIndex, children }) => {

  return (
    <div className="h-full w-full overflow-y-hidden">
      <div className="h-full w-full flex flex-wrap" 
      style={{transform:`translateY(-${displayIndex}00%)`, transition: "transform 0.3s"}}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { width: "100%", height: "100%" });
        })}

      </div>
    </div>
  )
}