import { findAll } from "obj-traverse/lib/obj-traverse";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_COURSE_VIDEO":
      return {
        ...state,
        URLvideos:
          state.myCourses.find(
            (item) =>
              findAll(item, "videos", { url: action.payload.video_id }) &&
              item.name === action.payload.slugname &&
              item.category === action.payload.slugcategory
          ) || {},
      };
    case "GET_MY_VIDEO_NAME":
      return {
        ...state,
        videoName: action.payload,
      };
    case "GET_MY_COURSE":
      return {
        ...state,
        myCourse:
          state.myCourses.find((item) => item.name === action.payload) || {},
      };
    case "GET_COURSE_CATEGORY":
      return {
        ...state,
        category:
          state.course.find((item) => item.category === action.payload) || {},
      };
    case "SET_FAVORITE":
      return {
        ...state,
        shoppingcar: [...state.shoppingcar, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        shoppingcar: state.shoppingcar.filter(
          (items) => items.course_id !== action.payload
        ),
      };
    case "TOTAL_SHOPPING":
      return {
        ...state,
        total: action.payload,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// courseVideo:
// state.courseVideo.find(
//   (item) =>
//     item.module.video === action.id &&
//     item.name === action.slugname &&
//     item.category === action.slugcategory
// ) || {},
