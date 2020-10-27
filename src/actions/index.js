import axios from "axios";

const URL = "https://backend-devel.herokuapp.com/api";

export const getCountry = (payload) => ({
  type: "GET_COUNTRY",
  payload,
});
export const getCourseVideo = (slugcategory, slugname, video_id) => ({
  type: "GET_COURSE_VIDEO",
  payload: { slugcategory, slugname, video_id },
});

export const getMyVideoName = (payload) => ({
  type: "GET_MY_VIDEO_NAME",
  payload,
});

export const getCourseCategory = (slugcategory) => ({
  type: "GET_COURSE_CATEGORY",
  payload: { slugcategory },
});

export const getCourse = (payload) => ({
  type: "GET_COURSE",
  payload,
});

export const getMyCourseCategory = (payload) => ({
  type: "GET_MY_CATEGORY",
  payload,
});

export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
export const emptyFavorite = (payload) => ({
  type: "EMPTY_FAVORITE",
  payload,
});

export const totalShopping = (payload) => ({
  type: "TOTAL_SHOPPING",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const changeMyPassword = (payload, token) => {
  let url = `${URL}/me/password`;
  return function (dispatch) {
    axios
      .post(url, payload, {
        headers: {
          token: token,
        },
      })
      .then((response) =>
        dispatch({
          type: "CHANGE_MY_PASSWORD",
          payload: response.data,
        })
      )
      .catch((response) => dispatch(setError(response.response.data)));
  };
};
export const getMyCourses = (token) => {
  let url = `${URL}/me/course`;
  return function (dispatch) {
    axios
      .get(url, {
        headers: {
          token: token,
        },
      })
      .then((response) =>
        dispatch({
          type: "GET_MY_COURSES",
          payload: response.data,
        })
      );
  };
};
export const getCourseBySlug = (slug) => {
  let url = `${URL}/course/${slug}`;
  return function (dispatch) {
    axios
      .get(url)
      .then((response) =>
        dispatch({
          type: "GET_COURSE_BY_SLUG",
          payload: response.data.data,
        })
      )
      .catch((error) => dispatch(setError(error)));
  };
};
export const getMyCourseBySlug = (token, slug) => {
  let url = `${URL}/me/course/${slug}`;
  return function (dispatch) {
    axios
      .get(url, {
        headers: {
          token: token,
        },
      })
      .then((response) =>
        dispatch({
          type: "GET_MY_COURSE_BY_SLUG",
          payload: response.data.data,
        })
      )
      .catch((error) => dispatch(setError(error)));
  };
};
export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});
export const getAllCourse = () => {
  let url = `${URL}/course?limit=100`;
  return function (dispatch) {
    axios
      .get(url)
      .then((response) =>
        dispatch({
          type: "GET_ALL_COURSE",
          payload: response.data.data,
        })
      )
      .catch((error) => dispatch(setError(error)));
  };
};

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

export const registerUser = (payload) => {
  let url = `${URL}/student`;
  return function (dispatch) {
    axios
      .post(url, payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .catch();
  };
};
export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});
export const loginUser = (payload) => {
  let url = `${URL}/login`;
  return (dispatch) => {
    axios
      .post(url, payload)
      .then(({ data }) => {
        dispatch(loginRequest(data));
      })
      .catch((error) => dispatch(setError(error.response.data)));
  };
};

export const sendMessageEmail = (payload) => {
  let url = `${URL}/contact`;
  return function (dispatch) {
    axios
      .post(url, payload)
      .then((response) =>
        dispatch({
          type: "SEND_MESSAGE_EMAIL",
          payload: response.data,
        })
      )
      .catch((error) => dispatch(setError(error)));
  };
};
export const buyCourses = (payload, token) => {
  let url = `${URL}/me/course/buy`;
  return function (dispatch) {
    axios
      .post(url, payload, {
        headers: {
          token: token,
        },
      })
      .then((response) =>
        dispatch({
          type: "BUY_COURSES",
          payload: response.data,
        })
      )
      .catch((error) => dispatch(setError(error)));
  };
};
