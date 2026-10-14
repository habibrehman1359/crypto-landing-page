import React, { useState, useEffect } from "react";

const initialCoins = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    current_price: 83337.0,
    price_change_percentage_24h: 0.01,
    price_change_percentage_7d_in_currency: -0.89,
    market_cap: 1674981383965,
    sparkline_in_7d: {
      price: [84000, 83800, 83200, 83500, 83100, 83400, 83337],
    },
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    current_price: 2501.55,
    price_change_percentage_24h: 0.14,
    price_change_percentage_7d_in_currency: -4.36,
    market_cap: 305533834468,
    sparkline_in_7d: {
      price: [2650, 2600, 2520, 2540, 2480, 2495, 2501],
    },
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    id: "tether",
    symbol: "USDT",
    name: "Tether",
    current_price: 0.999,
    price_change_percentage_24h: 0.0,
    price_change_percentage_7d_in_currency: -0.05,
    market_cap: 184011574702,
    sparkline_in_7d: {
      price: [1.0, 1.0, 0.999, 1.0, 0.999, 0.999, 0.999],
    },
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "BNB",
    current_price: 741.69,
    price_change_percentage_24h: 0.3,
    price_change_percentage_7d_in_currency: -4.05,
    market_cap: 98762253891,
    sparkline_in_7d: {
      price: [770, 760, 745, 750, 738, 740, 741],
    },
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
  },
  {
    id: "ripple",
    symbol: "XRP",
    name: "XRP",
    current_price: 1.37,
    price_change_percentage_24h: 0.61,
    price_change_percentage_7d_in_currency: -6.65,
    market_cap: 86418540153,
    sparkline_in_7d: {
      price: [1.45, 1.42, 1.38, 1.39, 1.35, 1.36, 1.37],
    },
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  },
  {
    id: "usd-coin",
    symbol: "USDC",
    name: "USDC",
    current_price: 1.0,
    price_change_percentage_24h: -0.01,
    price_change_percentage_7d_in_currency: -0.01,
    market_cap: 72946169582,
    sparkline_in_7d: {
      price: [1.0, 1.0, 1.0, 0.999, 1.0, 1.0, 1.0],
    },
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  },
];

export default function MarketTrend() {
  const [cryptoData, setCryptoData] = useState(initialCoins);

  // 1. Live Fetch CoinGecko API (Every 60s to prevent Rate Limits)
  useEffect(() => {
    let isMounted = true;

    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=24h,7d",
        );
        if (!response.ok) throw new Error("Rate limit hit");
        const data = await response.json();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setCryptoData(data);
        }
      } catch {
        // Fallback safely preserved
      }
    };

    fetchMarketData();
    const apiInterval = setInterval(fetchMarketData, 60000);

    return () => {
      isMounted = false;
      clearInterval(apiInterval);
    };
  }, []);

  // 2. Real-Time Tick Update (Exact 5 Seconds Interval)
  useEffect(() => {
    const tickInterval = setInterval(() => {
      setCryptoData((prevCoins) =>
        prevCoins.map((coin) => {
          // Stablecoins (USDT, USDC) me micro shift ya zero shift
          if (
            coin.symbol.toLowerCase() === "usdt" ||
            coin.symbol.toLowerCase() === "usdc"
          ) {
            return coin;
          }

          // Random natural swing between -0.08% to +0.08%
          const deltaPct = Math.random() * 0.16 - 0.08;
          const priceMultiplier = 1 + deltaPct / 100;
          const newPrice = coin.current_price * priceMultiplier;
          const newChange24h =
            (coin.price_change_percentage_24h || 0) + deltaPct * 0.1;

          // Update sparkline last point
          let updatedSparkline = coin.sparkline_in_7d?.price
            ? [...coin.sparkline_in_7d.price]
            : [];
          if (updatedSparkline.length > 0) {
            updatedSparkline[updatedSparkline.length - 1] = newPrice;
          }

          return {
            ...coin,
            current_price: newPrice,
            price_change_percentage_24h: newChange24h,
            sparkline_in_7d: {
              ...coin.sparkline_in_7d,
              price: updatedSparkline,
            },
          };
        }),
      );
    }, 5000);

    return () => clearInterval(tickInterval);
  }, []);

  const renderSparkline = (prices, isPositive) => {
    if (!prices || prices.length === 0) return null;
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min || 1;
    const width = 120;
    const height = 36;
    const step = Math.floor(prices.length / 20) || 1;
    const points = prices
      .filter((_, idx) => idx % step === 0)
      .slice(0, 20)
      .map((val, idx, arr) => {
        const x = (idx / (arr.length - 1)) * width;
        const y = height - ((val - min) / range) * (height - 8) - 4;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

    const strokeColor = isPositive ? "#0BB783" : "#F64E60";
    const bgColor = isPositive
      ? "rgba(11, 183, 131, 0.08)"
      : "rgba(246, 78, 96, 0.08)";

    return (
      <div
        className="sparkline-wrapper px-2 py-1 rounded-2"
        style={{ backgroundColor: bgColor }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
        </svg>
      </div>
    );
  };

  return (
    <>
      <section className="partners-section">
        <div className="container">
          <div className="partners-card bg-white rounded-4 p-4 p-lg-5">
            <h4 className="partners-heading text-center fw-bold mb-4 mb-lg-5">
              Where to Buy Cryptocurrency
            </h4>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 align-items-center justify-content-center text-center">
              <div className="col">
                <span
                  className="partner-text fw-bold text-uppercase fs-4"
                  style={{ color: "#0052FF" }}
                >
                  coinbase
                </span>
              </div>
              <div className="col">
                <span
                  className="partner-text fw-bold text-uppercase fs-4"
                  style={{ color: "#5741D9" }}
                >
                  kraken
                </span>
              </div>
              <div className="col">
                <span
                  className="partner-text fw-bold text-uppercase fs-4"
                  style={{ color: "#F3BA2F" }}
                >
                  BINANCE
                </span>
              </div>
              <div className="col">
                <span
                  className="partner-text fw-bold text-uppercase fs-4"
                  style={{ color: "#00DCFA" }}
                >
                  GEMINI
                </span>
              </div>
              <div className="col">
                <span
                  className="partner-text fw-bold text-uppercase fs-4"
                  style={{ color: "#3B82F6" }}
                >
                  EXMO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="market-trend-section py-5 position-relative"
        id="market"
      >
        <div className="container py-lg-3">
          <div className="text-center mb-4">
            <h2 className="market-title fw-bold">Market Trend</h2>
            <p className="market-subtitle text-secondary mx-auto">
              Real-time asset valuations and 7-day performance tracking across
              the top crypto liquid pairs.
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 mb-5 flex-wrap">
            <div className="mini-badge-coin badge-btc">
              <span className="coin-letter">₿</span>
            </div>
            <div className="mini-badge-coin badge-eth">
              <span className="coin-letter">♦</span>
            </div>
            <div className="mini-badge-coin badge-bnb">
              <span className="coin-letter">❖</span>
            </div>
            <div className="mini-badge-coin badge-atom">
              <span className="coin-letter">⚛</span>
            </div>
            <div className="mini-badge-coin badge-xrp">
              <span className="coin-letter">✕</span>
            </div>
            <div className="mini-badge-coin badge-sol">
              <span className="coin-letter">B</span>
            </div>
          </div>

          <div className="market-card bg-white rounded-4 p-3 p-md-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <h3 className="ranking-title fw-bold mb-0">
                Ranking Cryptocurrency
              </h3>
              <button className="btn btn-primary-gradient rounded-pill px-4 py-2 fs-7 fw-semibold">
                See all Coins
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-borderless align-middle market-table mb-0">
                <thead>
                  <tr className="table-header-row text-secondary">
                    <th
                      scope="col"
                      className="ps-3 py-3"
                      style={{ width: "4%" }}
                    >
                      #
                    </th>
                    <th scope="col" className="py-3" style={{ width: "22%" }}>
                      Name
                    </th>
                    <th scope="col" className="py-3" style={{ width: "15%" }}>
                      Price
                    </th>
                    <th scope="col" className="py-3" style={{ width: "13%" }}>
                      24h %
                    </th>
                    <th scope="col" className="py-3" style={{ width: "13%" }}>
                      7d %
                    </th>
                    <th scope="col" className="py-3" style={{ width: "18%" }}>
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className="text-end pe-3 py-3"
                      style={{ width: "15%" }}
                    >
                      Last 7 Days
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((coin, index) => {
                    const is24hPos =
                      (coin.price_change_percentage_24h || 0) >= 0;
                    const is7dPos =
                      (coin.price_change_percentage_7d_in_currency ||
                        coin.price_change_percentage_24h ||
                        0) >= 0;

                    return (
                      <tr key={coin.id} className="coin-row-card">
                        <td className="ps-3 fw-medium text-dark">
                          {index + 1}
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={coin.image}
                              alt={coin.name}
                              className="coin-icon-img rounded-circle"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                  "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png";
                              }}
                            />
                            <span className="fw-bold text-dark">
                              {coin.name}
                            </span>
                            <span className="text-muted fw-semibold text-uppercase fs-7">
                              {coin.symbol}
                            </span>
                            <span className="badge rounded-pill bg-primary px-2 py-1 ms-1 buy-badge">
                              Buy
                            </span>
                          </div>
                        </td>
                        <td className="fw-bold text-dark">
                          $
                          {coin.current_price?.toLocaleString("en-US", {
                            minimumFractionDigits:
                              coin.current_price < 2 ? 3 : 2,
                            maximumFractionDigits:
                              coin.current_price < 2 ? 3 : 2,
                          })}
                        </td>
                        <td>
                          <span
                            className={`fw-semibold d-inline-flex align-items-center gap-1 ${
                              is24hPos ? "text-profit" : "text-loss"
                            }`}
                          >
                            <span>{is24hPos ? "▲" : "▼"}</span>
                            {Math.abs(
                              coin.price_change_percentage_24h || 0,
                            ).toFixed(2)}
                            %
                          </span>
                        </td>
                        <td>
                          <span
                            className={`fw-semibold d-inline-flex align-items-center gap-1 ${
                              is7dPos ? "text-profit" : "text-loss"
                            }`}
                          >
                            <span>{is7dPos ? "▲" : "▼"}</span>
                            {Math.abs(
                              coin.price_change_percentage_7d_in_currency ||
                                coin.price_change_percentage_24h ||
                                0,
                            ).toFixed(2)}
                            %
                          </span>
                        </td>
                        <td className="fw-semibold text-dark">
                          ${Number(coin.market_cap || 0).toLocaleString()}
                        </td>
                        <td className="text-end pe-3">
                          {renderSparkline(
                            coin.sparkline_in_7d?.price,
                            is7dPos,
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
