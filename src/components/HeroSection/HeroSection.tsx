import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../Mobile_Menu/MobileNavbar";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero">
      <div className="desktop-nav">
        <Navbar /> {/* This will be visible on larger devices */}
      </div>
      <div className="mobile-nav">
        <MobileNavbar /> {/* This will be visible on smaller devices */}
      </div>
      <div className="heroContainer">
        <div className="hero__left__container">
          <div className="hero__left__contain">
            <span className="first__heading__hero__title">
              Welcome to the{" "}
              <span className="__heading__tittle__style"> Esports</span>
            </span>
            <span className="second__heading__hero__subTitle">Multiverse</span>
          </div>
          <div className="hero__button">
            <button className="hero__btn__join__tournament">
              Join Tournament
            </button>
          </div>
        </div>
        <div className="hero__right__container">
          <div className="hero__right__image">
            <img
              src="https://s3-alpha-sig.figma.com/img/cb74/4d06/c9f620ca92487fc88d7b2f08ff8e9a02?Expires=1697414400&Signature=CYZv5CBCYk2im8FoRdwgoMU85sCeHlxrY4KxxYm2y71xAVuRUNRQLcYn22DFGt06m2k5FCwfdn4Sy-BfOg0SztRJqIlv5J86f2rKJqX2psBPHlO4E4SkNeEAd3w49MicGHsK218QTAHn-fTtouPLqbtEqxICMuO77KAt-lOhuxYbtQlRP6gBwUNmyQcrDXOQHaC1xj8x~EfI~6sNDKi7a3yNN4og-xd~tA3c9NvFICk4BNOWBLtZpZxKC5lfQife~A3Jlsxk~V~8DU1HDQq5htUrsdHnXwbcvq-qiN9d7qG6LpgvyIerTudJkMO2f8p76A0hnVmbCW44VjndNfEMFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="hero__right__images"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3226/d415/a38ab60dd304244cc1ac68152cea5ac5?Expires=1697414400&Signature=q77pz8uILZQFOjQSgqyO4PMnaSlut~YJv-a~qa5kNWMX-~TWZ8bIasS0t0twPZL2-99liazwmA-BYNxZTzJ28rQESh97kQTCG0WVTbHmApwsXyGpGxGH1Tp2RsPoAQtKSI5xo3NwbvbFZcKhK-pdy3ziHhqSushvOfoniT-yiMnQ~uEInV5g~JrgnwGGZSI70EkMRzBbu9jO7pI4ANgizTrXH3LrLvVBXgg9kUCqcKUxNecdBLG-fzoAWZsWqPaxZcoVe-0gkvU0ZbJhQWKBJyZM1cTSe8tEOn4Sxr0RNUvgvGV5JAWQyduQ3Znawrw~ImlNCCTB8wM03bBaEZSZbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="hero__right__images"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/d990/5767/f75d73450b096ace4a2f73a9bd3c04b7?Expires=1697414400&Signature=PWU2WlpqRtabdbLRp4cI7ycLd2fORcr~yCmj59B7-Gys2n~K7ztAefalaYTfwW85L9S7~hgFJKT2GQ80lhbJWCZHmsJt5I0sMtU4ZND9QS9jY-Pu04MB7xesYh0RUhIKANfvpXp6g5TvExyWX4an7d4TxK1oFI3IIxZNIzUD76twg3kcMSDi6lc97AUKSxR9MFfIgXAGgRvsS8VRSO12aouSWyvMgfEg9cgUR9xeAWm0zcnullojIcX5Fu8fUfXAVhj08OWZEmaXgEtVGFtYsDsPexK0p0lMw8KCZUXkU~fqOxRFozj09cZger04hViajhQsxptiJFp0l84zU8r~Ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="hero__right__images"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/581e/80c2/89d955e25aecdab73ee0376e53b35cc5?Expires=1697414400&Signature=CX1o3eRJcfCrVs0dQuxqfDxBrkn-wor6oToBcxp7fQuMCf0gzFdLzgc-V9KxWD49MM~FJgr9ruQ0bbZLPCJ3UZ~mB6M3METaWqaLp9EriAhk4SA094b85KWFNtMWgDVsq3nbtxZqG5K4AcUTmCP~OpI5goPDpbPqYS1ckfAwr9DXvmSeoCg3cM1vPQkUFMN6-2fonZIL48h8vBy5WrY7YkDuJukKpAkgy98lF908UE4lg1xOiYrtOReo3JXCQdQvlQcBqau1bkQO8tyQ9P3VqiI6tPwxudnhFTqGN4fFlDWkXVCkoB1OSt3QCo9l1Rq40PI3uSkKNE3Z7DYJ9aMRuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="hero__right__images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
