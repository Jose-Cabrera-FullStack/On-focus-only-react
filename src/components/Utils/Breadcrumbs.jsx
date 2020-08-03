import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Utils.scss";

import ArrowLeft from "../../assets/static/images/svg/arrow-visualization-black.svg";

const Beadcrumbs = ({
  onlyMobile,
  margin,
  onlyDesktop,
  icon,
  iconHover,
  link,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {onClick ? (
        <div
          onClick={onClick}
          className={
            "beadcrumbs flex" + " " + onlyMobile + " " + margin + " " + onlyDesktop
          }
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            src={icon ? (isHover ? iconHover : icon) : ArrowLeft}
            alt="Fecha a la izquierda"
          />
          <h5 className="beadcrumbs__text">Volver a los cursos</h5>
        </div>
      ) : (
        <div
          className={
            "beadcrumbs" + " " + onlyMobile + " " + margin + " " + onlyDesktop
          }
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link to={link ? link : "/cursos"} className="flex text-decoration">
            <img
              src={icon ? (isHover ? iconHover : icon) : ArrowLeft}
              alt="Fecha a la izquierda"
            />
            <h5 className="beadcrumbs__text">Volver a los cursos</h5>
          </Link>
        </div>
      )}
    </>
  );
};
export default Beadcrumbs;
