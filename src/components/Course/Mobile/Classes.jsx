import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/Buyed.scss";

import Module from "../../../components/Course/Module/Module";

import Breadcrumbs from "../../Utils/Breadcrumbs";

const Classes = (props) => {
  const { category, name } = props.myCourse;
  return (
    <div className="buyed__classes">
      <div className="buyed__classes__breadcrumbs__mobile">
        <Breadcrumbs
          onClick={props.onClick}
          margin={"beadcrumbs--my-course__mobile"}
        />
      </div>
      {props.myCourse.module.map((item, index) => {
        return (
          <Module
            key={index}
            buyed
            id={index + 1}
            text={"Datos sobre el curso"}
            duration={"45 min"}
            item={item}
            urlData={[category, name]}
            margin={props.margin}
            myCourse={"course__module__element__inside--my-course__mobile"}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
  };
};

export default connect(mapStateToProps, null)(Classes);
