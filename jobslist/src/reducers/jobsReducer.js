import { FETCH_DATA, FETCH_FAIL, FETCH_SUCCESS } from "../actions";

const initialState = {
  title: "Jobs are here",
  error: "",
  fetchingJobs: false,
  jobs: []
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetchingJobs: true,
        jobs: []
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        fetchingJobs: false
      };
    case FETCH_FAIL:
      return {
        error: action.payload,
        fetchingJobs: false
      };
    default:
      return state;
  }
};
