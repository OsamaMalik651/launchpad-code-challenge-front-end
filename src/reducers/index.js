import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import statusReducer from "./statusReducer";
export default combineReducers({
  posts: postsReducer,
  status: statusReducer,
});
