import axios from 'axios';

export const getCourseCategory = payload => ({
  type: 'GET_COURSE_CATEGORY',
  payload,
});

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const totalShopping = payload => ({
  type: 'TOTAL_SHOPPING',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const loginUser = ({email, password}, redirectUrl) => {
  return(dispatch) => {
    axios({
      url:'/auth/sign-in', 
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
    .then(({data}) => {
      document.cookie = `email=${data.email}`;
      document.cookie = `name=${data.name}`;
      document.cookie = `id=${data.id}`;
      dispatch(loginRequest(data));
    })
    .then(() => { 
      window.location.href = redirectUrl
    })
    .catch(error => dispatch(setError(error)))
  };
};