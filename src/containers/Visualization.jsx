import React, { useEffect } from "react";
import { connect } from "react-redux";

import VisualizationCourse from "../components/Visualization/VisualizationCourse";
import NotFound from "../containers/NotFound";
import { getCourseVideo } from "../actions";

import "../assets/styles/App.scss";

const Visualization = (props) => {
  const { id, slugcategory, slugname } = props.match.params;
  // console.log(slugname);
  useEffect(() => {
    props.getCourseVideo(slugcategory, slugname, id);
  }, []);

  const isCategory = Object.keys(props.myCourses).length > 0;

  return !isCategory ? (
    <NotFound />
  ) : (
    <div className="App">
      <VisualizationCourse />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseVideo: state.courseVideo || {},
    myCourses: state.myCourses || {},
  };
};
const mapDispatchToProps = {
  getCourseVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
