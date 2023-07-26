import React from "react";
import "../../assets/css/grid.css";
import contact from "../../assets/images/contact.png";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function ContactForm() {
  const ContactComponent = styled.div`
    height: 692px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ height: "321px" })}
  `;
  const ContactComponentForms = styled.div`
    width: 992px;
    height: 292px;
    background: rgba(244, 249, 255, 0.8);

    border-radius: 12px;
    padding: 70px;
    width: 100%;
    ${mobile({
      width: "auto",
      height: "auto",
      margin: "20px",
      padding: "10px",
    })}
  `;
  const ContactComponentText = styled.div``;
  const ContactComponentTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #000000;
    ${mobile({ fontSize: "20px" })}
  `;
  const ContactComponentDes = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #757575;
    width: 347px;
    ${mobile({ fontSize: "15px", width: "300px" })}
  `;
  const ContactComponentForm = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ContactComponentInput = styled.input`
    border: 1px solid #f1f1f1;
    box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.1);
    border-radius: 60px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    padding: 10px 10px 10px 30px;
    width: 316px;
    height: 46px;
    margin: 10px 0;
    &::placeholder {
      color: #959595;
    }
    ${mobile({ fontSize: "10px", width: "286px" })}
  `;
  const ContactComponentSubmit = styled.input`
    width: 153px;
    height: 49px;
    background: #2639ed;
    border-radius: 60px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.065em;
    color: #ffffff;
    border: none;
    margin-top: 10px;
    &:hover {
      background-color: #bdd1f8;
      color: #1f2b6c;
      transition: 0.9s;
    }
  `;
  return (
    <ContactComponent style={{ backgroundImage: `url(${contact})` }}>
      <div className="grid wide">
        <ContactComponentForms>
          <div className="row sm-gutter">
            <ContactComponentText className="col c-12 l-6">
              <ContactComponentTitle>
                Đăng kí nhận tư vấn miễn phí
              </ContactComponentTitle>
              <ContactComponentDes>
                Chuyên gia máy nén khí của chúng tôi sẽ liên lạc trong vòng 24h
              </ContactComponentDes>
            </ContactComponentText>
            <ContactComponentForm className="col c-12 l-6">
              <form action="">
                <ContactComponentInput
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Nhập số điện thoại của bạn tại đây"
                  required
                />
                <ContactComponentInput
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Nhập email của bạn tại đây"
                />
                <ContactComponentSubmit
                  className="ContactComponent-submit"
                  type="submit"
                  value="Gửi thông tin"
                />
              </form>
            </ContactComponentForm>
          </div>
        </ContactComponentForms>
      </div>
    </ContactComponent>
  );
}
