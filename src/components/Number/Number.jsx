import React from "react";
import "./number.css";
import "../../assets/css/grid.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link } from "react-router-dom";
export default function Number() {
  const LineSmall = {
    width: "15%",
  };
  return (
    <div class="number">
      <div class="grid wide">
        <div class="row sm-gutter">
          <div class="number-item col l-2 c-6">
            <div class="number-item-numbers">908+</div>
            <div class="line">
              <div style={LineSmall} class="line-left"></div>
              <div style={LineSmall} class="line-center"></div>
              <div style={LineSmall} class="line-right"></div>
            </div>
            <div class="number-item-title">Dự án thực hiện</div>
          </div>
          <div class="number-item col l-2 c-6">
            <div class="number-item-numbers">1500+</div>
            <div class="line">
              <div style={LineSmall} class="line-left"></div>
              <div style={LineSmall} class="line-center"></div>
              <div style={LineSmall} class="line-right"></div>
            </div>
            <div class="number-item-title">Hợp đồng kí kết</div>
          </div>
          <div class="number-item col l-2 c-6" >
            <div class="number-item-numbers">809+</div>
            <div class="line">
              <div style={LineSmall} class="line-left"></div>
              <div style={LineSmall} class="line-center"></div>
              <div style={LineSmall} class="line-right"></div>
            </div>
            <div class="number-item-title" >khách hàng hài lòng</div>
          </div>
          <div class="number-item col l-2 c-6">
            <div class="number-item-numbers">32+</div>
            <div class="line">
              <div style={LineSmall} class="line-left"></div>
              <div style={LineSmall} class="line-center"></div>
              <div style={LineSmall} class="line-right"></div>
            </div>
            <div class="number-item-title">Giải thưởng</div>
          </div>
          <div class="number-item col l-2">
          <Link to="/service" style={{ textDecoration: "none" }}> 
            <div class="number-item-more">
              Xem thêm
              <DoubleArrowIcon fontSize="large" sx={{ fontSize: 30 }} />
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
