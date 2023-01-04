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
          <div className="flex w-72 grow-0 bg-space-cadet-700 h-full">

            <NavBar itemSelected={itemSelected}/>

          </div>

          {/* main content */}
          <div className="flex w-full grow bg-opacity-0">



          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
