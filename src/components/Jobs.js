import React from "react";

const Jobs = () => {
  return (
    <div className="container">
      <h2 className="text-center">Find your jobs.</h2>
      <div className="row mt-5">
        <div className="col-md-6 mt-3">
          <div className="border border-secondary p-3 rounded">
            <div>
              <h4>Customer Care Representative-Remote.</h4>
              <p>Company: Skygen</p>
              <p>Location: Fort Washington, PA</p>
              <p>Salary: $65k - $122k</p>
            </div>
            <button className="btn btn-info">Job details</button>
            <button className="btn btn-info ml-4">Easy Apply</button>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="border border-secondary p-3 rounded">
            <div>
              <h4>Customer Care Representative-Remote.</h4>
              <p>Company: Skygen</p>
              <p>Location: Fort Washington, PA</p>
              <p>Salary: $65k - $122k</p>
            </div>
            <button className="btn btn-info">Job details</button>
            <button className="btn btn-info ml-4">Easy Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
