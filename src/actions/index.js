import jsonPlaceholder from "../apis/jsonPlaceholder";

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
