'use client';
import React, { CSSProperties, useMemo } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import NextArrow from './components/NextArrow';
import PrevArrow from './components/PrevArrow';
import './styles/slider.scss';

const arrowStyles: CSSProperties = {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '30px',
  height: '30px',
  boxShadow: 'none',
  fontSize: '20px',
  border: '1px solid #ccc',
  padding: '5px',
  zIndex: 1,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  borderRadius: '8px',
};

const dots = 2;

const SliderWrapper = ({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings?: Settings;
}) => {
  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: <NextArrow styles={arrowStyles} />,
      prevArrow: <PrevArrow styles={arrowStyles} />,
      ...settings,
    }),
    [settings],
  );

  return (
    <>
      <Slider {...sliderSettings}>{children}</Slider>
      <style jsx global>{`
        @media screen and (max-width: 560px) {
          .slick-dots .slick-active {
            button {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
};

export default SliderWrapper;
