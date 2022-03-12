export const ADD_AUTH_ERROR = (error) => {
  return async (dispatch) => {
    console.log(error);
    dispatch({
      type: "ADD_AUTH_ERROR",
      payload: error,
    });
  };
};
