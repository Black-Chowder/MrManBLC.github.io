import './NavBar.css';

export const NavBar = () => {
  return(
    <div className="pt-0 px-5 h-full overflow-y-hidden w-full">
      
      {/* Logo here */}
      <div className="LogoContainer my-5 bg-space-cadet-800 w-full content-center p-1 rounded-md shadow-lg shadow-space-cadet-900">
        <h1 className="text-3xl font-extrabold text-center">MrManBLC</h1>
      </div>

      {/* Content listed here */}
      <div className="content display">
        <ul>
          <li>About Me</li>
          <li>Resume</li>
          <li>Games</li>
        </ul>
      </div>
    </div>
  )
}