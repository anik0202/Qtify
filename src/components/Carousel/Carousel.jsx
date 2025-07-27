import Card from '../Card/Card';
import styles from './Carousel.module.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import React, { useEffect } from 'react';



function Carousel({ items, onItemClick }) {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {items.map((item) => (
          <div className="swiper-slide" key={item.id}>
            <Card 
                cardImage={item.image}
                follows={item.follows}
                title={item.title}
            />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default Carousel;