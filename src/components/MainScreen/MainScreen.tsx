import "./MainScreen.scss";

export const MainScreen = () => {
  return (
    <section className="main">
      <div className="main__available">
        <h3 className="main__subtitle">available on</h3>
        <div className="main__social social">
          <ul className="social__list">
            <li className="social__item">
              <a href="https://store.playstation.com/ru-ua/concept/10001973/" target="_blank" className="social__link active">
                <img
                  src="/images/icons/playstation-icon.svg"
                  alt="playstation icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://store.epicgames.com/en-US/p/sifu" target="_blank" className="social__link">
                <img
                  src="/images/icons/epic-icon.svg"
                  alt="epicgames icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.nintendo.com/store/products/sifu-switch/" target="_blank" className="social__link">
                <img
                  src="/images/icons/nintendo-icon.svg"
                  alt="nintendo icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://store.steampowered.com/agecheck/app/2138710/?utm_source=website&utm_medium=homepage&utm_campaign=sifu" target="_blank" className="social__link">
                <img
                  src="/images/icons/steam-icon.svg"
                  alt="steam icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.xbox.com/ru-RU/games/store/sifu/9p7pf6zp3958" target="_blank" className="social__link">
                <img
                  src="/images/icons/xbox-icon.svg"
                  alt="xbox icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
