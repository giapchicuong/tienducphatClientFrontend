import React, { useEffect } from "react";
import "./introduction.css";
import "../../assets/css/grid.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import OurCustomer from "../../components/OurCustomer/OurCustomer";
import SliderHeader from "../../components/SliderHeader/SliderHeader";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import introitem1 from ".././../assets/images/intro1.png";
import introitem2 from ".././../assets/images/intro2.png";
import introitem3 from ".././../assets/images/intro3.png";
import vision from ".././../assets/images/intro4.png";
import vision1 from ".././../assets/images/intro5.png";
import proud1 from ".././../assets/images/proud1.png";
import proud2 from ".././../assets/images/proud2.png";
import proud3 from ".././../assets/images/proud3.png";
import proud4 from ".././../assets/images/proud4.png";
import productintro from ".././../assets/images/product-intro.png";
import thietbixulykhinen2 from ".././../assets/images/thietbixulykhinen2.png";
import thietbixulykhinen3 from ".././../assets/images/thietbixulykhinen3.png";
import thietbixulykhinen4 from ".././../assets/images/thietbixulykhinen4.png";
import thietbixulykhinen5 from ".././../assets/images/thietbixulykhinen5.png";
import thietbixulykhinen6 from ".././../assets/images/thietbixulykhinen6.png";
import thietbixulykhinen7 from ".././../assets/images/thietbixulykhinen7.png";
import thietbixulykhinen8 from ".././../assets/images/thietbixulykhinen8.png";
import thietbixulykhinen9 from ".././../assets/images/chatlong1.png";
import thietbixulykhinen10 from ".././../assets/images/chatlong2.png";
import thietbixulykhinen11 from ".././../assets/images/thietbixulykhinen11.png";
import iconService from ".././../assets/images/iconService.svg";
export default function Introduction() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const LineSmall = {
    width: "15%",
  };
  return (
    <section>
      <Navbar />
      <SliderHeader title="Giới Thiệu" />
      <div class="IntroPageintro">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPagesquare hide-on-mobile  hide-on-mobile"></div>
            <div class="IntroPageintro-header col c-12">
              GIỚI THIỆU VỀ CÔNG TY
            </div>
            <div class="IntroPageintro-title">
              Công ty TNHH TM - DV Tiến Đức Phát được thành lập năm 2012
            </div>
            <div class="IntroPageintro-des">
              Công ty TNHH TM - DV Tiến Đức Phát trân trọng cảm ơn quý khách đã
              quan tâm đến sản phẩm xử lý khí nén và lọc chất lỏng hiệu
              Donaldson do chúng tôi làm đại diện. Công ty TNHH TM - DV Tiến Đức
              Phát được thành lập năm 2012, chuyên cung cấp các thiết bị ngành
              lọc khí, nước, hóa chất của Donaldson tại miền nam Việt Nam.
              <br />
              <br />
              Công ty TNHH TM - DV Tiến Đức Phát chúng tôi là nhà phân phối
              chính thức của Donaldson tại miền nam Việt Nam về các sản phẩm máy
              sấy khí, thiết bị lọc khí và thiết bị lọc chất lỏng. Sản phẩm của
              chúng tôi phục vụ cho tất cả các ngành công nghiệp như: Y tế, thực
              phẩm, dược phẩm, dầu khí, điều khiển tự động và các ngành công
              nghiệp khác. Sản phẩm của chúng tôi đã đạt tiêu chuẩn quốc tế ISO
              8573, tiêu chuẩn quản lý chất lượng thực phẩm và dược phẩm (FDA)
              và được kiểm chứng bởi cơ quan độc lập Lloyd's Regisster. Điều này
              cung cấp cho khách hàng sự lựa chọn rộng rãi nhằm đáp ứng yêu cầu
              khắt khe nhất và ứng dụng chung nhất về chất lượng khí nén.
              <br />
              <br />
              Ngoài chức năng phân phối sản phẩm chúng tôi còn hỗ trợ khách hàng
              sau bán hàng như: bảo dưỡng và vận hành. Ngoài ra, chúng tôi còn
              cung cấp dịch vụ giúp khách hàng thiết kế, bảo dưỡng, lắp đặt, vận
              hành...hệ thống khí nén trong công nghiệp. Để khách hàng có sự lựa
              chọn tốt nhất, yêu cầu chất lượng khí nén phù hợp nhất và chi phí
              đầu tư hợp lý nhất... chúng tôi sẽ tư vấn kỹ thuật cho từng khách
              hàng cụ thể.
            </div>
            <div class="IntroPageintro-items">
              <div class="grid wide">
                <div class="row sm-gutter">
                  <div class="IntroPageintro-item col c-12 l-4">
                    <div class="IntroPageintro-img">
                      <img src={introitem1} alt="" />
                    </div>
                  </div>
                  <div class="IntroPageintro-item col c-12 l-4 hide-on-mobile ">
                    <div class="IntroPageintro-img">
                      <img src={introitem2} alt="" />
                    </div>
                  </div>
                  <div class="IntroPageintro-item col c-12 l-4 hide-on-mobile">
                    <div class="IntroPageintro-img">
                      <img src={introitem3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPagestory hide-on-mobile">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPagestory-left col c-12 l-6">
              <div class="IntroPagesquare hide-on-mobile "></div>
              <div class="IntroPagestory-header IntroPagegeneral-header">
                Câu chuyện
              </div>
              <div class="IntroPagestory-title IntroPagegeneral-title">
                Khởi đầu từ một công ty khởi nghiệp nhỏ tại địa phương
              </div>
              <div class="IntroPagestory-des IntroPagegeneral-des">
                Anh Đức - người sáng lập công ty, xuất thân từ kỹ sư kỹ thuật
                với niềm tin rằng khí nén đóng vai trò quan trọng trong nhiều
                lĩnh vực từ sản xuất đến đời sống. Anh nhận thấy lọc khí nén là
                yếu tố quyết định đến chất lượng và tiêu chuẩn khí nén trong
                công nghiệp. Sau nghiên cứu, anh quyết định trở thành đại lý của
                hãng Donaldson, một tên tuổi uy tín trong lĩnh vực lọc khí nén.
                Tiếp tục theo đuổi tầm nhìn của mình, anh Đức mở rộng hoạt động
                kinh doanh và trở thành đại lý của hãng Ceccato - một nhà sản
                xuất máy nén khí hàng đầu.
              </div>
            </div>
            <div class="IntroPagestory-right col c-12 l-6">
              <div class="IntroPagestory-number">
                <div class="row sm-gutter">
                  <div class="IntroPagenumber-item col c-5">
                    <div class="IntroPagenumber-item-numbers">908+</div>
                    <div class="IntroPageline">
                      <div style={LineSmall} class="line-left"></div>
                      <div style={LineSmall} class="line-center"></div>
                      <div style={LineSmall} class="line-right"></div>
                    </div>
                    <div class="IntroPagenumber-item-title">
                      Dự án thực hiện
                    </div>
                  </div>
                  <div class="IntroPagenumber-item col c-5">
                    <div class="IntroPagenumber-item-numbers">1500+</div>
                    <div class="IntroPageline">
                      <div style={LineSmall} class="line-left"></div>
                      <div style={LineSmall} class="line-center"></div>
                      <div style={LineSmall} class="line-right"></div>
                    </div>
                    <div class="IntroPagenumber-item-title">
                      Hợp đồng kí kết
                    </div>
                  </div>
                  <div class="IntroPagenumber-item col c-5">
                    <div class="IntroPagenumber-item-numbers">809+</div>
                    <div class="IntroPageline">
                      <div style={LineSmall} class="line-left"></div>
                      <div style={LineSmall} class="line-center"></div>
                      <div style={LineSmall} class="line-right"></div>
                    </div>
                    <div class="IntroPagenumber-item-title">
                      khách hàng hài lòng
                    </div>
                  </div>
                  <div class="IntroPagenumber-item col c-5">
                    <div class="IntroPagenumber-item-numbers">32+</div>
                    <div class="IntroPageline">
                      <div style={LineSmall} class="line-left"></div>
                      <div style={LineSmall} class="line-center"></div>
                      <div style={LineSmall} class="line-right"></div>
                    </div>
                    <div class="IntroPagenumber-item-title">Giải thưởng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPagevision">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPagesquare hide-on-mobile "></div>
            <div class="IntroPagevision-header IntroPagegeneral-header">
              Tầm nhìn
            </div>
            <div class="IntroPagevision-title IntroPagegeneral-title">
              Trở thành thương hiệu Top 3 trong lĩnh vực cung cấp máy nén khí và
              các dịch vụ đi kèm tại Việt Nam
            </div>
            <div class="IntroPagevision-des IntroPagegeneral-des">
              Là đại lý chính thức của Donaldson và Ceccato, chúng tôi cam kết
              mang đến cho khách hàng dịch vụ và sản phẩm chất lượng vượt trội.
              Đặt sự hài lòng của khách hàng là ưu tiên hàng đầu, Tiến Đức Phát
              luôn không ngừng cải tiến trở thành một thương hiệu được công nhận
              và tin dùng trong lĩnh vực khí nén tại Việt Nam.
            </div>
            <div class="IntroPagevision-img">
              <img src={vision} alt="vision" />
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPagemission">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPagesquare hide-on-mobile "></div>
            <div class="IntroPagemission-header IntroPagegeneral-header">
              SỨ MỆNH
            </div>
            <div class="IntroPagemission-title IntroPagegeneral-title">
              Mang đến cho khách hàng giải pháp thiết bị khí nén chất lượng cao
              với giá cả cạnh tranh cùng chất lượng và chế độ bảo hành tốt nhất
            </div>
            <div class="IntroPagemission-des IntroPagegeneral-des">
              Mang lại giá trị thực cho khách hàng, từ việc cung cấp các giải
              pháp và sản phẩm chất lượng đến sự tận tâm và hỗ trợ chuyên nghiệp
              trong từng lĩnh vực sản xuất đặc thù. Chúng tôi cam kết đồng hành
              cùng khách hàng để đạt được thành công và phát triển bền vững
              trong lĩnh vực khí nén.
            </div>
            <div class="IntroPagemission-img">
              <img src={vision1} alt="mission" />
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPageproduct hide-on-mobile">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPageproduct-header IntroPagegeneral-title">
              Chúng tôi là đại lý ủy quyền cho Donaldson tại miền nam Việt Nam
              về các sản phẩm:
            </div>
            <div class="IntroPageproduct-items">
              <div class="IntroPageproduct-title IntroPagegeneral-header col c-12">
                Thiết bị sử lý khí nén
              </div>
              <div class="row sm-gutter">
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={productintro} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Các bộ lọc khí nén
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để loại bỏ bụi, vi khuẩn, dầu, nước đáp ứng các tiêu chuẩn
                    khí nén ISO 8573.1-2001
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen2} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Máy làm khô khí nén (Air Dryers)
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    bao gồm máy sấy khí dạng làm lạnh và máy sấy khí dạng hấp
                    thụ: Để loại bỏ nước với độ khô lên tới: PDP -70 ºC, với chế
                    độ tiết kiệm năng lượng.
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen3} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">Bộ tách nước</div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để tách xả nước và dầu dạng lỏng ra khỏi hệ thống khí nén.
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen4} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Thiết bị xả nước tự động
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để tách xả nước và dầu dạng lỏng ra khỏi hệ thống khí nén.
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen5} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Máy sản xuất khí
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Máy sản xuất khí Nitơ, khí Hydro, máy tạo khí chuẩn cho
                    phòng thí nghiệm.
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen6} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Thiết kế, lắp đặt, bảo trì hệ thống khí nén
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Thiết kế, lắp đặt, bảo trì hệ thống khí nén theo tiêu chuẩn
                    của nhà sản xuất
                  </div>
                </div>
              </div>
            </div>
            <div class="IntroPageproduct-items">
              <div class="IntroPageproduct-title IntroPagegeneral-header col c-12">
                Thiết bị lọc chất lỏng:
              </div>
              <div class="row sm-gutter">
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen7} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc nước, bia rượu, nước giải khát....vv
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen8} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc khí nén (bụi, hạt dầu)
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen9} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc mùi dầu trong khí nén
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để loại bỏ bụi, vi khuẩn, dầu, nước đáp ứng các tiêu chuẩn
                    khí nén ISO 8573.1-2001
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen10} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc khí tiệt trùng trong ngành thực phẩm công nghiêp
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để loại bỏ bụi, vi khuẩn, dầu, nước đáp ứng các tiêu chuẩn
                    khí nén ISO 8573.1-2001
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen11} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc bụi công nghiệp
                  </div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để loại bỏ bụi, vi khuẩn, dầu, nước đáp ứng các tiêu chuẩn
                    khí nén ISO 8573.1-2001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPageproduct-footer IntroPagegeneral-header col c-12 hide-on-mobile">
        <div class="IntroPageproduct-footer-text">
          Chúng tôi không những bảo hành sản phẩm của mình cung cấp mà còn đảm
          bảo chất lượng khí nén theo tiêu chuẩn ISO 8573.1:2001
        </div>
      </div>
      <div class="IntroPageproud">
        <div class="grid wide">
          <div class="IntroPageproud-header">
            CHÚNG TÔI TỰ HÀO KHI CÓ ĐƯỢC CÁC
          </div>
          <div class="IntroPageproud-title">GIẢI THƯỞNG VÀ CHỨNG NHẬN</div>
          <div class="IntroPageproud-des">
            Hơn 10 năm trong lĩnh vực cung cấp giải pháp và sản phẩm máy nén
            khí, chúng tôi đã được tin tưởng cũng như có những đánh giá tốt từ
            phía khách hàng. Điều này giúp chúng tôi có thêm động lực và sẽ cố
            gắng hơn nữa mang đến những trải nghiệm dịch vụ và sản phẩm tốt nhất
            đến khách hàng.
          </div>
          <div class="row sm-gutter">
            <div class="IntroPageproud-items col c-6 l-3">
              <div class="IntroPageproud-item">
                <div class="IntroPageproud-item__img">
                  <img src={proud1} alt="" />
                </div>
              </div>
            </div>
            <div class="IntroPageproud-items col c-6 l-3">
              <div class="IntroPageproud-item">
                <div class="IntroPageproud-item__img">
                  <img src={proud2} alt="" />
                </div>
              </div>
            </div>
            <div class="IntroPageproud-items col c-6 l-3">
              <div class="IntroPageproud-item">
                <div class="IntroPageproud-item__img">
                  <img src={proud3} alt="" />
                </div>
              </div>
            </div>
            <div class="IntroPageproud-items col c-6 l-3">
              <div class="IntroPageproud-item">
                <div class="IntroPageproud-item__img">
                  <img src={proud4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="IntroPagecommitment">
            <div class="IntroPagecommitment-title">Cam kết chất lượng</div>
            <div class="IntroPagecommitment-line"></div>
            <div class="IntroPagecommitment-des">
              <div className="IntroPagecommitment-des_item">
                <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  {" "}
                  Chúng tôi đã đưa ra chính sách chất lượng nghiêm ngặt nhằm đảm
                  bảo những cam kết với khách hàng:
                </p>
              </div>
              <div className="IntroPagecommitment-des_item">
              <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  Cung cấp thi công các dự án đảm bảo chất lượng phù hợp với
                  thiết kế các tiêu chuẩn, quy định, quy phạm.
                </p>
              </div>
              <div className="IntroPagecommitment-des_item">
              <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  Thực hiện chính xác các nhu cầu về chất lượng nhằm thỏa mãn
                  tối đa nhu cầu của khách hàng.
                </p>
              </div>
              <div className="IntroPagecommitment-des_item">
              <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  Không ngừng nâng cao kiến thức trình độ cho cán bộ công nhân
                  viên làm chủ khoa học kỹ thuật tiên tiến, hoàn thành tốt công
                  việc được giao.
                </p>
              </div>
              <div className="IntroPagecommitment-des_item">
              <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  Phát huy nguồn lực, mở rộng đầu tư, áp dụng đối mới công nghệ
                  để nâng cao chất lượng, đảm bảo tiến độ cam kết.
                </p>
              </div>
              <div className="IntroPagecommitment-des_item">
              <div className="IntroPagecommitment-des_item_icon">
                <img src={iconService} alt="" />
                </div>
                <p>
                  Tất cả các cán bộ nhân viên đều được phố biến và nắm rõ về
                  chính sách chất lượng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurCustomer></OurCustomer>
      <ContactForm />
      <Footer />
    </section>
  );
}
