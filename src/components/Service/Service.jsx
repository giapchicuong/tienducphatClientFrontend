import React from "react";
import "./service.css";
import "../../assets/css/grid.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div class="service hide-on-mobile">
      <div class="grid wide">
        <div class="service-header">CHÚNG TÔI CUNG CẤP</div>
        <div class="service-title">DỊCH VỤ</div>
        <div class="row sm-gutter">
          <div class="service-items col c-6">
            <Link to="/service" style={{ textDecoration: "none" }}>
              <div class="service-item">
                <div class="service-item__logo">
                  <OfflineBoltOutlinedIcon style={{ fontSize: "60px" }} />
                </div>
                <div class="service-item__title">Tư vấn chuyên nghiệp</div>
                <div class="service-item__des">
                  Được thành lập năm 2012, chúng tôi chuyên cung cấp các thiết
                  bị ngành lọc khí, nước, hóa chất của thương hiệu Donaldson.
                </div>
                <div class="service-item__more">
                  Xem thêm <DoubleArrowIcon fontSize="large" />
                </div>
              </div>
            </Link>
          </div>
          <div class="service-items col c-6">
            <Link to="/service" style={{ textDecoration: "none" }}>
              <div class="service-item color__private">
                <div class="service-item__logo">
                  <PsychologyOutlinedIcon style={{ fontSize: "60px" }} />
                </div>
                <div class="service-item__title">Thiết kế đáp ứng</div>
                <div class="service-item__des">
                  Được thành lập năm 2012, chúng tôi chuyên cung cấp các thiết
                  bị ngành lọc khí, nước, hóa chất của thương hiệu Donaldson.
                </div>
                <div class="service-item__more">
                  Xem thêm <DoubleArrowIcon fontSize="large" />
                </div>
              </div>
            </Link>
          </div>
          <div class="service-items col c-6">
            <Link to="/service" style={{ textDecoration: "none" }}>
              <div class="service-item color__private">
                <div class="service-item__logo">
                  <SettingsOutlinedIcon style={{ fontSize: "60px" }} />
                </div>
                <div class="service-item__title">Thi công và lắp đặt</div>
                <div class="service-item__des">
                  Được thành lập năm 2012, chúng tôi chuyên cung cấp các thiết
                  bị ngành lọc khí, nước, hóa chất của thương hiệu Donaldson.
                </div>
                <div class="service-item__more">
                  Xem thêm <DoubleArrowIcon fontSize="large" />
                </div>
              </div>
            </Link>
          </div>
          <div class="service-items col c-6">
            <Link to="/service" style={{ textDecoration: "none" }}>
              <div class="service-item">
                <div class="service-item__logo">
                  <SecurityOutlinedIcon style={{ fontSize: "60px" }} />
                </div>
                <div class="service-item__title">Bảo trì và sửa chữa</div>
                <div class="service-item__des">
                  Được thành lập năm 2012, chúng tôi chuyên cung cấp các thiết
                  bị ngành lọc khí, nước, hóa chất của thương hiệu Donaldson.
                </div>
                <div class="service-item__more">
                  Xem thêm <DoubleArrowIcon fontSize="large" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
