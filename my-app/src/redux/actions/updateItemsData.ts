const updateItemsData = (state: State, action: { payload: State.Item[] }) => {
  const newState = { ...state };
  newState.items = action.payload;
  return newState;
};

export default updateItemsData;
