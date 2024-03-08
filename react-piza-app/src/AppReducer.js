const initialState = [];

const cartReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return [...initialState, action.payload];
    }
    case "REMOVE": {
      return initialState.filter((x) => x.id !== action.payload);
    }
    case "UPDATE_QUTY": {
      let index = initialState.findIndex((x) => x.id == action.payload.id);
      return [
        ...initialState.slice(0, index),
        { ...initialState[index], quantity: action.payload.quantity },
        ...initialState.slice(index + 1),
      ];
    }
    default: {
      return initialState;
    }
  }
};

export { initialState };
export default cartReducer;
