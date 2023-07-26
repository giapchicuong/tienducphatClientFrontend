import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { publicRequest } from "../../requestMethods";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DOMPurify from "dompurify";
import Skeleton from "@mui/material/Skeleton";
import "./new.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/apiCalls";
export default function New() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // const [New, setNew] = useState({});
  // const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const newId = location.pathname.split("/")[2];
  const News = useSelector((state) => state.new.news);
  const New = useSelector((state) =>
    state.new.news.find((New) => New._id === newId)
  );
  // useEffect(() => {
  //   const getNew = async () => {
  //     try {
  //       const res = await publicRequest.get("/news/find/" + id);
  //       setNew(res.data);
  //     } catch {}
  //   };
  //   getNew();
  // }, [id]);

  // useEffect(() => {
  //   const getNews = async () => {
  //     try {
  //       const res = await publicRequest.get("/news");
  //       setNews(res.data);
  //       setLoading(true);
  //     } catch {}
  //   };
  //   getNews();
  // },[]);
  useEffect(() => {
    getNews(dispatch);
    setLoading(true);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div class="new">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="new-left col c-12 l-8">
              <div
                class="new-left_item"
                onclick="goToProduct('newsItem.html')"
              >
                <div class="new-img">
                  <img src={New.img} alt={New.title} />
                </div>
                <div class="new-title">{New.title}</div>
                <div class="new-des">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(New.descDetails),
                    }}
                  ></div>
                </div>
                <Link
                  to={`/news/`}
                  key={New._id}
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <div class="news-button">
                    <button type="submit">
                      <KeyboardDoubleArrowLeftIcon fontSize="large" /> Trở lại
                    </button>
                    {/* <button type="submit">
                    Tin kế tiếp{" "}
                    <KeyboardDoubleArrowRightIcon fontSize="large" />
                    </Link>
                  </button> */}
                  </div>
                </Link>
              </div>
            </div>
            <div class="new-right col c-4 hide-on-mobile">
              <div class="new-search">
                <input type="search" name="" id="search" placeholder="Search" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div class="new-lists">
                <div class="new-lists_header">Danh sách</div>

                {loading ? (
                  News.map((New) => (
                    <Link
                      to={`/new/${New._id}`}
                      key={New._id}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <div class="new-lists_item">
                        <div class="row sm-gutter">
                          <div class="new-lists_img col c-4">
                            <img src={New.img} alt={New.title} />
                          </div>
                          <div class="new-lists_title col c-8">
                            {New.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Box>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={"100%"}
                      height={"350px"}
                    />
                    {window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })}
                  </Box>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
