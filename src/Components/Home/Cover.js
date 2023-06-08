import React, { useState } from 'react';
import img1 from '../../image/original.webp'
import img2 from '../../image/Merch-By-Amazon-Feature-Image-Post-One-Tyler-Bryden.png'
import img3 from '../../image/coverimage.avif'
import { Carousel } from 'react-bootstrap';

const Cover = () => {


    return (
        <div><div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src={img1} class="w-full" />
        </div> 
        <div id="item2" class="carousel-item w-full">
          <img src={img2} class="w-full" />
        </div> 
        <div id="item3" class="carousel-item w-full">
          <img src={img3} class="w-full" />
        </div> 
       
      </div> 
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a> 
        <a href="#item2" class="btn btn-xs">2</a> 
        <a href="#item3" class="btn btn-xs">3</a> 
       
      </div></div>
    );
};

export default Cover;