import React from "react";
import { Link } from "react-scroll";

import ArrowLeftLastItem from "../../assets/static/images/svg/arrow-left-first-item.svg";
import ArrowRight from "../../assets/static/images/svg/arrow-right.svg";
import ArrowLeft from "../../assets/static/images/svg/arrow-left.svg";
import ArrowRightFirstItem from "../../assets/static/images/svg/arrow-right-last-item.svg";

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  const maxPage = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  function first() {
    setCurrentPage(1);
  }
  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  function last() {
    setCurrentPage(pageNumbers.length);
  }
  return (
    <nav>
      <Link
        activeClass="active"
        to="discovery"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <ul className="pagination flex">
          <img
            onClick={first}
            src={ArrowLeftLastItem}
            alt="Flecha a izquierda"
          />
          <img onClick={prev} src={ArrowLeft} alt="Flecha a izquierda" />
          <p>
            {currentPage} / {pageNumbers.length}
          </p>
          <img onClick={next} src={ArrowRight} alt="Flecha a la derecha" />
          <img
            onClick={last}
            src={ArrowRightFirstItem}
            alt="Flecha a la derecha"
          />
        </ul>
      </Link>
    </nav>
  );
};

export default Pagination;
