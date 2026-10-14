import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section pt-5 pb-4">
      <div className="container pt-lg-4">
        <div className="row gy-4 mb-5 justify-content-between">
          {/* Brand & Summary Column */}
          <div className="col-12 col-lg-4">
            <a
              href="#home"
              className="d-flex align-items-center gap-2 text-decoration-none mb-3"
            >
              <span className="brand-icon d-inline-flex align-items-center justify-content-center">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="url(#footerLogoGrad)" />
                  <path
                    d="M10 24L15.5 13L19 19L23 11L27 24H23.5L21.5 17.5L18 23.5L15 18L12.5 24H10Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="footerLogoGrad"
                      x1="4"
                      y1="4"
                      x2="32"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00D2FF" />
                      <stop offset="1" stopColor="#0062FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="brand-text">
                <span className="brand-meta text-white">Meta</span>
                <span className="brand-bits text-primary-gradient-text">
                  Bits
                </span>
              </span>
            </a>
            <p className="footer-desc text-white-50 pe-lg-4 mb-0">
              Leading decentralized cryptocurrency platform delivering real-time
              execution, secure custody, and institutional trading protocols.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-12 col-lg-7">
            <div className="row gy-4">
              {/* Features Links */}
              <div className="col-4">
                <h6 className="footer-col-title text-white fw-bold mb-3">
                  Features
                </h6>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li>
                    <a href="#exchange" className="footer-link">
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#market" className="footer-link">
                      Buy Crypto
                    </a>
                  </li>
                  <li>
                    <a href="#learn" className="footer-link">
                      Learn Crypto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="col-4">
                <h6 className="footer-col-title text-white fw-bold mb-3">
                  Resources
                </h6>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li>
                    <a href="#about" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="col-4">
                <h6 className="footer-col-title text-white fw-bold mb-3">
                  Follow us
                </h6>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider mb-4"></div>

        {/* Bottom Copyright & Policy Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <p className="footer-copy text-white-50 fs-8 mb-0">
            Copyright ©{" "}
            <a
              href="https://profigmatemplates.com"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              ProFigmaTemplates.com
            </a>
            , All Rights Reserved.
          </p>
          <p className="footer-legal text-white-50 fs-8 mb-0">
            <a href="#privacy" className="footer-legal-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms" className="footer-legal-link">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
