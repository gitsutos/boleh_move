let initialState = {
  auth: [false, ""],
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_AUTH_ERROR":
      return { auth: [true, action.payload] };
  }
  return state;
}
