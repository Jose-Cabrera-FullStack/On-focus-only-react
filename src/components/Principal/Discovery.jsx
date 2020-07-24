import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Course.scss";
import "../../assets/styles/components/Courses.scss";

import Course from "./Course/Course";
import Diploma from "./Diploma/Diploma";

import { getCourseCategory } from "../../actions";

const Discovery = (props) => {
  let course = props.course;
  console.log(props)
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
                {course.slice(course.length - 3,course.length).map((item) => {
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
                  {course.map((item) => {
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
              )}
            </>
          </div>

          <Diploma none={props.none} />
        </div>
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
  getCourseCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
