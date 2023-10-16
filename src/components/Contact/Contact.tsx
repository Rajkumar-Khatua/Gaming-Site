import "./Contact.scss";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function Contact() {
  return (
    <div className="contact__container">
      <div className="head__contact__title__container">
        <h1 className="contact__title">
          Contact Us
          <div className="contactTitle"></div>
        </h1>
      </div>

      <div className="contact__form__container">
        <div className="form__info__container">
          <div className="location">
            <div className="location__name__container">
              <div className="icon__container">
                <FmdGoodOutlinedIcon className="icon" />
                <span className="icon__name">Office Location -</span>
              </div>
              <span className="address">3rd Floor, Green Park, Bengaluru</span>
            </div>
          </div>
          <div className="contact">
            <div className="contact__name__container">
              <div className="icon__container">
                <LocalPhoneOutlinedIcon className="icon" />
                <span className="icon__name">Contact No -</span>
              </div>
              <span className="contc__no">+91 9876543210</span>
            </div>
          </div>
          <div className="email">
            <div className="email__name__container">
              <div className="icon__container">
                <EmailOutlinedIcon className="icon" />
                <span className="icon__name">Email -</span>
              </div>
              <span className="contc__gmail">contact@gamingcompany.com</span>
            </div>
          </div>
        </div>
        <div className="form__container">
          <form className="form__form">
            <div className="form__input__Name__container">
              <div className="name">
                <label htmlFor="">First Name*</label>
                <input
                  className="form__input"
                  type="text"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="name">
                <label htmlFor="">Last Name*</label>
                <input
                  className="form__input"
                  type="text"
                  placeholder="Last Name"
                ></input>
              </div>
            </div>
            <div className="form__input__info__container">
              <div className="info__name">
                <label htmlFor="">Email*</label>
                <input
                  className="form__input"
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
              <div className="info__name">
                <label htmlFor="">How did you hear about us?</label>
                <select
                  name=""
                  id=""
                  placeholder="How did you hear about us?"
                  className="form__input"
                >
                  <option value="" className="option__input">
                    Select a option
                  </option>
                  <option value="" className="option__input">
                    Google
                  </option>
                  <option value="" className="option__input">
                    Facebook
                  </option>
                  <option value="" className="option__input">
                    Instagram
                  </option>
                  <option value="" className="option__input">
                    Friend
                  </option>
                </select>
              </div>
            </div>
            <div className="form__message__container">
              <div className="message__info__">
                <label htmlFor="" className="message__name">
                  Message
                </label>
                <textarea
                  className="form__message"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div className="form__button__container">
              <button className="form__button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
