const updateItemsData = (state: State, action: { payload: State.Item[] }) => {
  const newState = { ...state };
  newState.items = action.payload;
  // here can send newState to server
  return newState;
};

export default updateItemsData;
