import "./slider.css";
import "../../assets/css/grid.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50vh",width:"100%" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  /* Adjust direction for mobile */
  ${mobile({ flexDirection: "row" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #999999;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 250px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.2;
  z-index: 2;
  &:hover {
    background-color: #1d4499;
    color: white;
    opacity: 0.8;
  }
  ${mobile({ display: "none" })}
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  top: 0;
  ${mobile({ position: 'relative', height: '50%' })}
  & > img {
    object-fit: contain;
  }
`;

const Image = styled.img`
  height: 80%;
  ${mobile({ height: "50%",width:"100vw" })}
`;
const InfoContainer = styled.div`
  margin-top: -180px;
  position: relative;
  z-index: 1000;
  ${mobile({ position: "absolute",  marginTop: "calc(-67vh + 180px)", marginLeft: "5vw", width: "100vw" })}
`;


const Header = styled.p`
  font-size: 70px;
  font-weight: 1000;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #159eec;
  padding-bottom: 20px;
  width: 550px;
  ${mobile({ fontSize:"25px",lineHeight:"15px" })}
`;
const Title = styled.p`
  font-weight: 1000;
  font-size: 40px;
  line-height: 47px;
  width: 613px;
  color: #1d4499;
  padding-bottom: 30px;
  ${mobile({fontSize:"17px",width:"80vw",lineHeight:"25px"  })}
`;

const Desc = styled.p`
  padding-bottom: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 550px;
  color: rgb(0, 0, 0);
  ${mobile({fontSize:"10px",width:"50vw",lineHeight:"15px"  })}
`;

const Button = styled.button`
  background: #bfd2f8;
  border-radius: 50px;
  border: none;
  transition: 0.5s;
  padding: 13px 35px;
  color: #1f2b6c;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #1d4499;
    color: white;
  }
  ${mobile({ fontSize:"10px",padding:"10px 20px"})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) =>
        slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
    } else {
      setSlideIndex((slideIndex) =>
        slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: 40 }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer></ImgContainer>
            <div class="grid wide">
              <InfoContainer>
                <Header>{item.header}</Header>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SẢN PHẨM</Button>
              </InfoContainer>
            </div>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: 40 }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
