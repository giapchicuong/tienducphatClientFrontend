import "./ourCustomer.css";
import "../../assets/css/grid.css";
import { PartnerItems } from "../../data";
import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OurCustomer = () => {
  // const [products, setProducts] = useState([]);
  // const [visibleProducts, setVisibleProducts] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [autoPlay, setAutoPlay] = useState(true);
  // const windowSize = 4;

  // useEffect(() => {
  //   setProducts(PartnerItems);
  //   setVisibleProducts(PartnerItems.slice(0, windowSize));

  //   const interval = setInterval(() => {
  //     if (autoPlay) {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % PartnerItems.length);
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [autoPlay]);

  // const goToPreviousSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + PartnerItems.length) % PartnerItems.length
  //   );
  //   setAutoPlay(false); // Dừng tự động chạy khi người dùng nhấn vào nút "Next"
  //   setTimeout(() => {
  //     setAutoPlay(true); // Khởi động lại tự động chạy sau 5 giây
  //   }, 10000);
  // };
  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % PartnerItems.length);
  //   setAutoPlay(false); // Dừng tự động chạy khi người dùng nhấn vào nút "Next"
  //   setTimeout(() => {
  //     setAutoPlay(true); // Khởi động lại tự động chạy sau 5 giây
  //   }, 10000);
  // };

  return (
    <div className="ourcustomer">
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className="ourcustomer-title col l-12">
            Khách hàng của chúng tôi
          </div>
          <div className="ourcustomer-items auto-slide col l-12">
            {/* <ArrowBackIosNewIcon style={{ fontSize: 20, color: "#999999",position:"relative",zIndex:101 }} onClick={goToPreviousSlide}/> */}

            <div className="Our_partner">
              {PartnerItems.map((product) => (
                <div key={product.id} className="Our_part">
                  <img src={product.img} alt={product.name} />
                </div>
              ))}
            </div>
            {/* <ArrowForwardIosIcon style={{ fontSize: 20, color: "#999999" }} onClick={goToNextSlide}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
