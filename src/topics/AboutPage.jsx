import { SocialLinkBubble } from '../SocialLinkBubble';
import ProfilePicture from '../imgs/PlagueProfile1Cropped.png';
import githubMaskUrl from '../imgs/github-mark/github-mark.png';
import itchLogoUrl from '../imgs/itchio-textless-black.svg';

export const AboutPage = () => {

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-extrabold text-4xl">MrManBLC</h1>
      </div>

      <div className="flex justify-center m-4">
        <img src={ProfilePicture} className="rounded-full w-96"/>
      </div>

      <div className="flex justify-center">
        <h2 className="font-bold text-4xl">My Socials</h2>
      </div>

      <div className="h-4"/>

      <div className="flex justify-center">
        <SocialLinkBubble username="MrManBLC" link="https://github.com/mrmanblc" logoImgSrc={githubMaskUrl} socialName={"GitHub"}/>
        <SocialLinkBubble username="MrManBLC" link="https://mrmanblc.itch.io" logoImgSrc={itchLogoUrl} socialName={"itch.io"}/>
      </div>

      
    </div>
  );
}