import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';

function App() {
  const itemSelected = useState(1);

  return (
    <div className="main box">
      <div className="row content">

        <div className="flex flex-row h-full bg-gradient-to-br from-space-cadet-400 to-space-cadet-700">

          {/* left-handed nav bar */}
          <div className="flex relative w-72 grow-0 h-full">
            <div className="absolute bg-space-cadet-700 h-full w-full opacity-80 z-0"></div>

            <NavBar className="z-10" itemSelected={itemSelected}/>
          </div>

          {/* main content */}
          <div className="flex w-full max-h-full overflow-hidden grow opacity-80 relative">
            <div className="contentShadow"></div>


          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
