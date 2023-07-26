import React from "react";
import "./sliderHeader.css";
import "../../assets/css/grid.css";
import introduce from "../../assets/images/introduce.png";
export default function SliderHeader({ title }) {
  return (
    <div class="slider hide-on-mobile">
      <img src={introduce} alt="introduce" />
      <div class="grid wide">
        <div class="row sm-gutter">
          <div class="slider-header col c-12">Chào mừng đến trang</div>
          <div class="slider-title col c-12">{title}</div>
        </div>
      </div>
      <div class="line">
        <div class="line-left"></div>
        <div class="line-center"></div>
        <div class="line-right"></div>
      </div>
    </div>
  );
}
