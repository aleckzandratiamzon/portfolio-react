import React from "react";
import "../css/styles.css";
import "../js/scripts.js";

const Footer = () => {
  return (
    <>
      {/* Footer*/}
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">
                Copyright © Aleckzandra. 2025 V1.6
              </div>
            </div>
            <div className="col-auto">
              <a className="fs-5" href="#!">
                <i class="bi bi-facebook"></i>
              </a>
              <span className="mx-3">·</span>
              <a className="fs-5" href="#!">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
