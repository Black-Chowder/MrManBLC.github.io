import title_DiceyDefense from '../imgs/games/title_DiceyDefense.png';
import title_PrisonBall from '../imgs/games/title_PrisonBall.png';
import title_Frogs from '../imgs/games/title_Frogs.png';
import title_DevilInHeaven from '../imgs/games/title_DevilInHeaven.png';
import title_LittleSheepOfMine from '../imgs/games/title_LittleSheepOfMine.png';
import '../NavBar.css';
import { Children, useState } from 'react';

export const GamesPage = () => {

  return (
    <div className="w-full mb-5">
      
      <div className="flex flex-wrap gap-10">

        <Game title="Little Sheep of Mine"
          thumbnailSrc={title_LittleSheepOfMine}
          description="This is a test description">

            <p className="text-lg font-semibold">A scared lamb runs away from the cruel care of wicked Shepard Jack, only to run into yet another sticky situation - Hell itself!</p>
            <br/>
            <p className="text-lg font-semibold">Help her fight off the incoming hordes of demons!</p>
        </Game>
        
        <Game title="Dicey Defense" 
          thumbnailSrc={title_DiceyDefense}/>
        
        <Game title="Prison Ball" 
          thumbnailSrc={title_PrisonBall}/>
        
        <Game title="Frogs!"
          thumbnailSrc={title_Frogs}/>
        
        <Game title="Devil In Heaven"
          thumbnailSrc={title_DevilInHeaven}/>
      </div>

    </div>
  );
}


//Note: Src img ideal ratio = 630x500
//      Minimum = 315x250
const Game = ({ title, thumbnailSrc, description, children }) => {
  const [popupActive, setPopupActive] = useState(false);

  const MouseOver = (e) => {
    setPopupActive(true);
  }

  const MouseOut = (e) => {
    setPopupActive(false);
  }

  const Popup = ({children}) => {
    return(
      <div className={`absolute w-full h-full -right-full z-10`}
        style={{opacity: `${popupActive ? 1 : 0}`, transition: 'all 0.3s', pointerEvents: `${popupActive ? 'auto' : 'none'}`}}>
        
        <div className="ml-3 w-full h-full bg-gradient-to-br from-lilac to-space-cadet-400 rounded-xl p-3 overflow-hidden">
          
          {children}
        </div>
      </div>
    )
  }

  return(
    <div className="w-72 hover:w-96 h-fit bg-gradient-to-br from-lilac to-space-cadet-400 rounded-xl relative"
      style={{transition: "all 0.3s", width: `${popupActive ? '24' : '18'}rem`}}>

      {/* Overlay */}
      <div className="w-full h-full absolute"
        onMouseOver={MouseOver}
        onMouseLeave={MouseOut}/>

      <Popup>
        {children}
      </Popup>

      {/* Display Content */}
      <div className="h-16 flex justify-center pt-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
      </div>

      <img className="w-full p-2 rounded-2xl" src={thumbnailSrc}/>

      <div className="h-16 p-2">
        <p>{description}</p>
      </div>

    </div>
  );
}