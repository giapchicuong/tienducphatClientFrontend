import DOMPurify from "dompurify";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { getProducts } from "../../redux/apiCalls";
import { mobile } from "../../responsive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Container = styled.div`
  padding: 50px 0;
  ${mobile({ padding: 0 ,width:"100vw",marginRight:"10px"})}
`;

const ProductItems = styled.div`
  padding-left: 30px;
  ${mobile({paddingLeft:0,width:"100vw"})}
`;
const ProductItem = styled.div`
  margin: 14px;
  height: 60vh;
  ${mobile({ margin: 0,height:"auto",paddingRight:"10px" , width: "100vw"})}
`;
const ProductImg = styled.img`
  width: 417px;
  height: 300px;
  object-fit: contain;
  padding: 20px;
  ${mobile({ width: "100vw" })}
`;
const ProductImgChild = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 10px;
  border: 3px solid #ccc;
`;

const ProductText = styled.div`
  padding: 10px 0;
`;

const ProductHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  color: #1d4499;
  padding-left: 15px;
  text-transform: uppercase;
  padding-bottom: 5px;
`;
const ProductRating = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
`;
const ProductRateText = styled.div`
  font-weight: 300;
  font-size: 15px;
  padding: 10px;
`;
const ProductPrice = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #333333;
  padding-left: 15px;
  padding-bottom: 15px;
`;
const ProductModel = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #333333;
  padding-left: 15px;
  padding-bottom: 5px;
`;
const ProductCode = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #333333;
  padding-left: 15px;
  padding-bottom: 5px;
`;
const ProductLabel = styled.label`
  color: #1d4499;
`;
const ProductDes = styled.div`
  padding-top: 30px;
  font-style: normal;
`;
const ProductDesTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 130%;
  color: #000000;
  background-color: #e4e4e4;
  text-transform: uppercase;
  padding: 10px 20px;
  border-bottom: 0.3px solid #000000;
  ${mobile({ display:"none"})}

`;
const ProductDesDetails = styled.div`
  padding: 10px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #212124;
  padding: 20px;
  ${mobile({ display:"none"})}

`;
const ProductDesSumary = styled.div`
  padding: 10px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #212124;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 30px;
`;
const OrderContainer = styled.div`
  display: flex;
  padding-left: 15px;
`;
const ProductButton = styled.button`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9b9b9d;
  border-radius: 10px;
  width: 280px;
  padding: 15px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #1d4499;
  }
  &:active {
    transform: translateY(4px);
  }
  ${mobile({ width: "100vw",padidngBottom:"30px",paddingLeft:"20px",marginRight:"30px" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 20px;
  background-color: #e4e4e4;
  border-radius: 10px;
  padding: 0 10px;
  ${mobile({ display: "none" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #999999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Arrow = styled.div`
  background-color: #ccc;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const BackProducts = styled.button`
  background: #e4e4e4;
  border-radius: 10px;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #999999;
  border: none;
  &:hover {
    background-color: #1d4499;
  }
  &:active {
    transform: translateY(4px);
  }
  ${mobile({ display: "none" })}
`;
const ProductsOthers = styled.div`
  font-style: normal;
  width: 100%;
  height: 300px;
  height: auto;
  padding-left: 30px;
  overflow: hidden;
  ${mobile({ display:"none"})}

`;
const ProductsOthersTitle = styled.div`
  font-weight: 900;
  font-size: 25px;
  line-height: 130%;
  color: #000000;
  background-color: #e4e4e4;
  text-transform: uppercase;
  padding: 10px 20px;
  border-bottom: 0.3px solid #000000;
`;
const ProductsOthersItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
`;
const ProductsOthersItem = styled.div`
  width: 260px;
  height: 600px;
  height: auto;
  margin: 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
const ProductsOthersItemImg = styled.img`
  width: 100%;
  height: 295px;
  object-fit: contain;
`;
const ProductsOthersItemText = styled.div`
  padding: 10px 0;
  width: 100%;
  height: auto;
`;
const ProductsOthersItemTextHeader = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  padding-left: 15px;
`;
const ProductsOthersItemTextModel = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  padding-left: 15px;
`;
const ProductsOthersItemTextCode = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #159eec;
  padding-left: 15px;
`;
const Product = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];
  const products = useSelector((state) => state.product.products);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const sanitizedHTMLdescSummary = DOMPurify.sanitize(product.descSummary);
  const sanitizedHTMLdescDetails = DOMPurify.sanitize(product.descDetails);
  useEffect(() => {
    getProducts(dispatch);
    setLoading(true);
  }, [dispatch]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(product.imgs[currentIndex]);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(handleNextImg, 3000);
    setTimeoutId(timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  const handleImgClick = (imgUrl) => {
    setSelectedImg(imgUrl);
    clearTimeout(timeoutId);
  };

  const handleNextImg = () => {
    if (isTransitioning) return;
    const nextIndex = (currentIndex + 1) % product.imgs.length;
    setCurrentIndex(nextIndex);
    setSelectedImg(product.imgs[nextIndex]);
    clearTimeout(timeoutId);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevImg = () => {
    if (isTransitioning) return;
    const prevIndex =
      (currentIndex - 1 + product.imgs.length) % product.imgs.length;
    setCurrentIndex(prevIndex);
    setSelectedImg(product.imgs[prevIndex]);
    clearTimeout(timeoutId);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <Container>
          <div className="grid wide">
            <div className="row sm-gutter">
              <Link to="/products">
                <BackProducts>
                  <ReplyAllIcon fontSize="large" sx={{ fontSize: 30 }} />
                </BackProducts>
              </Link>
              <div className="col l-12">
                <ProductItems>
                  <ProductItem>
                    <div className="row sm-gutter">
                      <div className="col c-12 l-5">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Arrow>
                            <ArrowBackIosNewIcon
                              style={{ fontSize: 20, color: "white" }}
                              onClick={handlePrevImg}
                            />
                          </Arrow>
                          <ProductImg src={selectedImg} alt={product.title} />
                          <Arrow>
                            <ArrowForwardIosIcon
                              style={{ fontSize: 20, color: "white" }}
                              onClick={handleNextImg}
                            />
                          </Arrow>
                        </div>

                        <div
                          className="col c-12"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {product.imgs.map((imgUrl, index) => (
                            <ProductImgChild
                              key={index}
                              src={imgUrl}
                              alt={product.title}
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                cursor: "pointer",
                                transition: "opacity 0.3s ease",
                                opacity: selectedImg === imgUrl ? 1 : 0.5,
                              }}
                              onClick={() => handleImgClick(imgUrl)}
                            />
                          ))}
                        </div>
                      </div>
                      <ProductText className="col c-12 l-7">
                        <ProductHeader>{product.title}</ProductHeader>
                        <ProductRating>
                          <VisibilityIcon
                            fontSize="large"
                            style={{ color: "#e4e4e4" }}
                          />
                          <ProductRateText>Lượt xem : 123 </ProductRateText>
                          <Stack spacing={1}>
                            <Rating
                              name="full-rating"
                              defaultValue={5}
                              precision={1}
                            />
                          </Stack>
                          <ProductRateText>(28 đánh giá)</ProductRateText>
                        </ProductRating>
                        <ProductModel>
                          Mã SP : <ProductLabel>{product.model}</ProductLabel>
                        </ProductModel>
                        <ProductCode>
                          Xuất xứ : <ProductLabel>{product.code}</ProductLabel>
                        </ProductCode>
                        {/* <ProductPrice>Giá : {product.price}</ProductPrice> */}

                        <ProductDesSumary>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: sanitizedHTMLdescSummary,
                            }}
                          ></div>
                        </ProductDesSumary>
                        <OrderContainer>
                          <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />{" "}
                          </AmountContainer>
                          <ProductButton onClick={handleClick}>
                            <CalendarMonthIcon />{" "}
                            <div style={{ paddingLeft: "10px" }}>Đặt hàng</div>
                          </ProductButton>
                        </OrderContainer>
                      </ProductText>
                    </div>
                  </ProductItem>
                  <ProductDes>
                    <ProductDesTitle>Mô tả sản phẩm</ProductDesTitle>
                    <ProductDesDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sanitizedHTMLdescDetails,
                        }}
                      ></div>
                    </ProductDesDetails>
                  </ProductDes>
                </ProductItems>
              </div>
              <ProductsOthers>
                <ProductsOthersTitle>Sản phẩm khác</ProductsOthersTitle>
                <ProductsOthersItems>
                  <div className="row sm-gutter">
                    {products.map((product) => (
                      <ProductsOthersItem>
                        <Link
                          to={`/product/${product._id}`}
                          key={product._id}
                          style={{ textDecoration: "none" }}
                        >
                          <ProductsOthersItemImg
                            src={product.imgs[0]}
                            alt={product.title}
                          />

                          <ProductsOthersItemText>
                            <ProductsOthersItemTextHeader>
                              {product.title}
                            </ProductsOthersItemTextHeader>
                            <ProductsOthersItemTextModel>
                              Model : {product.model}
                            </ProductsOthersItemTextModel>
                            <ProductsOthersItemTextCode>
                              Mã sp : {product.code}
                            </ProductsOthersItemTextCode>
                          </ProductsOthersItemText>
                        </Link>
                      </ProductsOthersItem>
                    ))}
                  </div>
                </ProductsOthersItems>
              </ProductsOthers>
            </div>
          </div>
        </Container>
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

      <Footer />
    </div>
  );
};

export default Product;
