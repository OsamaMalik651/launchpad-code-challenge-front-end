import jsonPlaceholder from "../apis/jsonPlaceholder";
import countries from "../apis/countriesApi";
import universities from "../apis/universitiesApi";
import postalLookupApi from "../apis/postalLookupApi";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/posts?userId=${id}`);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const addPost = (data) => async (dispatch) => {
  const response = await jsonPlaceholder.post("/posts", data);
  dispatch(
    { type: "ADD_POST", payload: response.data },
    { type: "SET_STATUS", payload: response.status }
  );
};

export const editPost = (id, data) => async (dispatch) => {
  const response = await jsonPlaceholder.put(`/posts/${id}`, data);
  dispatch(
    // { type: "EDIT_POST", payload: response.data },
    { type: "SET_STATUS", payload: response.status }
  );
};
export const deletePost = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.delete(`/posts/${id}`);
  dispatch({ type: "SET_STATUS", payload: response.status });
};

//Countries action Creator
export const fetchCountries = () => async (dispatch) => {
  const response = await countries.get("/countries");
  dispatch({ type: "GET_COUNTRIES", payload: response.data.data });
};

//Universities Action Creator
export const fetchUniversities = (country) => async (dispatch) => {
  const response = await universities.get(`/search?country=${country}`);
  dispatch({ type: "GET_UNIVERSITIES", payload: response.data });
};
//Postal Lookup Action Creator
export const fetchPlaces = (postalCode) => async (dispatch) => {
  const response = await postalLookupApi.get(`/CA/${postalCode}`);
  dispatch({ type: "GET_PLACES", payload: response.data });
};
