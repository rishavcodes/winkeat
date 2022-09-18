import React from "react";
import MiniImg from "../../images/mini-img.png";

function Homepageimg() {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          left: "950px",
          bottom:"0",
          width: "370px",
        }}
        src={MiniImg}
        alt="Not available"
      />
    </div>
  );
}

export default Homepageimg;
