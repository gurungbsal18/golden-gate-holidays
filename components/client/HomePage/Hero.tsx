"use client";
import React from "react";
import HeroSearchContainer from "./HeroSearchContainer";
import { FaPlay } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero">
        <div className="container mx-auto flex flex-col gap-8 items-center hero-container">
          <span className="hero-play-btn">
            <FaPlay />
          </span>

          <h1 className="text-4xl md:text-6xl text-white text-center flex gap-2">
            Step Into
            <Typewriter
              options={{
                strings: ["Serenity", "Wonder", "Freedom"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <HeroSearchContainer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
