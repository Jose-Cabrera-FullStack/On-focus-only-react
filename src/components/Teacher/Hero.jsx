import React from "react";
import { Link } from "react-scroll";

import "../../assets/styles/components/Teacher.scss";

import Button from "../Utils/ButtonPrimary";

const Hero = () => (
  <section className="teacher__hero">
    <h1 className="teacher__hero__title">Lorem ipsum dolor sit amet lorem.</h1>
    <Link
      activeClass="active"
      to="how__we__tech__info"
      spy={true}
      smooth={true}
      offset={0}
      duration={800}
    >
      <Button />
    </Link>
  </section>
);
export default Hero;
