import React from "react";

const geoPins = [
  { top: "35%", left: "15%" },
  { top: "42%", left: "22%" },
  { top: "68%", left: "24%" },
  { top: "78%", left: "27%" },
  { top: "20%", left: "47%" },
  { top: "26%", left: "51%" },
  { top: "20%", left: "62%" },
  { top: "48%", left: "49%" },
  { top: "58%", left: "53%" },
  { top: "70%", left: "56%" },
  { top: "38%", left: "65%" },
  { top: "32%", left: "80%" },
  { top: "45%", left: "75%" },
  { top: "52%", left: "70%" },
  { top: "78%", left: "82%" },
];

export default function Features() {
  return (
    <>
      {/* SECTION: TRUSTED PLATFORM */}
      <section
        className="trusted-platform-section py-5 position-relative"
        id="features"
      >
        <div className="container py-lg-4">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-7">
              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <div className="feature-item-card p-4 rounded-4 h-100">
                    <div className="feature-icon mb-3 text-primary">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00A3FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <h5 className="feature-title fw-bold mb-2">
                      Secure Storage
                    </h5>
                    <p className="feature-desc text-secondary mb-3">
                      Client digital assets are stored in enterprise-grade
                      multi-signature cold custody vaults.
                    </p>
                    <a
                      href="#learn-more"
                      className="feature-link text-decoration-none fw-semibold"
                    >
                      Learn More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="feature-item-card active-card p-4 rounded-4 h-100">
                    <div className="feature-icon mb-3 text-primary">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00A3FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                    <h5 className="feature-title active-title fw-bold mb-2">
                      Instant Execution
                    </h5>
                    <p className="feature-desc text-secondary mb-3">
                      Sub-millisecond trade routing engine delivering optimal
                      liquidity and zero slippage.
                    </p>
                    <a
                      href="#learn-more"
                      className="feature-link text-decoration-none fw-semibold"
                    >
                      Learn More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="feature-item-card p-4 rounded-4 h-100">
                    <div className="feature-icon mb-3 text-primary">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00A3FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <h5 className="feature-title fw-bold mb-2">
                      Protected by Insurance
                    </h5>
                    <p className="feature-desc text-secondary mb-3">
                      All balances maintained in custodial storage are backed by
                      comprehensive crime policies.
                    </p>
                    <a
                      href="#learn-more"
                      className="feature-link text-decoration-none fw-semibold"
                    >
                      Learn More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="ps-lg-4 text-center text-lg-start">
                <h2 className="trusted-title fw-bold mb-3">
                  The Most Trusted <br />
                  <span className="trusted-gradient-text">
                    Cryptocurrency
                  </span>{" "}
                  <br />
                  Platform
                </h2>
                <p className="trusted-subtitle text-secondary">
                  Institutional security infrastructure, real-time proof of
                  reserves, and audited custody systems tailored for traders
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: KEY FEATURES & GLOBAL STATS */}
      <section
        className="key-features-section py-5 position-relative overflow-hidden"
        id="stats"
      >
        <div className="container py-lg-5 position-relative z-1">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-6">
              <div className="pe-lg-4 text-center text-lg-start">
                <h2 className="features-main-heading fw-bold mb-3">
                  Some <span className="text-cyan-accent">Key Features</span>{" "}
                  <br />
                  Of Crypters <span className="heading-sparkle">✦</span>
                </h2>

                <p className="features-subtext text-secondary mb-5">
                  Powering decentralized finance transactions across global
                  markets with ultra-low latency.
                </p>

                <div className="row g-3 g-md-4 align-items-stretch justify-content-center justify-content-lg-start">
                  <div className="col-4 col-sm-4">
                    <div className="stat-card plain-stat-card text-center d-flex flex-column justify-content-center h-100 p-3">
                      <h3 className="stat-number fw-bold mb-2">$327B</h3>
                      <p className="stat-label text-secondary mb-0">
                        Quarterly <br /> Volume Traded
                      </p>
                    </div>
                  </div>

                  <div className="col-4 col-sm-4">
                    <div className="stat-card active-blue-stat-card text-center d-flex flex-column justify-content-center h-100 p-3">
                      <h3 className="stat-number text-white fw-bold mb-2">
                        100+
                      </h3>
                      <p className="stat-label text-white-50 mb-0">
                        Countries <br /> Supported
                      </p>
                    </div>
                  </div>

                  <div className="col-4 col-sm-4">
                    <div className="stat-card plain-stat-card text-center d-flex flex-column justify-content-center h-100 p-3">
                      <h3 className="stat-number fw-bold mb-2">73+M</h3>
                      <p className="stat-label text-secondary mb-0">
                        Verified <br /> Users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 position-relative text-center">
              <div className="world-map-wrapper position-relative d-inline-block w-100">
                <svg
                  className="world-map-svg w-100"
                  viewBox="0 0 1000 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150,120 Q160,80 230,70 Q300,60 310,120 Q320,160 260,210 Q200,220 180,180 Z M210,240 Q250,250 260,320 Q240,400 200,430 Q170,370 180,300 Z M450,90 Q500,60 580,70 Q600,120 540,160 Q470,160 450,110 Z M490,190 Q550,180 570,250 Q560,350 510,380 Q470,300 480,220 Z M620,80 Q760,50 860,110 Q880,200 790,260 Q680,240 630,170 Z M780,330 Q860,320 880,390 Q840,440 760,420 Q750,360 780,330 Z"
                    fill="#EAEFFB"
                  />
                </svg>

                {geoPins.map((pin, i) => (
                  <span
                    key={i}
                    className="map-pin"
                    style={{ top: pin.top, left: pin.left }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
