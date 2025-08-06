import React from "react";
import "../css/styles.css";
import "../js/scripts.js";
import { Navbar } from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import ePasadya from "../assets/Nutr.png";
import webtender from "../assets/webtender.PNG";
import yum from "../assets/Yum.PNG";
import checkForecasta from "../assets/checkforecasta.PNG";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div>
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder mb-0">
                  <span className="text-gradient d-inline">Projects</span>
                </h1>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    data-bs-target="#ePasadya"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">ePasadya</div>
                    </div>
                    <img className="img-fluid" alt="..." src={ePasadya} />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">ePasadya</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    data-bs-target="#Webtender"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">Webtender</div>
                    </div>
                    <img className="img-fluid" alt="..." src={webtender} />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Webtender</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    data-bs-target="#CheckForecasta"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        CheckForecasta
                      </div>
                    </div>
                    <img className="img-fluid" alt="..." src={checkForecasta} />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      CheckForecasta
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    data-bs-target="#Yum"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">YUM!</div>
                    </div>
                    <img className="img-fluid" alt="..." src={yum} />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading"> YUM!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to action section*/}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">
                Let's build something together
              </h2>
              <Link
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                to="/contact"
              >
                Contact me
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Project Modals*/}
      {/* ePasadya modal*/}
      <div
        className="portfolio-modal modal fade"
        id="ePasadya"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h3 className="text-uppercase">Epasadya</h3>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={ePasadya}
                      alt="..."
                    />
                    <p>
                      ePasadya is an eCommerce platform developed as part of our
                      capstone project. The store provides a seamless shopping
                      experience with an intuitive interface. Built using modern
                      technologies, it supports features like user
                      authentication, product search filters, and responsive
                      design for mobile and desktop. Our goal was to create a
                      fully functional, user-friendly platform that enhances the
                      online shopping experience while showcasing our skills in
                      full-stack development and system design.
                    </p>
                    <ul className="list-inline gap-4">
                      <li>
                        <strong>Visit at: </strong>
                        <a
                          href="https://aleckzandra.netlify.app"
                          target="_blank"
                        >
                          ePasadya
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webtender modal*/}
      <div
        className="portfolio-modal modal fade"
        id="Webtender"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h3 className="text-uppercase">Webtender</h3>

                    <img
                      className="img-fluid d-block mx-auto"
                      src={webtender}
                      alt="..."
                    />
                    <p>
                      Webtender Cocktail Recipe provides users with a
                      comprehensive collection of cocktail recipes. The website
                      allows visitors to search for drinks by name and receive
                      detailed recipes, including ingredients, instructions.
                      This project demonstrates my ability to work with
                      third-party APIs, create interactive user interfaces, and
                      offer a seamless user experience. Whether you're a
                      mixology enthusiast or just looking for new drink ideas,
                      Webtender makes it easy to discover the perfect cocktail.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Visit at: </strong>
                        <a href="https://webtender.netlify.app" target="_blank">
                          Webtender
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CheckForecasta modal*/}
      <div
        className="portfolio-modal modal fade"
        id="CheckForecasta"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h3 className="text-uppercase">CheckForecasta</h3>

                    <img
                      className="img-fluid d-block mx-auto"
                      src={checkForecasta}
                      alt="..."
                    />
                    <p>
                      I developed a weather forecast web application that
                      leverages a third-party API to provide real-time weather
                      data and forecasts. The application allows users to enter
                      their location and receive accurate, up-to-date
                      information, including temperature, humidity, and cloud
                      formation. With an intuitive and responsive design, users
                      can quickly access the weather forecast for today. This
                      project showcases my skills in API integration, dynamic
                      data fetching, and creating user-friendly interfaces,
                      providing a seamless experience for those looking to stay
                      informed about the weather.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Visit at: </strong>
                        <a
                          href="https://checkforecasta.netlify.app"
                          target="_blank"
                        >
                          Checkforecasta
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yum modal*/}
      <div
        className="portfolio-modal modal fade"
        id="Yum"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h3 className="text-uppercase">Yum!</h3>

                    <img
                      className="img-fluid d-block mx-auto"
                      src={yum}
                      alt="..."
                    />
                    <p>
                      I created a dynamic food ordering website that taps into
                      an external API, traditionally used for fetching recipes,
                      to offer users an extensive selection of dishes. The
                      platform allows users to explore various meal categories,
                      and place orders seamlessly—all through a user-friendly
                      and intuitive interface. It’s like having an interactive
                      digital menu that brings global flavors to your
                      fingertips, making food discovery and ordering both fast
                      and enjoyable.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Visit at: </strong>
                        <a
                          href="https://crave-it-tap-it-eat-it.netlify.app"
                          target="_blank"
                        >
                          YUM!
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
