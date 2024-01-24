import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Container">
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
  );
};

export default Header;
