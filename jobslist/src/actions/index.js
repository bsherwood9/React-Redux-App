import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getJobData = () => {
  const promise = axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=JavaScript&location=us&full_time=on`
  );
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    promise
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.error("error fetching api", err);
        dispatch({ type: FETCH_FAIL, payload: "error fetching data" });
      });
  };
};
