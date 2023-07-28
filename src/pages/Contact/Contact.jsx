import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SliderHeader from "../../components/SliderHeader/SliderHeader";
import "./contact.css";
import "../../assets/css/grid.css";
import Footer from "../../components/Footer/Footer";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { addMessage } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleAddMessage = (e) => {
    const message = { ...inputs };
    addMessage(message, dispatch);
  };
  const handleSubmit = () => {
    if (
      inputs.fullname === undefined ||
      inputs.phone === undefined ||
      inputs.email === undefined
    ) {
      toast.warning("Vui lòng nhập đầy đủ thông tin")
    } else {
      if (!isNaN(inputs.fullname)) {
        toast.warning("Họ và tên phải nhập chữ")
      } else {
        if (isNaN(inputs.phone)) {
          toast.warning("Số Điện Thoại Phải Nhập Số")
        } else {
          handleAddMessage();
        }
      }
    }
  };
  return (
    <section style={{overflowX:"hidden",overflowY:"hidden"}}>
      <Navbar />
      <SliderHeader title="Liên Hệ" />
      <div class="contact">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="contact-left col c-12 l-6">
              <div class="contact-header">xin nhập câu hỏi tại đây</div>
              <div class="contact-title">Đăng kí tư vấn</div>
              <div class="contact-form">
                <div action="">
                  <div class="row sm-gutter">
                    <div class="contact_input col c-12 l-12">
                      <input
                        type="text"
                        placeholder="Tên của bạn"
                        name="fullname"
                        onChange={handleChange}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="contact_input col l-12 c-12">
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="contact_input col l-12 c-12">
                      <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Lời Nhắn"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div class="contact_btn col c-12">
                      <button onClick={handleSubmit}>
                        <p>Gửi đi</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-right col c-12 l-6">
              <div class="row no-gutters">
                <div class="contact-item bg_first col c-12 l-5">
                  <div class="contact-item_icon">
                    <ContactPhoneIcon style={{ fontSize: 60 }} />
                  </div>
                  <div class="contact-item_title">hotline</div>
                  <div class="contact-item_des">
                    <a href="tel:+0916605506">(+84) 916-605-506</a>
                    <br />
                    <a href="tel:+0916605506">(+84) 916-605-506</a>
                  </div>
                </div>
                <div class="contact-item bg_second col c-12 l-5">
                  <div class="contact-item_icon">
                    <HomeIcon style={{ fontSize: 60 }} />
                  </div>
                  <div class="contact-item_title">địa chỉ</div>
                  <div class="contact-item_des ">
                    <a class="text_color">
                      128A/9, Nội Hóa II, P. Bình An, TP Dĩ An, Tỉnh Bình Dương
                    </a>
                  </div>
                </div>
                <div class="contact-item bg_second col c-12 l-5">
                  <div class="contact-item_icon">
                    <ContactMailIcon style={{ fontSize: 60 }} />
                  </div>
                  <div class="contact-item_title">email</div>
                  <div class="contact-item_des ">
                    <a
                      class="text_color"
                      href="mailto:tienducphat@tdpvn.com.vn"
                    >
                      tienducphat@tdpvn.com.vn
                    </a>
                  </div>
                </div>
                <div class="contact-item bg_first col c-12 l-5">
                  <div class="contact-item_icon">
                    <EventAvailableIcon style={{ fontSize: 60 }} />
                  </div>
                  <div class="contact-item_title">hotline</div>
                  <div class="contact-item_des">
                    <a>T2-Chủ nhật 08:00-20:00</a> <br />
                    <a>Nghỉ vào các ngày lễ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-map hide-on-mobile">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.60340847044!2d106.75364178715822!3d10.895139300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8f53c973363%3A0x34074a43ed9a8269!2zQ8O0bmcgVHkgVE5ISCBUTSAtIERWIFRp4bq_biDEkOG7qWMgUGjDoXQ!5e0!3m2!1svi!2s!4v1687840204703!5m2!1svi!2s"
            
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
