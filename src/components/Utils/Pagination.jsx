import React from "react";
import { Link } from "react-scroll";

import ArrowLeftLastItemGrey from "../../assets/static/images/svg/arrow-left-first-item-grey.svg";
import ArrowLeftLastItem from "../../assets/static/images/svg/arrow-left-first-item.svg";
import ArrowLeftGold from "../../assets/static/images/svg/arrow-left-gold.svg";
import ArrowLeft from "../../assets/static/images/svg/arrow-left-grey.svg";
import ArrowRight from "../../assets/static/images/svg/arrow-right-gold.svg";
import ArrowRightGrey from "../../assets/static/images/svg/arrow-right-grey.svg";
import ArrowRightFirstItem from "../../assets/static/images/svg/arrow-right-last-item.svg";
import ArrowRightFirstItemGrey from "../../assets/static/images/svg/arrow-right-last-item-grey.svg";

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
      <ul className="pagination flex">
        <Link
          activeClass="active"
          to={currentPage === 1 ? "" : "discovery"}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <img
            onClick={first}
            src={currentPage === 1 ? ArrowLeftLastItemGrey : ArrowLeftLastItem}
            alt="Flecha a izquierda"
          />
        </Link>
        <Link
          activeClass="active"
          to={currentPage === 1 ? "" : "discovery"}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <img
            onClick={prev}
            src={currentPage === 1 ? ArrowLeft : ArrowLeftGold}
            alt="Flecha a izquierda"
          />
        </Link>
        <p>
          {currentPage} / {pageNumbers.length}
        </p>
        <Link
          activeClass="active"
          to={currentPage === pageNumbers.length ? "" : "discovery"}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <img
            onClick={next}
            src={
              currentPage === pageNumbers.length ? ArrowRightGrey : ArrowRight
            }
            alt="Flecha a la derecha"
          />
        </Link>
        <Link
          activeClass="active"
          to={currentPage === pageNumbers.length ? "" : "discovery"}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <img
            onClick={last}
            src={
              currentPage === pageNumbers.length
                ? ArrowRightFirstItemGrey
                : ArrowRightFirstItem
            }
            alt="Flecha a la derecha"
          />
        </Link>
      </ul>
    </nav>
  );
};

export default Pagination;
