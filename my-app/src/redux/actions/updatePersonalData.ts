const updatePersonalData = (
  state: State,
  action: { payload: State.userData }
) => {
  const newState = { ...state };
  newState.userData = action.payload;
  return newState;
};

export default updatePersonalData;
