import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Course.scss";
import "../../assets/styles/components/Courses.scss";

import LoadingElement from "../Utils/LoadingElement";
import Pagination from "../Utils/Pagination";
import CourseList from "./Course/CourseList";
import Diploma from "./Diploma/Diploma";

import { getAllCourse } from "../../actions";

const Discovery = (props) => {
  useEffect(() => {
    props.getAllCourse();
  }, []);

  let course = props.course;
  const [coursePage, setcoursePage] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = course.slice(indexOfFirstPost, indexOfLastPost);

  const hasCourse = Object.keys(course).length > 0;

  return (
    <section className="discovery">
      <div className="discovery__container">
        <h2 className="discovery__title">
          {props.info
            ? props.info
            : "Descubre la plataforma lider en negocios y emprendimiento."}
        </h2>

        <div className="flex">
          <div className={"discovery__course" + " " + props.column}>
            <>
              {hasCourse ? (
                <CourseList
                  course={course}
                  coursePage={coursePage}
                  onlyTree={props.onlyThree}
                  onlyFour={props.onlyFour}
                  currentPosts={currentPosts}
                  setcoursePage={setcoursePage}
                />
              ) : (
                <div className="discovery__container__loading">
                  <LoadingElement />
                </div>
              )}
            </>
          </div>

          <Diploma none={props.none} />
        </div>
        {coursePage ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={course.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            indexOfLastPost={indexOfLastPost}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.course,
  };
};

const mapDispatchToProps = {
  getAllCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
