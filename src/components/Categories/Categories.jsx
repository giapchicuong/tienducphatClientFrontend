import React, { useEffect, useState } from "react";
import { mobile } from "../../responsive";
import CategoryItem from "../CategoryItem/CategoryItem";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/apiCalls";
const Product = styled.div`
  width: 100%;
  font-style: normal;
  padding-top: 67px;
  padding-bottom: 72px;
`;
const ProductHeader = styled.div`
  padding-top: 65px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #159eec;
  padding: 10px 0;
  ${mobile({  fontSize: "18px"})}
`;
const ProductTitle = styled.div`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #1f2b6c;
  text-align: center;
  padding-bottom: 25px;
  ${mobile({  fontSize: "25px"})}
`;
export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  return (
    <Product>
      <div className="grid wide">
        <ProductHeader>CHÚNG TÔI CUNG CẤP</ProductHeader>
        <ProductTitle>SẢN PHẨM</ProductTitle>
        <div className="row sm-gutter">
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Product>
  );
}
