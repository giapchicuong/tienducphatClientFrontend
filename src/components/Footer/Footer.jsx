import React from "react";
import "./footer.css";
import "../../assets/css/grid.css";
import logo2 from "../../assets/images/logofooter1.png";
import map from "../../assets/images/map.png";
import {
  Facebook,
  Instagram,
  MailOutline,
  Home,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function Footer() {
  return (
    <footer>
      <div class="grid wide">
        <div class="">
          <div class="footer-items row sm-gutter">
            <div class="footer-item col l-3 c-12">
              <div class="footer-item__logo">
                <img src={logo2} alt="" />
              </div>
              <div class="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.60340847044!2d106.75364178715822!3d10.895139300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8f53c973363%3A0x34074a43ed9a8269!2zQ8O0bmcgVHkgVE5ISCBUTSAtIERWIFRp4bq_biDEkOG7qWMgUGjDoXQ!5e0!3m2!1svi!2s!4v1687840204703!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div class="footer-item col l-3 c-4 hide-on-mobile">
              <div class="footer-item__title">Danh mục</div>
              <div class="footer-item-ul">
                <ul>
                  <li>
                    <a>Giới Thiệu</a>
                  </li>
                  <li>
                    <a>Dịch Vụ</a>
                  </li>
                  <li>
                    <a>Sản Phẩm</a>
                  </li>
                  <li>
                    <a>Liên Hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-item col l-3 c-8">
              <div class="footer-item__title">Liên Hệ</div>
              <div class="footer-item-ul">
                <ul>
                  <li>
                    <a href="tel:+0916605506">Call: (+84) 916-605-506</a>
                  </li>
                  <li>
                    <a href="mailto:tienducphat@tdpvn.com.vn">
                      Email: tienducphat@tdpvn.com.vn
                    </a>
                  </li>
                  <li>
                    <a>
                      Address:128A/9, Nội Hóa II, P. Bình An, TP Dĩ An, Tỉnh
                      Bình Dương
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-item col l-3 c-6  ">
              <div class="footer-item__title">Liên kết nhanh</div>
              <div class="footer-link-icons col l-8">
                <div class="footer-link-icon">
                  <Facebook
                    style={{
                      color: "#BFD2F8",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div class="footer-link-icon">
                  <Instagram
                    style={{
                      color: "#BFD2F8",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div class="footer-link-icon">
                  <MailOutline
                    style={{
                      color: "#BFD2F8",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div class="footer-link-icon">
                  <Home
                    style={{
                      color: "#BFD2F8",
                      fontSize: "24px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-link row sm-gutter">
          <div class="footer-link-title col l-11 c-7">
            © 2022 Tien Duc Phat Trading Service Co.,LTD
          </div>
        </div>
      </div>
    </footer>
  );
}
