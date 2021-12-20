export default (state = [], action) => {
  switch (action.type) {
    case "GET_PLACES":
      return action.payload;
    default:
      return state;
  }
};
