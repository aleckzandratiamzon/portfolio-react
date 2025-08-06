import React from "react";
import "../css/styles.css";
import "../js/scripts.js";
import { Navbar } from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Page content*/}
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form*/}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope" />
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
            </div>

            <section className="contact-section">
              <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                      <div className="card-body text-center">
                        <i class="bi bi-envelope-fill text-info mb-2"></i>
                        <h4 className="text-uppercase m-0">Email</h4>
                        <hr className="my-4 mx-auto" />
                        <div className="small text-black-50">
                          <a href="#!">hello@yourdomain.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                      <div className="card-body text-center">
                        <i class="bi bi-github text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Github</h4>
                        <hr className="my-4 mx-auto" />
                        <div className="small text-black-50">
                          <a href="http://" target="_blank">
                            Aleckzandra
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                      <div className="card-body text-center">
                        <i class="bi bi-linkedin text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">LinkedIn</h4>
                        <hr className="my-4 mx-auto" />
                        <div className="small text-black-50">
                          <a href="http://" target="_blank">
                            Aleckzandra
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social d-flex justify-content-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123198.49226229411!2d120.45646225826373!3d15.215744647720722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ece2974786bf%3A0x233ff553030874c0!2sMabalacat%20City%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1754452081654!5m2!1sen!2sph"
                    className="h-100 w-100"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
