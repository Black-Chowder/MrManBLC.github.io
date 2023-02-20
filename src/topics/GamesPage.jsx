import title_DiceyDefense from '../imgs/games/title_DiceyDefense.png';
import title_PrisonBall from '../imgs/games/title_PrisonBall.png';
import title_Frogs from '../imgs/games/title_Frogs.png';
import title_DevilInHeaven from '../imgs/games/title_DevilInHeaven.png';
import title_LittleSheepOfMine from '../imgs/games/title_LittleSheepOfMine.png';
import '../NavBar.css';

export const GamesPage = () => {

  return (
    <div className="w-full mb-5">
      
      <div className="flex flex-wrap gap-10">

        <Game title="Little Sheep of Mine"
          thumbnailSrc={title_LittleSheepOfMine}/>
        
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
const Game = ({ title, thumbnailSrc, description }) => {
  const MouseOver = (e) => {
    console.log("Mouse entered");
  }

  const MouseOut = (e) => {
    console.log("Mouse left");
  }



  return(
    <div className="w-72 hover:w-96 h-fit bg-gradient-to-br from-lilac to-space-cadet-400 rounded-xl relative"
      style={{transition: "all 0.3s"}}>

      {/* Overlay */}
      <div className="w-full h-full absolute"
        onMouseOver={MouseOver}
        onMouseLeave={MouseOut}/>

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