"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimationType = () => {
  return (
    <h2 className="  text-3xl text-white font-dm font-semibold">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "A Frontend Web Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "A Youtuber",
          1000,
          "A Self Learner",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className=" font-code text-3xl"
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </h2>
  );
};

export default AnimationType;
