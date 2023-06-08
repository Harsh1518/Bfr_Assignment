import React from "react";

const Poster = () => {
  const posterDesign = {
    width: "100%",
    height: "550px",
    backgroundImage:
      "url(https://www.spacecuriosity.com/wp-content/uploads/2020/08/ISROs-Success-antique.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: "1px solid black",
  };

  const content = {
    marginTop: "175px",
    marginLeft: "75px",
    width: "35%",
    height: "210px",
    color: "red"
  };

  const Button = {
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid red",
    width: "200px",
    height: "40px",
  };

  return (
    <div style={posterDesign}>
      <div style={content}>
        <p>Expected LAUNCH</p>
        <h1>ISRO V2 MISSION</h1>

        <button style={Button}>Learn More</button>
      </div>
    </div>
  );
};

export default Poster;
