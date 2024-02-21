import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";
import "../../assets/css/grid.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import SliderHeader from "../../components/SliderHeader/SliderHeader";
import productex from ".././../assets/images/productex.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { publicRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/apiCalls";
import { getCategories } from "../../redux/apiCalls";
import slugify from "slugify";
export default function News() {
  const SearchIconStyle = styled.div`
    font-size: 35px;
    color: #f2f2f2;
    margin-right: 10px;

    &:hover {
      color: red;
    }
  `;
  const [loading, setLoading] = useState(true);
  const [loadingCat, setLoadingCat] = useState(true);
  // const dispatch = useDispatch();
  const news = useSelector((state) => state.new.news);
  const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  // useEffect(() => {
  //   getCategories(dispatch);
  //   const timeout = setTimeout(() => {
  //     setLoadingCat(true);
  //   }, 1000);
  //   return () => clearTimeout(timeout);

  // }, [dispatch]);

  // useEffect(() => {
  //   getNews(dispatch);
  //   const timeout = setTimeout(() => {
  //     setLoading(true);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5; // Số lượng tin tức hiển thị trên mỗi trang
  const totalPages = Math.ceil(news.length / newsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const convertSlugUrl = (str) => {
    if (!str) return "";
    str = slugify(str, {
      lower: true,
      locale: "vi",
    });
    return str;
  };
  return (
    <section style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Navbar />
      <SliderHeader title="Tin Tức" />
      {loading ? (
        <div class="news">
          <div class="grid wide">
            <div class="row sm-gutter">
              <div class="news-left col c-12 l-8">
                {loadingCat ? (
                  currentNews.map((New) => (
                    <Link
                      to={`/new/${convertSlugUrl(New.title)}-${New._id}.html`}
                      key={New._id}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <div class="news-left_item">
                        <div class="news-img">
                          <img src={New.img} alt={New.title} />
                        </div>
                        <div class="news-title">{New.title}</div>
                        <div class="news-des">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(New.descSummary),
                            }}
                          ></div>
                        </div>
                        <div class="news-button">
                          <button type="submit">
                            Đọc Thêm <DoubleArrowIcon fontSize="large" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width={"100%"}
                    height={"800px"}
                  />
                )}
                {totalPages > 1 && (
                  <div className="pagination">
                    {pageNumbers.map((pageNumber) => (
                      <span
                        key={pageNumber}
                        className={`page-number ${
                          pageNumber === currentPage ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div class="news-right col c-4 hide-on-mobile">
                <div class="news-search">
                  <input
                    type="search"
                    name=""
                    id="search"
                    placeholder="Search"
                  />
                  <SearchIconStyle>
                    <SearchIcon style={{ fontSize: 35 }} />
                  </SearchIconStyle>
                </div>
                <div class="news-lists">
                  <div class="news-lists_header">Danh sách</div>
                  {loadingCat ? (
                    categories.map((category) => (
                      <div class="news-lists_item">
                        <div class="row sm-gutter">
                          <div class="news-lists_img col c-4">
                            <img src={category.img} alt={category.title} />
                          </div>
                          <div class="news-lists_title col c-8">
                            {category.title}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={"100%"}
                      height={"650px"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "500px",
          }}
        >
          <CircularProgress
            color="info"
            disableShrink
            style={{ width: "100px", height: "100px", margin: "auto" }}
          />
        </Box>
      )}
      <ContactForm />
      <Footer />
    </section>
  );
}
