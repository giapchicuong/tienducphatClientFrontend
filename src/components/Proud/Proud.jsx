import React from "react";
import "../../assets/css/grid.css";
import proud1 from "../../assets/images/proud1.png";
import proud2 from "../../assets/images/proud2.png";
import proud3 from "../../assets/images/proud3.png";
import proud4 from "../../assets/images/proud4.png";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function Proud() {
  const Proud = styled.div`
    background: #bdd1f8;
    padding-top: 51px;
    padding-bottom: 71px;
    font-style: normal;
    color: #1d459a;
  `;
  const ProudHeader = styled.div`
    font-weight: 400;
    font-size: 16px;
    ${mobile({  fontSize: "14px" ,paddingLeft:"20px"})}
  `;
  const ProudTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    padding: 10px 0;
    ${mobile({  fontSize: "14px" ,paddingLeft:"20px",paddingBottom:"0",paddingTop:"0"})}
  `;
  const ProudDes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    padding-bottom: 35px;
    width: 573px;
    ${mobile({  fontSize: "13px" ,paddingLeft:"20px",width:"340px",paddingBottom:"10px"})}
  `;
  const ProudItems = styled.div`
    padding-top: 30px;
    ${mobile({ marginLeft:"20px",marginRight:"10px"})}
  `;
  const ProudItem = styled.div``;
  const ProudItemImg = styled.img`
    width: 100%;
    object-fit: contain;
  `;

  return (
    <Proud>
      <div className="grid wide">
        <ProudHeader>CHÚNG TÔI TỰ HÀO KHI CÓ ĐƯỢC CÁC</ProudHeader>
        <ProudTitle>GIẢI THƯỞNG VÀ CHỨNG NHẬN</ProudTitle>
        <ProudDes>
          Hơn 10 năm trong lĩnh vực cung cấp giải pháp và sản phẩm máy nén khí,
          chúng tôi đã được tin tưởng cũng như có những đánh giá tốt từ phía
          khách hàng. Điều này giúp chúng tôi có thêm động lực và sẽ cố gắng hơn
          nữa mang đến những trải nghiệm dịch vụ và sản phẩm tốt nhất đến khách
          hàng.
        </ProudDes>
        <div className="row sm-gutter">
          <ProudItems className="col c-5 l-3">
            <ProudItem>
              <ProudItemImg src={proud1} alt="Proud"></ProudItemImg>
            </ProudItem>
          </ProudItems>
          <ProudItems className="col c-5 l-3">
            <ProudItem>
              <ProudItemImg src={proud2} alt="Proud"></ProudItemImg>
            </ProudItem>
          </ProudItems>
          <ProudItems className="col c-5 l-3">
            <ProudItem>
              <ProudItemImg src={proud3} alt="Proud"></ProudItemImg>
            </ProudItem>
          </ProudItems>
          <ProudItems className="col c-5 l-3">
            <ProudItem>
              <ProudItemImg src={proud4} alt="Proud"></ProudItemImg>
            </ProudItem>
          </ProudItems>
        </div>
      </div>
    </Proud>
  );
}
