import React, { useEffect, useState } from "react";
import "./products.css";
import "../../assets/css/grid.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import SliderHeader from "../../components/SliderHeader/SliderHeader";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link, useHistory, useLocation } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { publicRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../redux/apiCalls";
export default function Products() {
  const ArrowIconStyle = styled.div`
  color: "#000000",
  font-size: "20px",
  `;
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);
  const [loadingItems, setLoadingItems] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.category.categories);
  // useEffect(() => {
  //   getCategories(dispatch);
  // }, [dispatch]);

  useEffect(() => {
    getProducts(cat, dispatch);
    setLoadingItems(true);
  }, [cat, dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedOption(selectedValue);
    history.push(selectedValue);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Số lượng sản phẩm hiển thị trên mỗi trang
  const totalPages = Math.ceil(products.length / productsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePageChange = (pageNumber) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setCurrentPage(pageNumber);
  };

  return (
    <section style={{overflowX:"hidden",overflowY:"hidden"}}>
      <Navbar />
      <SliderHeader title="Sản Phẩm" />
      <section>
        {loading ? (
          <div class="products">
            <div class="grid wide">
              <div class="row sm-gutter">
                <div class="products-left col l-3 hide-on-mobile">
                  <div class="products-category_header">Danh mục sản phẩm</div>
                  <Link
                    to="/products"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <div
                      className={`products-category_title ${
                        cat == null ? "category_active" : ""
                      }`}
                    >
                      <p>Tất cả sản phẩm</p>
                    </div>
                  </Link>

                  {loading ? (
                    categories.map((category) => (
                      <Link
                        to={`/products/${category.cat}`}
                        key={category.cat}
                        style={{ textDecoration: "none", color: "#000000" }}
                      >
                        <div
                          className={`products-category_title ${
                            cat == category.cat ? "category_active" : ""
                          }`}
                        >
                          <p>{category.title}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={"305px"}
                      style={{ marginLeft: "-4px" }}
                      height={"300px"}
                    />
                  )}
                </div>
                <div className="products-left_mobile">
                  <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="/products">Tất cả sản phẩm</option>
                    {loading ? (
                      categories.map((category) => (
                        <option
                          value={`/products/${category.cat}`}
                          key={category.cat}
                        >
                          {category.title}
                        </option>
                      ))
                    ) : (
                      <option disabled>
                        <Skeleton
                          variant="rounded"
                          animation="wave"
                          width={"305px"}
                          style={{ marginLeft: "-4px" }}
                          height={"300px"}
                        />
                      </option>
                    )}
                  </select>
                </div>
                <div class="products-right col c-12 l-9">
                  <div class="products-items">
                    <div class="row sm-gutter">
                      {currentProducts.map((product) =>
                        loadingItems ? (
                          <div class="products-item col c-12 l-3">
                            <Link
                              to={`/product/${product._id}`}
                              key={product._id}
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                              }}
                            >
                              <div class="products-img">
                                <img src={product.imgs[0]} alt="Product" />
                              </div>
                              <div class="products-text">
                                <div class="products-header">
                                  {product.title}
                                </div>
                                <div className="products-details">
                                  Xem chi tiết
                                </div>
                                {/* <div class="products-model">
                                  {product.model}
                                </div>
                                <div class="products-code">{product.code}</div> */}
                              </div>
                            </Link>
                          </div>
                        ) : (
                          <Box
                            sx={{ overflow: "hidden" }}
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            <Skeleton
                              variant="rounded"
                              animation="wave"
                              width={"210px"}
                              height={"161px"}
                              // style={{ marginLeft: "10px",marginRight: "10px" }}
                            />
                            <Skeleton />
                            <Skeleton
                              width="210px"
                              animation="wave"
                              // style={{ marginLeft: "10px" }}
                            />
                          </Box>
                        )
                      )}
                    </div>
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
              style={{ width: "100px", height: "100px", margin: "auto" }}
            />
          </Box>
        )}
      </section>
      <ContactForm />
      <Footer />
    </section>
  );
}
