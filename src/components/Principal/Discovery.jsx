import React, { useState } from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Course.scss";
import "../../assets/styles/components/Courses.scss";

import Course from "./Course/Course";
import Diploma from "./Diploma/Diploma";

import Pagination from "../Utils/Pagination";

import { getCourseCategory } from "../../actions";

const Discovery = (props) => {
  let course = props.course;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = course.slice(indexOfFirstPost, indexOfLastPost);

  let coursePage = false;

  return (
    <section className="discovery">
      <div className="discovery__container">
        <h2 className="discovery__title">
          {props.info
            ? props.info
            : "Descubre la plataforma lider en negocios y emprendimiento."}
        </h2>

        <div className=" flex">
          <div className={"discovery__course" + " " + props.column}>
            <>
              {props.onlyThree ? (
                <>
                  {course
                    .slice(course.length - 3, course.length)
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <Course
                            priceOff={item.discount}
                            category={item.category}
                            title={item.name}
                            teacher={item.teacher}
                            students={item.students}
                            price={item.price}
                            img={item.featured_image}
                            course={item}
                            displayNone={
                              item.course_id === course.length
                                ? "shopping-none"
                                : ""
                            }
                          />
                        </div>
                      );
                    })}
                </>
              ) : props.onlyFour ? (
                <>
                  {course
                    .slice(course.length - 4, course.length)
                    .map((item) => {
                      return (
                        <div key={item.course_id}>
                          <Course
                            priceOff={item.discount}
                            category={item.category}
                            title={item.name}
                            teacher={item.teacher}
                            students={item.students}
                            price={item.price}
                            img={item.featured_image}
                            course={item}
                          />
                        </div>
                      );
                    })}
                </>
              ) : (
                <>
                  {currentPosts.map((item) => {
                    coursePage = true;
                    return (
                      <div key={item.course_id}>
                        <Course
                          priceOff={item.discount}
                          category={item.category}
                          title={item.name}
                          teacher={item.teacher}
                          students={item.students}
                          price={item.price}
                          img={item.featured_image}
                          course={item}
                          duration={item.duration}
                          module={item.module}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </>
          </div>

          <Diploma none={props.none} />
        </div>
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.course,
  };
};

const mapDispatchToProps = {
  getCourseCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
