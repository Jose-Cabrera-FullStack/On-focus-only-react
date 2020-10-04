import axios from "axios";

const URL = "https://backend-devel.herokuapp.com/api";

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

export const getCourse = (slugCourse) => ({
  type: "GET_COURSE",
  payload: { slugCourse },
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

export const totalShopping = (payload) => ({
  type: "TOTAL_SHOPPING",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const getMyCourses = (payload) => {
  let url = `${URL}/courses/me`;
  return function (dispatch) {
    axios
      .get(url, {
        headers: {
          "access-token": payload,
        },
      })
      .then((response) =>
        dispatch({
          type: "GET_MY_COURSES",
          payload: response.data.myCourses,
        })
      );
  };
};
export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});
export const getAllCourse = () => {
  let url = `${URL}/courses?limit=40`;
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
  let url = `${URL}/loginSession`;
  return (dispatch) => {
    axios
      .post(url, payload)
      .then(({ data }) => {
        document.cookie = `id=${data.data._id}`;
        document.cookie = `email=${data.data.username}`;
        document.cookie = `status=${data.data.status}`;
        document.cookie = `token=${data.token}`;
        dispatch(loginRequest(data));
      })
      .catch((error) => dispatch(setError(error)));
  };
};
