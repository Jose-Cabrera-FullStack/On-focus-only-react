import { loadState } from "./Utils/localStorage";

const persistedState = loadState();

export default {
  shoppingcar: persistedState ? persistedState.shoppingcar : [],
  URLvideos: [],
  user: persistedState ? persistedState.user : {},
  total: 0,
  myCourses: [],
  course: [],
};
