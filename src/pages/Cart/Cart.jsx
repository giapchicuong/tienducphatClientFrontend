import { Add, Remove, Clear } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { mobile } from "../../responsive";
import { useEffect, useState } from "react";
import { removeProduct } from "../../redux/cartRedux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { addOrder } from "../../redux/apiCalls";
import "../../assets/css/grid.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 40px;
  padding: 10px;
  color: #1f2b6c;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#159eec" : "transparent"};
  color: ${(props) => props.type === "filled" && "#1f2b6c"};
  &:hover {
    opacity: 0.8;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ paddingRight:0})}
`;

const ProductName = styled.span`
  font-size: 15px;
`;

const ProductId = styled.span`
  font-size: 15px;
  ${mobile({ display: "none" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px",fontSize:"15px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
  margin-top: 20px;
  background-color: #bfd2f8;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1f2b6c;
  color: white;
  font-weight: 600;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border: none;
  ::placeholder {
    color: #333;
  }
`;
const Textarea = styled.textarea`
  width: 90%;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border: none;
  ::placeholder {
    color: #333;
  }
`;
const Cart = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const cart = useSelector((state) => state.cart);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleAddOrder = (e) => {
    // e.preventDefault();
    const order = {
      ...inputs,
      products: cart.products.map((item) => ({
        productId: item._id,
        productName: item.title,
        productImg: item.img,
        quantity: item.quantity,
      })),
    };
    addOrder(order, dispatch);
  };
  const handleSubmit = () => {
    if (cart.quantity === 0) {
      toast.warning("Giỏ Hàng Hiện Đang Trống"); // Show success notification
    } else {
      if (
        inputs.fullname === undefined ||
        inputs.phone === undefined ||
        inputs.address === undefined
      ) {
        toast.warning("Vui lòng nhập đầy đủ thông tin")
      } else {
        if (!isNaN(inputs.fullname)) {
          toast.warning("Họ và tên phải nhập chữ")
        } else {
          if (isNaN(inputs.phone)) {
            toast.warning("Số Điện Thoại Phải Nhập Số")
          } else {
            handleAddOrder();
          }
        }
      }
    }
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <div className="grid wide">
          <div className="row sm-gutter">
            <Wrapper className="col c-12">
              <Title>Giỏ Hàng</Title>
              <Top>
                <Link to="/products">
                  <TopButton>Tiếp Tục Mua Hàng</TopButton>
                </Link>
              </Top>
              <Bottom>
                <Info>
                  {cart.products.map((product) => (
                    <Product>
                      <Clear
                        style={{ fontSize: "20px", color: "#159eec" }}
                        onClick={() => handleRemoveFromCart(product._id)}
                      />
                      <ProductDetail>
                        <Image src={product.imgs[0]} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.title}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product._id}
                          </ProductId>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add />
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Remove />
                        </ProductAmountContainer>
                      </PriceDetail>
                    </Product>
                  ))}
                  <Hr />
                </Info>
                <Summary>
                  <Box>
                    <Typography
                      id="keep-mounted-modal-title"
                      variant="h5"
                      component="h2"
                      style={{ fontSize: "20px", textAlign: "center" }}
                    >
                      Đặt Hàng
                    </Typography>
                    <Input
                      placeholder="Nhập Họ Tên"
                      name="fullname"
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Nhập Email"
                      name="email"
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Nhập số điện thoại"
                      name="phone"
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Nhập Địa Chỉ"
                      name="address"
                      onChange={handleChange}
                    />
                    <Textarea
                      placeholder="Nhập Ghi Chú"
                      name="note"
                      onChange={handleChange}
                    />
                    <Button onClick={handleSubmit}>Đặt Hàng</Button>
                  </Box>
                </Summary>
              </Bottom>
            </Wrapper>
          </div>
        </div>
      </Wrapper>
      <Footer />
        </Container>
  );
};

export default Cart;
