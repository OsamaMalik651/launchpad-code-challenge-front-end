export default (state = [], action) => {
  //Switch is used in case more statements are needed in future
  switch (action.type) {
    case "SET_STATUS":
      return action.payload;
    default:
      return state;
  }
};
