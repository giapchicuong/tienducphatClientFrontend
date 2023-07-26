import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../assets/css/grid.css";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 219px;
  height: 300px;
  display: flex;
  align-items: top;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const TextHeader = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  padding-left: 15px;
  position: absolute;
  bottom: 55px;
  left: 10px;
  z-index: 1000;
`;
const TextMode = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  padding-left: 15px;
  position: absolute;
  bottom: 35px;
  left: 10px;
  z-index: 1000;
`;
const TextCode = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #159eec;
  position: absolute;
  bottom:15px;
  left: 25px;
  z-index: 1000;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <TextHeader>{item.title}</TextHeader>
      <TextMode>Model:CSM 5.5 – CSM100</TextMode>
      <TextCode>Mã sp: CSM</TextCode>
    </Container>
  );
};

export default Product;
