import React from "react";
import "./header.css";
import Lottie from "lottie-react";
import soft_dev from "../../lottie_animation/Animation - 1706103029937.json";

const Header = () => {
  return (
    <div>
      <div className="Container">
        <Lottie
          className="LottieAnimation"
          animationData={soft_dev}
          loop={true}
        />
        <div className="HeaderInfo">
          <h1 className="Title">
            Dev Resources{" "}
            <img
              className="imgtitle"
              src={require("../../assets/icons/codeSymbol.svg").default}
              alt="Image"
            />
          </h1>

          <h2 className="SubTitle">
            A hand-picked list of resources for better development.
          </h2>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1706102186">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
