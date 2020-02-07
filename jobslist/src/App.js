import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getJobData } from "./actions";

function App(props) {
  useEffect(() => {
    props.getJobData();
  }, []);
  console.log("jobData", props.jobs);
  return (
    <div>
      <header>
        <h1>Job List</h1>
      </header>
      <div className="container">
        {props.fetchingJobs ? (
          <h2>Getting data...</h2>
        ) : (
          <div className="jobsList">
            {props.jobs.map(job => {
              return (
                <div className="job" key={job.id}>
                  <h2>{job.title}</h2>
                  {job.company_logo ? <img src={job.company_logo} /> : null}
                  <h6>{job.type}</h6>
                  <h3>{job.company}</h3>
                  <h3>{job.location}</h3>
                  <h3>{job.created_at}</h3>
                  <button>
                    <a target="_blank" href={job.company_url}>
                      Visit company
                    </a>
                  </button>

                  <div
                    dangerouslySetInnerHTML={{ __html: `${job.description}` }}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: `${job.how_to_apply}` }}
                  />
                </div>
              );
            })}
          </div>
        )}
        {props.error !== "" ? <h4>{props.error}</h4> : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title,
    jobs: state.jobs,
    error: state.error,
    fetchingJobs: state.fetchingJobs
  };
};
export default connect(
  mapStateToProps,
  { getJobData }
)(App);
