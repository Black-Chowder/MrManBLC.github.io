import thumbnail_DiceyDefense from '../imgs/games/Dicey Defense/thumbnail.png';
import s1_DiceyDefense from '../imgs/games/Dicey Defense/s1.png';
import s2_DiceyDefense from '../imgs/games/Dicey Defense/s2.jpg';
import s3_DiceyDefense from '../imgs/games/Dicey Defense/s3.jpg';
import s4_DiceyDefense from '../imgs/games/Dicey Defense/s4.jpg';
import s5_DiceyDefense from '../imgs/games/Dicey Defense/s5.png';
import thumbnail_PrisonBall from '../imgs/games/Prison Ball/thumbnail.png';
import s1_PrisonBall from '../imgs/games/Prison Ball/s1.jpg';
import s2_PrisonBall from '../imgs/games/Prison Ball/s2.jpg';
import s3_PrisonBall from '../imgs/games/Prison Ball/s3.png';
import s4_PrisonBall from '../imgs/games/Prison Ball/s4.png';
import s5_PrisonBall from '../imgs/games/Prison Ball/s5.png';
import thumbnail_Frogs from '../imgs/games/Frogs/thumbnail.png';
import s1_Frogs from '../imgs/games/Frogs/s1.jpg';
import s2_Frogs from '../imgs/games/Frogs/s2.jpg';
import s3_Frogs from '../imgs/games/Frogs/s3.jpg';
import thumbnail_DevilInHeaven from '../imgs/games/Devil In Heaven/thumbnail.png';
import s1_DevilInHeaven from '../imgs/games/Devil In Heaven/s1.jpg';
import s2_DevilInHeaven from '../imgs/games/Devil In Heaven/s2.jpg';
import s3_DevilInHeaven from '../imgs/games/Devil In Heaven/s3.jpg';
import s4_DevilInHeaven from '../imgs/games/Devil In Heaven/s4.jpg';
import thumbnail_LittleSheepOfMine from '../imgs/games/Little Sheep of Mine/thumbnail.png';
import s1_LittleSheepOfMine from '../imgs/games/Little Sheep of Mine/s1.png';
import s2_LittleSheepOfMine from '../imgs/games/Little Sheep of Mine/s2.png';
import s3_LittleSheepOfMine from '../imgs/games/Little Sheep of Mine/s3.jpg';
import '../NavBar.css';
import { useState } from 'react';

export const GamesPage = () => {

  return (
    <div className="w-full mb-5 overflow-x-clip">
      
      <div className="flex flex-wrap gap-10">

        <Game title="Little Sheep of Mine"
          thumbnailSrc={thumbnail_LittleSheepOfMine}
          link="https://mrmanblc.itch.io/sweet-lamb-of-mine">

            <p className="text-lg font-semibold">A scared lamb runs away from the cruel care of wicked Shepard Jack, only to run into yet another sticky situation - Hell itself!</p>
            <br/>
            <p className="text-lg font-semibold">Help her fight off the incoming hordes of demons!</p>
            <br/>
            <img className="w-full p-2 rounded-2xl" src={s2_LittleSheepOfMine}/>
            <img className="w-full p-2 rounded-2xl" src={s3_LittleSheepOfMine}/>
        </Game>
        
        <Game title="Dicey Defense" 
          thumbnailSrc={thumbnail_DiceyDefense}
          link="https://mrmanblc.itch.io/dicey-defense">
          
          <p className="text-lg font-semibold">
            Defend your road against the onslaught of evil casino items! Place dice-towers with different numbers of sides and watch as they crumble your enemies!
          </p>
          <br/>
          <img className="w-full p-2 rounded-2xl" src={s2_DiceyDefense}/>
          <img className="w-full p-2 rounded-2xl" src={s3_DiceyDefense}/>
        </Game>
        
        <Game title="Prison Ball" 
          thumbnailSrc={thumbnail_PrisonBall}
          link="https://mrmanblc.itch.io/prison-ball">

          <img className="w-full p-2 rounded-2xl" src={s1_PrisonBall}/>
          <img className="w-full p-2 rounded-2xl" src={s5_PrisonBall}/>
        </Game>
        
        <Game title="Frogs!"
          thumbnailSrc={thumbnail_Frogs}
          link="https://mrmanblc.itch.io/frogs">

          <img className="w-full p-2 rounded-2xl" src={s1_Frogs}/>
          <img className="w-full p-2 rounded-2xl" src={s2_Frogs}/>
          <img className="w-full p-2 rounded-2xl" src={s3_Frogs}/>
        </Game>
        
        <Game title="Devil In Heaven"
          thumbnailSrc={thumbnail_DevilInHeaven}
          link="https://mrmanblc.itch.io/a-devil-in-heaven">
          
          <img className="w-full p-2 rounded-2xl" src={s1_DevilInHeaven}/>
          <img className="w-full p-2 rounded-2xl" src={s2_DevilInHeaven}/>
          <img className="w-full p-2 rounded-2xl" src={s3_DevilInHeaven}/>
          <img className="w-full p-2 rounded-2xl" src={s4_DevilInHeaven}/>
        </Game>
      </div>

    </div>
  );
}


//Note: Src img ideal ratio = 630x500
//      Minimum = 315x250
const Game = ({ title, thumbnailSrc, description, link, children }) => {
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
        <div className="ml-3 w-full h-full bg-gradient-to-br from-lilac to-space-cadet-400 rounded-xl p-3 overflow-hidden shadow-2xl">
          {children}
        </div>
      </div>
    );
  }

  return(
    <div className="w-72 hover:w-96 h-fit bg-gradient-to-br from-lilac to-space-cadet-400 rounded-xl relative"
      style={{transition: "all 0.3s", width: `${popupActive ? '24' : '18'}rem`}}>

      {/* Overlay */}
      <a className="w-full h-full absolute"
        href={link}
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