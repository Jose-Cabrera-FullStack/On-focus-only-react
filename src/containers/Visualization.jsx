import React, { useEffect } from "react";
import { connect } from "react-redux";

import VisualizationCourse from "../components/Visualization/VisualizationCourse";
import NotFound from "../containers/NotFound";
import { getCourseVideo } from "../actions";

import "../assets/styles/App.scss";

const Visualization = (props) => {
  const { video_id, slugcategory, slugname } = props.match.params;

  useEffect(() => {
    props.getCourseVideo(slugcategory, slugname, video_id);
  }, []);

  const isCategory = Object.keys(props.URLvideos).length > 0;

  return !isCategory ? (
    <NotFound />
  ) : (
    <div className="App">
      <VisualizationCourse url={props.match} video={video_id} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseVideo: state.myCourse || {},
    URLvideos: state.URLvideos || {},
  };
};
const mapDispatchToProps = {
  getCourseVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
