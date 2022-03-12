export default function riderReducer(state = {}, action) {
  switch (action.type) {
    case "ADD":
      return { ...action.payload };
  }
  return state;
}
