import React, { useEffect } from "react";
import "./service.css";
import "../../assets/css/grid.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import SliderHeader from "../../components/SliderHeader/SliderHeader";
import advise1 from ".././../assets/images/service1.png";
import advise2 from ".././../assets/images/service2.png";
import advise3 from ".././../assets/images/service3.png";
import advise4 from ".././../assets/images/service4.png";
import News from "../../components/News/News";
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
export default function Service() {
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
      <SliderHeader title="Dịch Vụ" />
      <div className="ServicePageintro">
        <div className="grid wide">
          <div className="row sm-gutter">
            <div className="ServicePagesquare hide-on-mobile"></div>
            <div className="ServicePageintro-header col c-12">Quy Trình</div>
            <div className="ServicePageintro-title">
              Quá trình chúng tôi làm việc Với khách hàng của chúng tôi trên
              toàn Việt Nam
            </div>
            <div className="ServicePageintro-des">
              Quy trình xử lý đơn hàng từ khách hàng của Tiến Đức Phát được thực
              hiện một cách chuyên nghiệp và tận tâm, nhằm đảm bảo sự hài lòng
              và đáp ứng đúng yêu cầu của khách hàng.
            </div>
            <div className="ServicePageintro-items">
              <div className="grid wide">
                <div className="row sm-gutter">
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">01</div>
                    <div className="ServicePageintro-item_title">
                      Tiếp nhận thông tin
                    </div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Nhận thông tin từ khách hàng thông qua điện thoại, email,
                      hoặc hệ thống website.
                    </div>
                  </div>
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">02</div>
                    <div className="ServicePageintro-item_title">Tư vấn</div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Tư vấn và đề xuất giải pháp phù hợp nhất để đáp ứng nhu
                      cầu của khách hàng.
                    </div>
                  </div>
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">03</div>
                    <div className="ServicePageintro-item_title">Khảo sát</div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Khảo sát trực tiếp tại nhà máy để hiểu rõ về sản phẩm,
                      thông số kỹ thuật và yêu cầu đặc biệt.
                    </div>
                  </div>
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">04</div>
                    <div className="ServicePageintro-item_title">Báo giá</div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Cung cấp báo giá chi tiết và rõ ràng gồm giá sản phẩm,
                      dịch vụ và các điều khoản liên quan.
                    </div>
                  </div>
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">05</div>
                    <div className="ServicePageintro-item_title">
                      Xác nhận đơn hàng
                    </div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Chuẩn bị sản phẩm, đặt hàng từ nhà cung cấp, kiểm tra chất
                      lượng và đóng gói.
                    </div>
                  </div>
                  <div className="ServicePageintro-item col l-3 c-6">
                    <div className="ServicePageintro-item_number">06</div>
                    <div className="ServicePageintro-item_title">Thực hiện</div>
                    <div className="ServicePageintro-item_des hide-on-mobile">
                      Sắp xếp vận chuyển hàng hóa đến địa chỉ yêu cầu của khách
                      hàng và tiến hành lắp đặt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ServicePageadvise hide-on-mobile ">
        <div className="ServicePageadvise-item ">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="ServicePageadvise-left col c-6">
                <div className="ServicePageadvise-header">
                  Tư vấn chuyên nghiệp
                </div>
                <div className="ServicePageadvise-title">
                  Tập trung vào việc cung cấp giải pháp tối ưu, đảm bảo hiệu
                  suất cao và tiết kiệm năng lượng
                </div>
                <div className="ServicePageadvise-des">
                  Dựa trên đánh giá và phân tích, chúng tôi đề xuất giải pháp
                  phù hợp nhất cho khách hàng. Cùng khách hàng thảo luận và điều
                  chỉnh giải pháp dựa trên từng phản hồi và yêu cầu. Chúng tôi
                  luôn tích cực đón nhận ý kiến và sẵn sàng thay đổi để đảm bảo
                  rằng giải pháp đáp ứng tốt nhất nhu cầu của khách hàng.
                </div>
              </div>
              <div className="ServicePageadvise-right col c-6">
                <div className="ServicePageadvise-img">
                  <img src={advise1} alt="advise" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ServicePageadvise-item advise_bg">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="ServicePageadvise-left col c-6">
                <div className="ServicePageadvise-img">
                  <img src={advise2} alt="advise" />
                </div>
              </div>
              <div className="ServicePageadvise-right col c-6">
                <div className="ServicePageadvise-header">Thiết kế đáp ứng</div>
                <div className="ServicePageadvise-title">
                  Tập trung vào thiết kế hệ thống khí nén đảm bảo đúng theo yêu
                  cầu của khách hàng
                </div>
                <div className="ServicePageadvise-des">
                  Qua việc phân tích thông số kỹ thuật, quy trình sản xuất và
                  yêu cầu đặc thù của khách hàng, chúng tôi tạo ra một hệ thống
                  khí nén tùy chỉnh, bao gồm các thành phần như máy nén khí, bộ
                  lọc, máy sấy khí và hệ thống điều khiển, nhằm đảm bảo hiệu
                  suất và chất lượng khí nén tối ưu.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ServicePageadvise-item">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="ServicePageadvise-left col c-6">
                <div className="ServicePageadvise-header">
                  Thi công và lắp đặt
                </div>
                <div className="ServicePageadvise-title">
                  Quản lý dự án chuyên nghiệp đảm bảo tổ chức và kiểm soát tốt
                  việc thi công và lắp đặt
                </div>
                <div className="ServicePageadvise-des">
                  Đội ngũ kỹ thuật viên và nhân viên của Tiến Đức Phát được đào
                  tạo chuyên sâu về lĩnh vực khí nén, có kiến thức và kỹ năng
                  cần thiết để thi công và lắp đặt các hệ thống khí nén phức
                  tạp, đảm bảo hiệu suất và chất lượng. Áp dụng kỹ thuật và công
                  nghệ tiên tiến cùng khả năng giải quyết vấn đề, quản lý dự án
                  chuyên nghiệp giúp đảm bảo chất lượng hệ thống.
                </div>
              </div>
              <div className="ServicePageadvise-right col c-6">
                <div className="ServicePageadvise-img">
                  <img src={advise3} alt="advise" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ServicePageadvise-item advise_bg">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="ServicePageadvise-left col c-6">
                <div className="ServicePageadvise-img">
                  <img src={advise4} alt="advise" />
                </div>
              </div>
              <div className="ServicePageadvise-right col c-6">
                <div className="ServicePageadvise-header">
                  Bảo trì và sửa chữa
                </div>
                <div className="ServicePageadvise-title">
                  Hỗ trợ kỹ thuật 24/7 trong suốt quá trình khách hàng sử dụng
                  sản phẩm và dịch vụ
                </div>
                <div className="ServicePageadvise-des">
                  Cung cấp hỗ trợ kỹ thuật liên tục cho khách hàng, từ việc giải
                  đáp các thắc mắc, tư vấn về quy trình bảo trì đến khắc phục sự
                  cố và hỗ trợ về kỹ thuật. Chúng tôi luôn sẵn sàng hỗ trợ khách
                  hàng và đồng hành trong quá trình sử dụng hệ thống khí nén.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="IntroPageproduct">
        <div class="grid wide">
          <div class="row sm-gutter">
            <div class="IntroPageproduct-header IntroPagegeneral-title">
              Chúng tôi là đại lý ủy quyền cho Donaldson tại miền nam Việt Nam
              về các sản phẩm:
            </div>
            <div class="IntroPageproduct-items">
              <div class="IntroPageproduct-title IntroPagegeneral-header col c-12">
                Thiết bị xử lý khí nén
              </div>
              <div class="row sm-gutter">
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen3} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">Bộ tách nước</div>
                  <div class="IntroPageproduct-item_des IntroPagegeneral-des">
                    Để tách xả nước và dầu dạng lỏng ra khỏi hệ thống khí nén.
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
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
                Thiết bị lọc chất lỏng
              </div>
              <div class="row sm-gutter">
                <div class="IntroPageproduct-item col c-6 l-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen7} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                    Lọc nước, bia rượu, nước giải khát....vv
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-6 l-4">
                  <div class="IntroPageproduct-item__img">
                    <img src={thietbixulykhinen8} alt="" />
                  </div>
                  <div class="IntroPageproduct-item_title">
                  Lọc khí nén (bụi, hạt dầu)
                  </div>
                </div>
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
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
                <div class="IntroPageproduct-item col c-6 l-4">
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
      <News/>
      <ContactForm />
      <Footer />
    </section>
  );
}
