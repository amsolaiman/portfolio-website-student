import React from "react";
import Typewriter from "typewriter-effect";
// styles
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader__container">
      <h3>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 70,
            pauseFor: 10000,
            strings: ["jasafanar workshop"],
          }}
        />
      </h3>
    </div>
  );
};

export default Loader;
