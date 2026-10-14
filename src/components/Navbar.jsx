import React from "react";

export default function Navbar() {
  return (
    <header className="navbar-section">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container align-items-center justify-content-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
          >
            <span className="brand-icon d-inline-flex align-items-center justify-content-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="url(#brandGradient)" />
                <path
                  d="M10 24L15.5 13L19 19L23 11L27 24H23.5L21.5 17.5L18 23.5L15 18L12.5 24H10Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="brandGradient"
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
              <span className="brand-meta">Meta</span>
              <span className="brand-bits">Bits</span>
            </span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="navbar-toggler border-0 shadow-none px-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center gap-lg-4 gap-2 pt-3 pt-lg-0 list-unstyled mb-0">
              <li className="nav-item">
                <a href="#exchange" className="nav-link custom-nav-link px-2">
                  Exchange
                </a>
              </li>
              <li className="nav-item">
                <a href="#buy-crypto" className="nav-link custom-nav-link px-2">
                  Buy Crypto
                </a>
              </li>
              <li className="nav-item">
                <a href="#market" className="nav-link custom-nav-link px-2">
                  Market
                </a>
              </li>
              <li className="nav-item">
                <a href="#discover" className="nav-link custom-nav-link px-2">
                  Discover
                </a>
              </li>
            </ul>

            {/* Mobile View Action Buttons */}
            <div className="d-flex d-lg-none flex-column gap-2 mt-3 pb-3 border-top pt-3 w-100">
              <a href="#login" className="btn btn-login-pill text-center w-100">
                Login
              </a>
              <a
                href="#get-started"
                className="btn btn-primary-gradient text-center w-100"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <a href="#login" className="btn btn-login-pill">
              Login
            </a>
            <a href="#get-started" className="btn btn-primary-gradient">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
