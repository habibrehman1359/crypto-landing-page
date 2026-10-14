import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "“I’ve had some time to play on Crypters, I love it, think it’ll be a gamechanger! If you knew how much time it’s saving me.”",
    name: "Malik Widodo",
    role: "Product Manager at Netflix",
    brand: "NETFLIX",
    brandColor: "#E50914",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    quote:
      "“The execution speed and user experience on Crypters are unmatched. Trading crypto assets has never been this effortless.”",
    name: "Sarah Jenkins",
    role: "Head of Growth at Spotify",
    brand: "SPOTIFY",
    brandColor: "#1DB954",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    quote:
      "“Security and real-time tracking were my top priorities. Crypters delivers on every single promise with absolute transparency.”",
    name: "David Chen",
    role: "Senior Engineer at Google",
    brand: "GOOGLE",
    brandColor: "#4285F4",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Testimonial() {
  const [testiIndex, setTestiIndex] = useState(0);

  const prevSlide = () => {
    setTestiIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setTestiIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[testiIndex];

  return (
    <section
      className="testimonial-section py-5 position-relative"
      id="testimonial"
    >
      <div className="container py-lg-5">
        <div className="row align-items-center gy-5 justify-content-center">
          {/* Avatar & Dynamic Brand Badge */}
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <div className="testimonial-avatar-wrapper position-relative d-inline-block">
              <img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="testimonial-img img-fluid rounded-4"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80";
                }}
              />

              <div className="netflix-badge bg-white shadow-sm rounded-3 py-2 px-4 position-absolute d-flex align-items-center justify-content-center">
                <span
                  className="netflix-text fw-bold"
                  style={{ color: current.brandColor }}
                >
                  {current.brand}
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote & Interactive Controls */}
          <div className="col-12 col-md-7 col-lg-6">
            <div className="testimonial-content position-relative ps-lg-4">
              <span className="testimonial-sparkle position-absolute">✦</span>

              <h3 className="testimonial-quote fw-bold mb-4">
                {current.quote}
              </h3>

              <div className="testimonial-author mb-4">
                <h6 className="author-name fw-bold mb-1">{current.name}</h6>
                <p className="author-role text-secondary mb-0">
                  {current.role}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="testimonial-controls d-flex align-items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="btn btn-arrow-nav d-inline-flex align-items-center justify-content-center shadow-none"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="btn btn-arrow-nav d-inline-flex align-items-center justify-content-center shadow-none"
                  aria-label="Next Testimonial"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00A3FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
