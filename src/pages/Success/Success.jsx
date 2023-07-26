import success from "../../assets/images/success.png";
import React, { useState } from "react";
import styled from "styled-components";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
export default function Success() {
  const PopupContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3c5077;
    display: flex;
    align-item: center;
    justify-content: center;
  `;
  const PopupButton = styled.button`
    width: 100%;
    margin-top: 50px;
    padding: 10px 0;
    background: #6fd649;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  `;
  const Popup = styled.div`
    width: 400px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    text-align: center;
    z-index: 1000;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px 30px;
    color: #333;
  `;
  const PopupTextH2 = styled.h2`
    font-size: 38px;
    font-weight: 500;
    margin: 30px 0 10px;
  `;
  const PopupTextP = styled.p`
    font-size: 15px;
    padding: 20px 10px 0px 60px;
    text-align: left;
  `;
  const PopupSuccessImg = styled.img`
    width: 100px;
    margin-top: -50px;
    border-radius: 50%;
    position: relative;
    z-index: 10000;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  `;
  return (
    <div>
      <PopupContainer>
        <Popup>
          <PopupSuccessImg src={success} />
          <PopupTextH2> Thank You!</PopupTextH2>
          <PopupTextP>Đơn Hàng của bạn đã nhận</PopupTextP>
          <PopupTextP>Chúng tôi sẽ liên hệ với bạn sớm nhất</PopupTextP>
          <Link to="/">
            <PopupButton>Trở về trang chủ</PopupButton>
          </Link>
        </Popup>
      </PopupContainer>
    </div>
  );
}
