import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h1 className="about__title">
        About Us
        <div className="aboutTitle"></div>
      </h1>
      <div className="about__container">
        <div className="left__About__Container">
          <div className="left__about__img"></div>
        </div>
        <div className="right__About__Container">
          <div className="right__about__top__sub__container">
            <div className="right__about__top__sub__container__box">
              <span className="right__about__top__sub__container__box__title">
                Tournaments played
              </span>
              <span className="right__about__top__sub__container__box__number">
                30
              </span>
            </div>
            <div className="right__about__top__sub__container__box">
              <span className="right__about__top__sub__container__box__title">
                Tournaments won
              </span>
              <span className="right__about__top__sub__container__box__number">
                10
              </span>
            </div>
            <div className="right__about__top__sub__container__box">
              <span className="right__about__top__sub__container__box__title">
                Award won
              </span>
              <span className="right__about__top__sub__container__box__number">
                5
              </span>
            </div>
          </div>
          <div className="right__about__middle__sub__container">
            <span className="right__about__middle__sub__container__text">
              He is a professional esports gamer who competes in the game Dota
              2. He is the carry and star player of the team Evil Geniuses, one
              of the most successful and popular teams in the world. He is known
              for his incredible mechanical skills, game sense, and versatility.
              He can play any hero and any role, and often surprises his
              opponents with his unconventional picks and builds.
            </span>
          </div>
          <div className="right__about__bottom__sub__container">
            <div className="about__button">
              <button className="about__btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
