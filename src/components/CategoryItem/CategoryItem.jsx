import React from "react";
import "../../assets/css/grid.css";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function CategoryItem({ item }) {
  const ProductItems = styled.div`
    padding-top: 25px;
    width: 100%;
    &:hover: {
      transform: scale(1.02);
      transition: 0.9s;
    }
  `;
  const ProductItem = styled.div`
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    color: #fcfefe;
    ${mobile({ padding:"20px" })}
  `;
  const ProductItemImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 10px;
  `;
  const ProductItemTitle = styled.div`
    height: 42px;
    background: #1d4499;
    border-radius: 0px 0px 5px 5px;
  `;
  const ProductItemTitleP = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
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
    <ProductItems className="col c-12 m-6 l-4">
      <Link style={{ textDecoration: "none" }} to={`/products/${item.cat}`}>
        <ProductItem>
          <ProductItemImg src={item.img} alt={item.title}></ProductItemImg>
          <Line>
            <LineLeft></LineLeft>
            <LineCenter></LineCenter>
            <LineRight></LineRight>
          </Line>
          <ProductItemTitle>
            <ProductItemTitleP>{item.title}</ProductItemTitleP>
          </ProductItemTitle>
        </ProductItem>
      </Link>
    </ProductItems>
  );
}
