import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc: "Sign up with your verified email and complete standard KYC in less than two minutes.",
    btnText: "Create Account Now",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0084FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Link Your Bank Account",
    desc: "Connect your preferred banking rails, debit card, or Web3 non-custodial wallet seamlessly.",
    btnText: "Link Account Now",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0084FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 22 7 12 2"></polygon>
        <line x1="5" y1="10" x2="5" y2="18"></line>
        <line x1="12" y1="10" x2="12" y2="18"></line>
        <line x1="19" y1="10" x2="19" y2="18"></line>
        <polygon points="2 20 22 20 22 22 2 22 2 20"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Start Buying & Selling",
    desc: "Execute instant market swaps or place limit orders directly on real-time liquid order books.",
    btnText: "Start Trading Now",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0084FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      className="how-it-works-section py-5 position-relative"
      id="how-it-works"
    >
      <div className="container py-lg-5">
        {/* Main Section Header */}
        <div className="text-center mb-5">
          <h2 className="how-it-works-title fw-bold mb-2">How It Works</h2>
          <p className="how-it-works-subtitle text-secondary">
            Crypters supports a variety of the most popular digital currencies
          </p>
        </div>

        {/* Sub Header With Action CTA */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">
          <div>
            <h3 className="sub-heading fw-bold mb-0">
              We Will{" "}
              <span className="text-primary-gradient-text">
                Help You to Start
              </span>{" "}
              <br />
              Crypto Investment <span className="heading-sparkle">✦</span>
            </h3>
          </div>
          <div>
            <a
              href="#get-started"
              className="btn btn-primary-gradient rounded-pill px-4 py-2 fw-semibold"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Interactive 3-Step Process Cards */}
        <div className="row g-4 align-items-stretch">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div key={step.id} className="col-12 col-lg-4">
                <div
                  onMouseEnter={() => setActiveStep(step.id)}
                  onClick={() => setActiveStep(step.id)}
                  className={`process-card p-4 p-xl-5 rounded-4 h-100 d-flex flex-column cursor-pointer ${
                    isActive ? "active-process-card" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-4 position-relative">
                    <div className="process-icon-box rounded-circle d-flex align-items-center justify-content-center">
                      {step.icon}
                    </div>
                    <div className="dashed-step-line flex-grow-1 mx-3"></div>
                    <div className="step-number-badge rounded-circle d-flex align-items-center justify-content-center">
                      {step.id}
                    </div>
                  </div>

                  <h5 className="step-title fw-bold mb-3">{step.title}</h5>
                  <p className="step-desc text-secondary mb-4 flex-grow-1">
                    {step.desc}
                  </p>

                  <div style={{ minHeight: "42px" }}>
                    {isActive ? (
                      <button
                        type="button"
                        className="btn btn-step-action rounded-pill px-3 py-2 fw-semibold"
                      >
                        {step.btnText}
                      </button>
                    ) : (
                      <div className="invisible py-2">Placeholder</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
