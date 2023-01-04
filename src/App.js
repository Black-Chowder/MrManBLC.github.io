import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Carousel, CarouselItem } from './Carousel';

function App() {
  const itemSelected = useState(1);

  const topicIndex = useState(0);

  return (
    <div className="main box">
      <div className="row content">

        <div className="flex flex-row h-screen bg-gradient-to-br from-platinum to-lavender">

          {/* left-handed nav bar */}
          <div className="flex relative w-72 grow-0 h-full">
            <div className="absolute bg-gradient-to-b from-lilac to-space-cadet-400 h-full w-full z-0 rounded-r-3xl"></div>

            <NavBar className="z-10" itemSelected={topicIndex}/>
          </div>

          {/* main content */}
          <div className="flex w-auto max-h-full grow p-3">
            <div className="rounded-3xl h-auto overflow-y-auto overflow-x-clip p-5" style={{boxShadow: "0px 0px 10px #6176A8"}}>
              
              <Carousel displayIndex={topicIndex[0]} setDisplayIndex={topicIndex[1]}>
                <CarouselItem><p>Velit pariatur do ut deserunt anim nulla deserunt reprehen cillum laborum excepteur dolor nostrud. Eiusmod sunt sunt pariatur nostrud ipsum nostrud </p></CarouselItem>
                <CarouselItem><p>Laboris ipsum anim laboris culpa mollit nostrud reprehenderit labore deserunt. Nostrud quis nulla aliquip ea dolore excepteur ea esse minim esse.</p></CarouselItem>
                <CarouselItem><p>Minim exercitation enim ad ex consectetur pariatur enim nostrud. Deserunt exercitation exercitation in quis dolor velit do incididunt cillum sunt. </p></CarouselItem>
              </Carousel>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
