import React from "react";
import Banner from "../Images/banner-2.jpg";

const Imges = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <img
        style={{ height: "470px", width: "100%", }}
        className="img-fluid banner"
        src={Banner}
      />
      <div className="container">
        <div className="row">
          <div className="col-1  col-md-2 col-lg-2"></div>
          <div style={{ paddingTop: "100px", height: "470px" }} class="col-5  col-md-4 col-lg-3">
            <h1 className="text-dark" >Lorem ispulum demasto crenty</h1>
            <p>lorem ispulum demasto crenty urine bloody</p>
            <button class="button btn btn-outline shadow-lg" type="submit">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imges;
