import React from "react";

function Navbutton() {
  return (
    <div style={{ position: "relative", left: "1150px" }}>
      <button
        style={{
          marginTop: "30px",
          marginRight: "20px",
          width: "120px",
          height: "40px",
          borderRadius: "20px",
          fontSize: "20px",
          fontWeight:"700",
          cursor:"pointer",
          border:"none"
        }}
      >
        Login
      </button>
      <button
        style={{
          marginTop: "30px",
          width: "120px",
          height: "40px",
          borderRadius: "20px",
          fontSize: "20px",
          fontWeight:"700",
          cursor:"pointer",
          background:"#00FF84",
          border:"none"
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Navbutton;
