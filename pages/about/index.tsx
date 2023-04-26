import React from "react";
import { Inter, Roboto_Condensed, Rajdhani } from "next/font/google";
const radj = Rajdhani({
  subsets: ["devanagari"],
  weight: "300",
});
const About: React.FC = () => {
  return (
    <div className={`${radj.className}`}>
      <main
        className={
          "flex min-h-screen flex-col items-center justify-normal content-center bg-yellow-500 border border-slate-600"
        }
      >
        <h1 className="text-slate-100/40 bg-gradient-to-b from-zinc-400 pb-6 pt-8 backdrop-blur-3xl brightness-105 rounded-xl lg:border  text-xl px-2">
          Hello World, and welcome to the About Section of the application
        </h1>
      </main>{" "}
    </div>
  );
};

export default About;
