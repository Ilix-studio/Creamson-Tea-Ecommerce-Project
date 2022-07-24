import React from "react";
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <>
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">The Taste you deserve!</p>
        <h3>Creamson Tea</h3>
        <img src="" alt="" className="hero-banner-image" />
        <div>
          <Link href="/">
            <button type="button">Buy Now</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroBanner;
