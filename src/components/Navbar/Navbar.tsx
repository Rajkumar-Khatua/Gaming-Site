import "./Navbar.scss";
function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav className="Navbar">
      <div className="navbar_sub_container">
        <div className="left">
          <ul className="link">
            <li
              className="links"
              onClick={() => scrollToSection("tournaments")}
            >
              Tournaments
            </li>
            <li className="links" onClick={() => scrollToSection("about")}>
              Our Team
            </li>
            <li className="links" onClick={() => scrollToSection("shop")}>
              Our Sponsors
            </li>
          </ul>
        </div>
        <div className="middle">
          <div className="logo">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="logo_img"
              onClick={() => scrollToSection("hero")}
            />
          </div>
        </div>
        <div className="right">
          <ul className="link">
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
      </div>
    </nav>
  );
}

export default Navbar;
