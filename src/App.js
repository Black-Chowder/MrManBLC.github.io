import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';

function App() {
  const itemSelected = useState(1);

  return (
    <div className="main box">
      <div className="row content">

        <div className="flex flex-row h-screen bg-gradient-to-br from-platinum to-lavender">

          {/* left-handed nav bar */}
          <div className="flex relative w-72 grow-0 h-full">
            <div className="absolute bg-gradient-to-b from-lilac to-space-cadet-400 h-full w-full z-0 rounded-r-3xl"></div>

            <NavBar className="z-10" itemSelected={itemSelected}/>
          </div>

          {/* main content */}
          <div className="flex w-full max-h-full grow p-3">
            <div className="rounded-3xl w-full h-auto overflow-y-auto p-5" style={{boxShadow: "0px 0px 10px #6176A8"}}>
              <p>lorem ipsum<br /></p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
