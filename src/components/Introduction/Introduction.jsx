import React from "react";
import "../../assets/css/grid.css";
import Donaldson from "../../assets/images/Donaldson-Products-scaled 1 (1).png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function Introduction() {
  const Introduction = styled.div`
    text-align: center;
    padding-top: 70px;
    font-style: normal;
    ${mobile({ paddingTop: "20px" })}
  `;
  const IntroductionHeader = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #159eec;
    ${mobile({fontSize:"10px", padding:"0"})}
  `;
  const IntroductionTitle = styled.div`
    padding: 10px 0;
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    color: #1f2b6c;
    ${mobile({fontSize:"15px", padding:"0"})}
  `;
  const IntroductionDes = styled.div`
    padding: 10px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #212124;
    width: 658px;
    ${mobile({fontSize:"13px",width:"320px", paddingLeft:"10px"})}
  `;
  const IntroductionMore = styled.div`
    padding: 10px 0;
    font-weight: 400;
    font-size: 16px;
    color: #159eec;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({fontSize:"15px"})}
  `;
  const IntroductionDivImg = styled.div`
    padding: 10px 0;
    width: 100%;
    height: 100%;
    ${mobile({padding:0})}
  `;
  const IntroductionImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const Line = styled.div`
    display: flex;
    width: 100%;
  `;
  const LineLeft = styled.div`
    width: 20%;
    background-color: #bfd2f8;
    height: 6px;
  `;
  const LineCenter = styled.div`
    width: 60%;
    background-color: #1f2b6c;
    height: 6px;
  `;
  const LineRight = styled.div`
    width: 20%;
    background-color: #159eec;
    height: 6px;
  `;
  return (
    <Introduction>
      <div
        className="grid wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <IntroductionHeader>CHÀO MỪNG QUÝ KHÁCH ĐẾN VỚI</IntroductionHeader>
        <IntroductionTitle>
          Công ty TNHH TM - DV Tiến Đức Phát
        </IntroductionTitle>
        <IntroductionDes>
          Được thành lập năm 2012, chúng tôi chuyên cung cấp các thiết bị ngành
          lọc khí, nước, hóa chất của thương hiệu Donaldson. Là nhà phân phối
          chính thức của Donaldson tại miền nam Việt Nam về các sản phẩm máy sấy
          khí, thiết bị lọc khí và thiết bị lọc chất lỏng.
        </IntroductionDes>
        <IntroductionMore>
          Đọc Thêm ---
          <DoubleArrowIcon fontSize="large" />
        </IntroductionMore>
        <IntroductionDivImg>
          <IntroductionImg src={Donaldson} alt="Donaldson"></IntroductionImg>
        </IntroductionDivImg>
        <Line>
          <LineLeft></LineLeft>
          <LineCenter></LineCenter>
          <LineRight></LineRight>
        </Line>
      </div>
    </Introduction>
  );
}
