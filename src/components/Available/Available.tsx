import './Available.scss';

export const Available = () => {
  return (
    <section className='available'>
      <div className='available__top'>
        <h2 className='available__title'>available</h2>
        <div className='available__dot'></div>
        <h2 className='available__title-japan'>可用</h2>
      </div>
      <ul className="available__list">
            <li className="available__item">
              <a href="https://store.playstation.com/ru-ua/concept/10001973/" target="_blank" className="available__link">
                <img
                  src="/images/icons/big-playstation-icon.svg"
                  alt="playstation icon"
                />
              </a>
            </li>
            <li className="available__item">
              <a href="https://store.epicgames.com/en-US/p/sifu" target="_blank" className="available__link">
                <img
                  src="/images/icons/big-epic-icon.svg"
                  alt="epicgames icon"
                />
              </a>
            </li>
            <li className="available__item">
              <a href="https://www.nintendo.com/store/products/sifu-switch/" target="_blank" className="available__link">
                <img
                  src="/images/icons/big-nintendo-icon.svg"
                  alt="nintendo icon"
                />
              </a>
            </li>
            <li className="available__item">
              <a href="https://store.steampowered.com/agecheck/app/2138710/?utm_source=website&utm_medium=homepage&utm_campaign=sifu" target="_blank" className="available__link">
                <img
                  src="/images/icons/big-steam-icon.svg"
                  alt="steam icon"
                />
              </a>
            </li>
            <li className="available__item">
              <a href="https://www.xbox.com/ru-RU/games/store/sifu/9p7pf6zp3958" target="_blank" className="available__link">
                <img
                  src="/images/icons/big-xbox-icon.svg"
                  alt="xbox icon"
                />
              </a>
            </li>
          </ul>
    </section>
  )
}