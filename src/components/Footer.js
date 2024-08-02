import assets from "../images/assets";

import React from "react";

const FooterComp = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLine"></div>

        <div className="logo">
          <a href="/">
            <img src={assets.logo_Planthora} alt="Logo" />
          </a>
        </div>
        <div className="footerLine"></div>
      </div>
    </div>
  );
};

export default FooterComp;
