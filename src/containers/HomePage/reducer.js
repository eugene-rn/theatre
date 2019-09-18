const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "TOGGLE_RULES":
      return {
        ...state,
        rules: !state.rules,
      };
    default:
      return state;
  }
};

export default formReducer;