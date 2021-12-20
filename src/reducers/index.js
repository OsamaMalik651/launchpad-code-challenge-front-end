import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import statusReducer from "./statusReducer";
import countriesReducer from "./countriesReducer";
import universitiesReducer from "./universitiesReducer";
import postalLookupReducer from "./postalLookupReducer";

export default combineReducers({
  posts: postsReducer,
  status: statusReducer,
  countries: countriesReducer,
  universities: universitiesReducer,
  places: postalLookupReducer,
});
