import resumeUrl from './../files/resume_guide.pdf';

export const ResumePage = () => {

  return (
    <div>
      <a href={resumeUrl} download={"Resume.pdf"}>Download Resume</a>
      <p>
        As of right now I'm not putting my actual resume in here, but I probably will eventually
      </p>
    </div>
  );
}