export default function passengerReducer(state: Object = {}, action) {
  switch (action.type) {
    case "ADD":
      return { ...action.payload };
  }
  return state;
}
