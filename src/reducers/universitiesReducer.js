export default (state = [], action) => {
  switch (action.type) {
    case "GET_UNIVERSITIES":
      return action.payload;
    default:
      return state;
  }
};
