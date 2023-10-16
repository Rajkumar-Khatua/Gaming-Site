import "./Footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__Container">
        <div className="footer__top__container">
          <div className="footer__top__container__logo__text">
            <div className="logo__img__bg">
              <img
                src="https://s3-alpha-sig.figma.com/img/d196/3951/028f79363e56f1e821f5f8a3e01642d0?Expires=1698019200&Signature=G-1IzpKBLr-Ktx1Jq2VZvcrKYs17N6TV7e0GU23fXQwu~xmJOWXWyYNTemo588Zbs26VhpYAdF-HDmhplOv4VO0zQNzoyz6GZQl~ptDBrLPeXaxb4-oN~XCCqX7pAsu8fu5H8-6SZ8qr0dpWsv9khkUsDVQC66cGT7vD8hrVPO7YOGlJovaPnc2XEFe4bGMglJXIUT7C66dh08jKeCrysXRHUI-mpqAs9DU1LkTVfJEOmBLsDIzBON~ZltnjLz3SS81MPhiZnE9DWIxji748WT0nfjjhDU6RwqK~WcdKVPPfdQ6GCQIEl4MB6oAZrJDYDmAXNqH-~NCRYyDGdA6IMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="logo"
                className="FT__logo"
              />
            </div>
            <span className="__top__text">
              Level Up Your Gaming Experience: Join Our <br /> Exclusive YouTube
              Channel Membership Today!
            </span>
          </div>
          <div className="footer__top__container__button">
            <button className="join__tournament">Join Tournament</button>
          </div>
        </div>
        <div className="footer__bottom__container">
          <div className="footer__bottom__container__top__section">
            <div className="footer__bottom__logo__Links">
              <div className="img__Footer__container">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d196/3951/028f79363e56f1e821f5f8a3e01642d0?Expires=1698019200&Signature=G-1IzpKBLr-Ktx1Jq2VZvcrKYs17N6TV7e0GU23fXQwu~xmJOWXWyYNTemo588Zbs26VhpYAdF-HDmhplOv4VO0zQNzoyz6GZQl~ptDBrLPeXaxb4-oN~XCCqX7pAsu8fu5H8-6SZ8qr0dpWsv9khkUsDVQC66cGT7vD8hrVPO7YOGlJovaPnc2XEFe4bGMglJXIUT7C66dh08jKeCrysXRHUI-mpqAs9DU1LkTVfJEOmBLsDIzBON~ZltnjLz3SS81MPhiZnE9DWIxji748WT0nfjjhDU6RwqK~WcdKVPPfdQ6GCQIEl4MB6oAZrJDYDmAXNqH-~NCRYyDGdA6IMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="logo"
                  className="footer__bottom__logo__img"
                />
              </div>
              {/* Footer navLinks */}
              <div className="footer__bottom__nav__link__container">
                <ul className="footer__B__N__UL">
                  <li className="footer__B__N__LI">About Us</li>
                  <li className="footer__B__N__LI">Sponsorship</li>
                  <li className="footer__B__N__LI">Join Us</li>
                  <li className="footer__B__N__LI">Terms & Conditions </li>
                  <li className="footer__B__N__LI">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom__container__middle__section">
            {/* Form and Text */}
            <div className="footer__bottom__container__MS__NewsLetter">
              <div className="footer__news__letter__container">
                <div className="footer__bottom__container__MS__NewsLetter__text">
                  Newsletter signUp
                  <div className="dash"></div>
                </div>
              </div>
              <div className="footer__bottom__container__MS__NewsLetter__input">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="footer__bottom__container__MS__NewsLetter__input__field"
                />
                <button className="footer__bottom__container__MS__NewsLetter__input__button">
                  Subscribe
                </button>
              </div>
            </div>
            {/* Social Icons */}
            <div className="footer__bottom__container__MS__NewsLetter__social__Media">
              <div className="footer__social__follow__container">
                <span className="followUs">
                  Follow Us
                  <div className="dice2"></div>
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="footer__social__md__icons__container">
                <ul className="footer__social__md__icons__ul">
                  <li className="footer__social__md__icons__li">
                    {/* <img src="../../../public/images/facebook.svg" alt="facebook" className="footer__social__md__icons__img"/> */}
                    <FacebookOutlinedIcon className="footer__social__md__icons" />
                  </li>
                  <li className="footer__social__md__icons__li">
                    {/* <img src="../../../public/images/instagram.svg" alt="instagram" className="footer__social__md__icons__img"/> */}
                    <InstagramIcon className="footer__social__md__icons" />
                  </li>
                  <li className="footer__social__md__icons__li">
                    {/* <img src="../../../public/images/twitter.svg" alt="twitter" className="footer__social__md__icons__img"/> */}
                    <YouTubeIcon className="footer__social__md__icons__img" />
                  </li>
                  <li className="footer__social__md__icons__li">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="footer__social__md__icons__img"
                    >
                      <path
                        d="M20.317 4.1556C18.7873 3.45371 17.147 2.9366 15.4319 2.64043C15.4007 2.63471 15.3695 2.64899 15.3534 2.67756C15.1424 3.05278 14.9087 3.54228 14.7451 3.92702C12.9004 3.65085 11.0652 3.65085 9.25832 3.92702C9.09465 3.53373 8.85248 3.05278 8.64057 2.67756C8.62449 2.64995 8.59328 2.63566 8.56205 2.64043C6.84791 2.93565 5.20756 3.45277 3.67693 4.1556C3.66368 4.16131 3.65233 4.17084 3.64479 4.18321C0.533392 8.83157 -0.31895 13.3657 0.0991801 17.8436C0.101072 17.8655 0.11337 17.8864 0.130398 17.8998C2.18321 19.4073 4.17171 20.3225 6.12328 20.9291C6.15451 20.9387 6.18761 20.9272 6.20748 20.9015C6.66913 20.2711 7.08064 19.6064 7.43348 18.9073C7.4543 18.8664 7.43442 18.8178 7.39186 18.8016C6.73913 18.554 6.1176 18.2521 5.51973 17.9093C5.47244 17.8817 5.46865 17.814 5.51216 17.7816C5.63797 17.6874 5.76382 17.5893 5.88396 17.4902C5.90569 17.4721 5.93598 17.4683 5.96153 17.4798C9.88928 19.273 14.1415 19.273 18.023 17.4798C18.0485 17.4674 18.0788 17.4712 18.1015 17.4893C18.2216 17.5883 18.3475 17.6874 18.4742 17.7816C18.5177 17.814 18.5149 17.8817 18.4676 17.9093C17.8697 18.2588 17.2482 18.554 16.5945 18.8007C16.552 18.8169 16.533 18.8664 16.5538 18.9073C16.9143 19.6054 17.3258 20.2701 17.7789 20.9006C17.7978 20.9272 17.8319 20.9387 17.8631 20.9291C19.8241 20.3225 21.8126 19.4073 23.8654 17.8998C23.8834 17.8864 23.8948 17.8664 23.8967 17.8445C24.3971 12.6676 23.0585 8.17066 20.3482 4.18416C20.3416 4.17084 20.3303 4.16131 20.317 4.1556ZM8.02002 15.117C6.8375 15.117 5.86313 14.0314 5.86313 12.6981C5.86313 11.3648 6.8186 10.2791 8.02002 10.2791C9.23087 10.2791 10.1958 11.3743 10.1769 12.6981C10.1769 14.0314 9.22141 15.117 8.02002 15.117ZM15.9947 15.117C14.8123 15.117 13.8379 14.0314 13.8379 12.6981C13.8379 11.3648 14.7933 10.2791 15.9947 10.2791C17.2056 10.2791 18.1705 11.3743 18.1516 12.6981C18.1516 14.0314 17.2056 15.117 15.9947 15.117Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom__container__bottom__section">
            <span className="copyRight">
              © 2023 UX Chandan. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
