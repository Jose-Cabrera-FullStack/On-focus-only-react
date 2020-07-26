const reducer = (state, action) => {
  switch (action.type) {
    case "GET_COURSE_VIDEO":
      return {
        ...state,
        myCourses:
          state.courseVideo.find(
            (item, index) =>
              item.module[index].videos[index].url ===
                action.payload.video_id &&
              item.name === action.payload.slugname &&
              item.category === action.payload.slugcategory
          ) || {},
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
