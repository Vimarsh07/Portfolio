/** @format */

import React from "react";
import Image from "next/image";
import classes from "./css/head.module.css";
import Circle from "./Circle";

const About = () => {
  return (
    <div
      id="about"
      className="relative lg:px-28 lg:mt-56 flex flex-col lg:flex-row text-white"
    >
      <div className="absolute -right-32 bottom-52 opacity-20">
        <Circle />
      </div>
      <div className="invisible lg:visible font-Comfortaa text-8xl mr-16">
        <span className={classes.head}>A</span>
        <br />
        <span className={classes.head}>B</span>
        <br />
        <span className={classes.head}>O</span>
        <br />
        <span className={classes.head}>U</span>
        <br />
        <span className={classes.head}>T</span>
      </div>
      <div className={`${classes.head} flex justify-center lg:hidden -mb-36 -mt-96 font-Comfortaa text-6xl lg:text-8xl lg:mr-16`}>
        ABOUT
      </div>
      <Image
        width={"980px"}
        height={"350px"}
        className="invisible lg:visible mx-20 w-36 h-36 rounded-lg"
        alt="userImage"
        src={"/Photo.jpg"}
      />
      <Image
        width={"480px"}
        height={"400px"}
        className="visible px-16 lg:invisible mx-20 w-12 h-36 rounded-lg"
        alt="userImage"
        src={"/Photo.jpg"}
      />
      <div className="px-4 lg:px-0 mt-4 lg:mt-0 lg:pl-12 font-sans ">
      As I graduated with MS in Computer Science at Illinois Institute of Technology, 
      I am honing my competencies in machine learning, data analysis and back-end development. 
      My goal is to seamlessly integrate my academic insights with practical solutions to advance the field of artificial intelligence, 
      guided by a spirit of innovation and entrepreneurship. I am deeply committed to making a positive impact through technology. 
      I believe in the power of innovation to not only drive business success but also to give back to the community and make a difference. 
      This philosophy drives my work and inspires me to continually push the boundaries of what technology can achieve.
      When I am not coding, I enjoy staying updated with the latest trends in technology, contributing to open-source projects, and exploring new ways to apply my skills to meaningful causes.
      I have experience with Python, Javascript, Node.JS, SQL and a strong background in Statistics, Probability and Algorithms.
     
      </div>
    </div>
  );
};

export default About;
2;
