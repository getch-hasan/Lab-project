import React, { useState } from 'react';
import img1 from '../../image/original.webp'
import img2 from '../../image/Merch-By-Amazon-Feature-Image-Post-One-Tyler-Bryden.png'
import img3 from '../../image/coverimage.avif'
import { Carousel } from 'react-bootstrap';

const Cover = () => {


  return (
    <div><div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img src={img1} className="w-full" />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img src={img2} className="w-full" />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img src={img3} className="w-full" />
      </div>

    </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>

      </div></div>
  );
};

export default Cover;