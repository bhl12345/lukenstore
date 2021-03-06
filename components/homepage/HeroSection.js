import React, { Component } from 'react';
import Swiper, { EffectFade, Autoplay } from 'react-id-swiper';
import Link from 'next/link';

const params = {
  modules: [EffectFade, Autoplay],
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section position-relative">
        <Swiper {...params}>
          {images.map((image, index) => (
            <div key={image}>
              <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                style={{
                  backgroundImage: `url("${image}")`
                }}
              >
                <p style={{color:`white` ,fontWeight: `bold`}} className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                  Tristen's Art Shop
                </p>
                <p style={{color:`white` ,fontWeight: `bold`}} className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                  Original Designs
                </p>
                <Link  href="/collection">
                  <a style={{color:`white` ,fontWeight: `bold`}} className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 ">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}
