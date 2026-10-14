import React, { useState } from "react";

const learnArticles = [
  {
    id: 1,
    category: "Bitcoin",
    title: "DAO's: Social networks that can rewire the world",
    date: "January 6, 2022",
    readTime: "6 min",
    description:
      "Decentralized autonomous organizations represent a fundamental paradigm shift in coordinated digital governance and treasury management.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "Bitcoin",
    title: "Perspective: Bitcoin is not boring",
    date: "January 6, 2022",
    readTime: "6 min",
    description:
      "Examining macro trends, proof-of-work economics, and institutional capital inflows driving global sovereign adoption.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    category: "Blockchain",
    title: "Smart Contracts & The Future of Decentralized Finance",
    date: "February 14, 2022",
    readTime: "4 min",
    description:
      "Smart contracts automate execution with complete transparency on distributed ledger networks.",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    category: "Tutorial",
    title: "Beginner Guide: Setting up your first crypto wallet",
    date: "March 10, 2022",
    readTime: "8 min",
    description:
      "Step-by-step tutorial on private keys, seed phrases, and hardware wallets security.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",
    featured: false,
  },
  {
    id: 5,
    category: "Tutorial",
    title: "How to swap altcoins on decentralized protocols safely",
    date: "April 22, 2022",
    readTime: "5 min",
    description:
      "Learn how liquidity pools and slippage tolerance work during token swaps.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];
const categories = ["All", "Bitcoin", "Blockchain", "Tutorial"];

export default function LearnCrypto() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredList =
    selectedCategory === "All"
      ? learnArticles
      : learnArticles.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section
        className="learn-crypto-section py-5 position-relative"
        id="learn"
      >
        <div className="container py-lg-5">
          <div className="text-center mb-5">
            <h2 className="learn-title fw-bold">Learn Crypto</h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-3 col-lg-2">
              <div className="category-filter-list d-flex flex-row flex-md-column gap-3 mb-4 mb-md-0 overflow-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn text-start p-0 border-0 shadow-none fs-6 ${
                      selectedCategory === cat
                        ? "text-primary fw-bold"
                        : "text-secondary fw-medium"
                    }`}
                    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-md-4">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className="btn btn-primary-gradient rounded-pill px-3 py-2 fs-7 fw-semibold text-nowrap"
                >
                  See More Articles
                </button>
              </div>
            </div>

            <div className="col-12 col-md-9 col-lg-10">
              <div className="row g-4">
                {filteredList.map((article) => (
                  <div
                    key={article.id}
                    className={
                      article.featured
                        ? "col-12 col-lg-6"
                        : "col-12 col-md-6 col-lg-4"
                    }
                  >
                    <div className="article-card h-100">
                      <div className="article-img-box position-relative rounded-4 overflow-hidden mb-3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-100 article-img"
                          style={{
                            height: article.featured ? "240px" : "190px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="article-overlay-bar position-absolute bottom-0 start-0 end-0 d-flex justify-content-between px-3 py-2 text-white">
                          <span className="badge bg-primary rounded-pill px-2">
                            {article.category}
                          </span>
                          <span className="fs-8 text-white-75">
                            {article.date} | {article.readTime}
                          </span>
                        </div>
                      </div>

                      <h5 className="article-title fw-bold mb-2 fs-6">
                        {article.title}
                      </h5>

                      {article.description && (
                        <p className="article-excerpt text-secondary fs-8 mb-0">
                          {article.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="cta-banner-section py-5 position-relative"
        id="cta-banner"
      >
        <div className="container py-lg-4">
          <div className="cta-banner-card position-relative rounded-5 p-4 p-md-5">
            <span className="cta-deco cta-sparkle-1">✦</span>
            <span className="cta-deco cta-sparkle-2">✦</span>
            <span className="cta-deco cta-sparkle-3">✦</span>
            <span className="cta-deco cta-dot-1"></span>
            <span className="cta-deco cta-dot-2"></span>

            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-7 text-center text-lg-start ps-lg-4">
                <h2 className="cta-heading fw-bold mb-4">
                  <span className="cta-cyan-text">Let’s Start Your</span> <br />
                  <span className="cta-blue-text">Crypto Investment Now!</span>
                </h2>

                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
                  <button
                    type="button"
                    className="btn btn-primary-gradient rounded-pill px-4 py-2 fw-semibold shadow-none"
                  >
                    Start Earning
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-cta rounded-pill px-4 py-2 fw-semibold shadow-none"
                  >
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="col-12 col-lg-5 text-center position-relative">
                <div className="cta-image-wrapper p-2">
                  <img
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=650&q=80"
                    alt="Crypto 3D Reward"
                    className="img-fluid cta-coin-img rounded-4"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
