import resumeUrl from './../files/resume_guide.pdf';

export const ResumePage = () => {

  return (
    <div className="w-full mb-5">

      <div className="flex flex-col">

        <div className="flex justify-center">
          <h1 className="font-extrabold text-4xl">MrManBLC</h1>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h2 className="font-semibold text-lg">gman.dude132@gmail.com</h2>   
            <p className="mx-3">|</p>         
            <a className="font-semibold text-lg underline" href="https://github.com/MrManBLC">GitHub</a>
            <p className="mx-3">|</p>
            <a className="font-semibold text-lg underline" href="https://mrmanblc.itch.io/">Itch.io</a>
            <p className="mx-3">|</p>
            <a className="font-semibold text-lg underline" href={resumeUrl} download={"Resume.pdf"}>Download Resume</a>
          </div>
        </div>
      </div>
      

      <h1 className="px-12 font-extrabold text-2xl mb-3">Work Experience</h1>
      <div className="flex flex-col w-full px-12 h-fit gap-3">

        <Experience company="University of Rochester" location="Rochester, NY" title="Teaching Assistant" time="8/22 — Present">
          <li>Grade coding assignment</li>
          <li>Lead bi-weekly lab sessions to assist students with homework and understanding of course material</li>
        </Experience>

        <Experience company="Professional Physical Therapy" location="New York, NY" title="PT Assistant" time="5/21 — 8/21">
          <li>Assisted patients in completing their physical therapy exercises</li>
          <li>Maintained therapy stations and exercise equipment</li>
        </Experience>

        <Experience company="Mizuho Securities" location="New York, NY" title="Intern" time="5/18 — 8/18">
          <li>Built and unit-tested a general purpose C# library to license-protect application from unauthorized use</li>
          <li>Programmed a license key generator application</li>
          <li>Wrote coherent documentation of library usage</li>
        </Experience>

      </div>

      <h1 className="px-12 font-extrabold text-2xl mb-3 mt-5">Technical Skills</h1>
      <div className="px-12 h-fit">
        <div className="w-full rounded-xl px-8 py-2" style={{boxShadow: "0px 0px 10px #6176A8", height: 'fit-content'}}>
          <ul className="list-disc pl-9">
            <li>Programming Languages: C#, JavaScript/TypeScript, C, Java, Python, Unity, Arduino, HTML and CSS</li>
            <li>Libraries & Frameworks: MERN (MongoDB, express.js, react, node.js), Socket.io, XNA, MonoGame, Puppeteer, pandas, multer, leaflet</li>
            <li>3D design softwares: Fusion360, Blender, Maya and OpenSCAD</li>
          </ul>
        </div>
      </div>

      <h1 className="px-12 font-extrabold text-2xl mb-3 mt-5">Extracurricular Leadership Activities</h1>
      <div className="px-12 h-fit flex flex-col gap-3">

        <Experience company="University of Rochester" location="Rochester, NY" title="President of Video Game Dev. Club" time="5/22 — Present">
          <li>Lead workshops dedicated to expanding the knowledge of club members in an engaging way</li>
          <li>Organize events, competitions and collaborations with other organizations</li>
        </Experience>

        <Experience company="The Calhoun School" location="New York, NY" title="Founder and President of Project Euler Coding Club" time="9/19 — 5/20"/>

      </div>


    </div>
  );
}

const Experience = ({company, location, title, time, children}) => {    
  return(
    <div className="w-full rounded-xl px-8 py-2" style={{boxShadow: "0px 0px 10px #6176A8", height: 'fit-content'}}>
      <div className="flex justify-between">
        <h2 className="font-bold">{company}</h2>
        <h2 className="font-bold">{location}</h2>
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold">{title}</h3>
        <h3 className="font-semibold">{time}</h3>
      </div>
      <ul className="list-disc pl-9">
        {children}
      </ul>
    </div>
  );
}