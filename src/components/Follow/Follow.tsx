import "./Follow.scss";

export const Follow = () => {
  return (
    <section className="follow">
      <h3 className="follow__title">FOLLOW US</h3>
      <div className="follow__social">
        <a href="https://www.facebook.com/SifuGame" target="_blank" className="follow__social-link">
          <img src="/images/icons/facebook-icon.svg" alt="facebook" />
        </a>
        <a href="https://twitter.com/SifuGame" target="_blank" className="follow__social-link">
          <img src="/images/icons/twitter-icon.svg" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/c/Sloclap/videos" target="_blank" className="follow__social-link">
          <img src="/images/icons/youtube-icon.svg" alt="youtube" />
        </a>
        <a href="https://www.reddit.com/r/SifuGame/" target="_blank" className="follow__social-link">
          <img src="/images/icons/reddit-icon.svg" alt="reddit" />
        </a>
      </div>
      <div className="follow__technology">
        <a href="http://sloclap.com/en" className="sloclap-logo" target="_blank">
          <img src="/images/icons/sloclap-icon.svg" alt="sloclap" />
        </a>
        <a href="https://kepler-interactive.com/" className="kepler-logo" target="_blank">
          <img src="/images/icons/kepler-icon.svg" alt="kepler" />
        </a>
        <a href="https://www.unrealengine.com/en-US" className="unreal-logo" target="_blank">
          <img src="/images/icons/unreal-icon.svg" alt="unreal engine" />
        </a>
      </div>
    </section>
  );
};
