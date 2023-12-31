import { useState } from "react";
import "./MobileNavbar.scss";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar__logo">
        <img src="/images/logo.svg" alt="logo" className="MM__logo" />
      </div>
      <div
        className={`mobile-navbar__menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <CloseIcon />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M27.667 10H8.66699C8.12033 10 7.66699 9.54667 7.66699 9C7.66699 8.45333 8.12033 8 8.66699 8L27.667 8C28.2137 8 28.667 8.45333 28.667 9C28.667 9.54667 28.2137 10 27.667 10Z"
              fill="white"
            />
            <path
              d="M27.6677 16.6665H15.041C14.4943 16.6665 14.041 16.2132 14.041 15.6665C14.041 15.1198 14.4943 14.6665 15.041 14.6665H27.6677C28.2143 14.6665 28.6677 15.1198 28.6677 15.6665C28.6677 16.2132 28.2143 16.6665 27.6677 16.6665Z"
              fill="white"
            />
            <path
              d="M27.667 23.3335H8.66699C8.12033 23.3335 7.66699 22.8802 7.66699 22.3335C7.66699 21.7868 8.12033 21.3335 8.66699 21.3335L27.667 21.3335C28.2137 21.3335 28.667 21.7868 28.667 22.3335C28.667 22.8802 28.2137 23.3335 27.667 23.3335Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <ul className={`mobile-navbar__links ${isMenuOpen ? "open" : ""}`}>
        <li className="links" onClick={() => scrollToSection("tournaments")}>
          Tournaments
        </li>
        <li className="links" onClick={() => scrollToSection("about")}>
          Our Team
        </li>
        <li className="links" onClick={() => scrollToSection("shop")}>
          Our Sponsors
        </li>
        <li className="links" onClick={() => scrollToSection("about")}>
          About Us
        </li>
        <li className="links" onClick={() => scrollToSection("contact")}>
          Contact Us
        </li>
        <li className="links" onClick={() => scrollToSection("shop")}>
          Shop
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
