
export const SocialLinkBubble = ({username, link, logoImgSrc, socialName}) => {

  return(
    <a title={socialName} className="h-14 w-52 rounded-full m-2 p-2 flex" style={{boxShadow: "0px 0px 5px #6176A8"}} href={link}>
      <img className="h-full" src={logoImgSrc}></img>

      <div className="w-full h-full grid place-items-center">
        <p className="text-xl font-bold">{username}</p>
      </div>
    </a>
  );
}