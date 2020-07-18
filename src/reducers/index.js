const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_COURSE_CATEGORY':
      return {
        ...state,
        category: state.course.find(item => item.category === action.payload) || {}
      };
    case 'SET_FAVORITE':
      return {
        ...state,
        course: [...state.course, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        course: state.course.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
      case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
      case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
