import React from "react";
import "./partner.css";
import "../../assets/css/grid.css";
import donason from "../../assets/images/donason.png";
import cerato from "../../assets/images/cerato.png";
export default function Partner() {
  return (
    <div class="partner">
      <div class="grid wide">
        <div class="partner-header">CHÚNG TÔI tự hào là</div>
        <div class="partner-title">
          NHÀ PHÂN PHỐI CHÍNH THỨC CÁC SẢN PHẨM CỦA
        </div>
        <div class="row sm-gutter">
          <div class="partner-items col c-12 l-6">
            <div class="partner-item">
              <div class="partner-img">
                <img src={donason} alt="" />
              </div>
            </div>
          </div>
          <div class="partner-items col c-12  l-6">
            <div class="partner-item">
              <div class="partner-img">
                <img
                  style={{paddingBottom:19}}
                  src={cerato}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
