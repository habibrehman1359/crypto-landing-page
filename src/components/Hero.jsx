import React from "react";

export default function Hero() {
  return (
    <section
      className="hero-banner-section position-relative overflow-hidden py-5"
      id="home"
    >
      {/* Ambient background glow dots */}
      <div className="hero-bg-glow glow-left"></div>
      <div className="hero-bg-glow glow-right"></div>
      <div className="deco-sparkle sparkle-top">✦</div>
      <div className="deco-sparkle sparkle-center">✦</div>

      <div className="container position-relative py-lg-4">
        <div className="row align-items-center gy-5">
          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <div className="hero-content pe-lg-4 text-center text-lg-start">
              <span className="badge rounded-pill bg-primary-subtle text-primary fw-semibold px-3 py-2 mb-3">
                Sign Up Today
              </span>

              <h1 className="hero-title fw-bold mb-3 display-5">
                Buy, Sell & Swap <br />
                <span className="text-primary-gradient-text">
                  Cryptocurrency
                </span>{" "}
                <br />
                in Minutes
              </h1>

              <p className="hero-description text-secondary mb-4 mx-auto mx-lg-0 fs-6">
                Trade <span className="fw-semibold text-primary">Bitcoin</span>,{" "}
                <span className="fw-semibold text-primary">Ethereum</span>,{" "}
                <span className="fw-semibold text-muted">USDT</span>, and the
                top altcoins on the legendary crypto asset exchange.
              </p>

              {/* High-Contrast Floating Capsule Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="hero-input-capsule d-flex align-items-center mx-auto mx-lg-0"
              >
                <input
                  type="email"
                  className="form-control border-0 shadow-none hero-input-field px-3"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary-gradient rounded-pill px-4 py-2 text-nowrap fw-semibold"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: High Quality Crypto 3D Graphic */}
          <div className="col-12 col-lg-6 text-center">
            <div className="hero-3d-wrapper position-relative d-inline-block">
              <img
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80"
                alt="Cryptocurrency 3D Illustration"
                className="img-fluid hero-main-img rounded-4 shadow-sm"
                style={{
                  maxHeight: "360px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
