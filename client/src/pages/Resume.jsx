import React from "react";
import "../css/styles.css";
import "../js/scripts.js";
import { Navbar } from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section*/}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                {/* Download resume button*/}
                {/* Note: Set the link href target to a PDF file within your project*/}
                <a className="btn btn-primary px-4 py-3" href="#!">
                  <div className="d-inline-block bi bi-download me-2" />
                  Download Resume
                </a>
              </div>
              {/* Experience Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Feb 2025 - May 2025
                        </div>
                        <div className="small fw-bolder">
                          Solutions Architect Intern
                        </div>
                        <div className="small text-muted">
                          Servo IT Solutions
                        </div>
                        <div className="small text-muted">
                          Angeles City, Pampanga
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        <p>
                          As a Solutions Architecture Intern at Servo IT
                          Solutions, Aleckzandra helped design a serverless
                          infrastructure for the company’s hotel booking system,
                          leveraging AWS Lambda, DynamoDB, S3, and CloudFront to
                          enable scalability, high availability, and efficient
                          content delivery.
                        </p>
                        <p>
                          The proposed architecture reflects her strong grasp of
                          cloud-native and serverless principles. She also
                          evaluated existing systems and suggested integration
                          pathways to enhance long-term scalability—gaining
                          hands-on experience and strengthening her skills in
                          problem-solving, system design, and cross-functional
                          collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Card 2*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          2024 - 2025
                        </div>
                        <div className="small fw-bolder">
                          Full Stack Developer
                        </div>
                        <div className="small text-muted">Capstone Project</div>
                        <div className="small text-muted">
                          Mabalacat City College
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8">
                      <div>
                        <p>
                          As a full-stack developer for her capstone project,
                          Aleckzandra helped build a responsive eCommerce
                          platform using Laravel. She developed key features
                          including the shopping cart, Stripe credit card
                          payment integration, email verification for successful
                          checkouts, product rating via stars, and a fixed
                          product sales report module. Using XAMPP for local
                          development, she ensured seamless functionality and
                          scalability. This project strengthened her skills in
                          Laravel, full-stack development, and real-world
                          eCommerce implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Education Section*/}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* Education Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2022 - 2025
                        </div>
                        <div className="mb-2">
                          <div className="small fw-bolder">
                            Mabalacat City College
                          </div>
                          <div className="small text-muted">
                            Mabacat City, Pampanga
                          </div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">
                            Bachelor of Science in Information Technology
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8">
                      <div>
                        <p>
                          Aleckzandra is a graduate of Mabalacat City College
                          with a Bachelor of Science in Information Technology
                          (BSIT). Her academic background provided a strong
                          foundation in software development, networking,
                          databases, and system administration. Through hands-on
                          projects, she developed solid problem-solving skills
                          and proficiency in modern programming languages and
                          technologies. Driven by a passion for technology, she
                          continues to expand her knowledge and apply it to
                          real-world projects while staying current with
                          industry trends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Divider*/}
            <div className="pb-5" />
            {/* Skills Section*/}
            <section>
              {/* Skillset Card*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* Languages list*/}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash" />
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Knowledgeable in
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Azure DevOps
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Terraform
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          AWS
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Docker
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          SQL
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Laravel
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Node.js
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          JavaScript
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
