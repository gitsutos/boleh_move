export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };

    case "SIGN_OUT":
      return [];
  }
  return state;
}
