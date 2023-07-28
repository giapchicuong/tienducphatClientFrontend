import React from "react";
import "../../assets/css/grid.css";
import news from "../../assets/images/news.png";
import new1 from "../../assets/images/new1.png";
import new3 from "../../assets/images/new3.png";
import new4 from "../../assets/images/new4.png";
import new5 from "../../assets/images/new5.png";
import new6 from "../../assets/images/new6.png";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function News() {
  const News = styled.div`
    background: #1d459a;
    padding-top: 51px;
    padding-bottom: 71px;
    font-style: normal;
    padding-bottom: 70px;
    ${mobile({ paddingLeft: "10px", paddingRight: "10px" })}
  `;
  const NewsHeader = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #bfd2f8;
    ${mobile({ fontSize: "13px" })}
  `;
  const NewsTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #fafdfe;
    padding: 10px 0;
    ${mobile({ fontSize: "16px" })}
  `;
  const NewsDes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #bfd2f8;
    padding-bottom: 35px;
    width: 573px;
    ${mobile({ fontSize: "10px", width: "auto" })}
  `;
  const NewsItems = styled.div`
    padding-top: 30px;
    ${mobile({ paddingTop: "0px",height:"200px" })}
  `;
  const NewsItem = styled.div`
    height: "200px";
  `;
  const NewsItemImgDiv = styled.div`
  position: relative;
    &:before {
      content: "";
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
  `;
  const NewsItemImg = styled.img`
    width: 100%;
    object-fit: cover;
  `;
  const NewsItemText = styled.div`
    margin-top: -150px;
    color: #ffffff;
    padding-left: 30px;
    position: relative;
    z-index: 1;
    ${mobile({ padding: "0 10px",marginTop:"-130px" })}
  `;
  const NewsItemTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5px 0;
    ${mobile({ fontSize: "10px" })}
  `;
  const NewsItemDes = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: justify;
    letter-spacing: 0.1em;
    width: 341px;
    padding: 5px 0;
    color: #ffffff;
    ${mobile({ fontSize: "7px", width: "auto",lineHeight:"12px" })}
  `;
  return (
    <News>
      <div className="grid wide">
        <NewsHeader>CUNG CẤP GIẢI PHÁP KHÍ NÉN CHO</NewsHeader>
        <NewsTitle>CÁC NGÀNH CÔNG NGHIỆP TẠI VIỆT NAM</NewsTitle>
        <NewsDes>
          Chúng tôi đáp ứng các yêu cầu cụ thể của từng ứng dụng trong ngành.
          Bên cạnh các tiêu chuẩn về độ tin cậy và hiệu quả năng lượng, các sản
          phẩm máy nén khí của chúng tôi đáp ứng các nhu cầu cụ thể của ngành
          như tiết kiệm chi phí, độ chắc chắn, không tồn dầu hoặc phân phối khí
          chính xác.
        </NewsDes>
        <div className="row sm-gutter">
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={news} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>chế tạo</NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  Hệ thống khí nén đáng tin cậy và tiết kiệm năng lượng, được
                  thiết kế nhằm giảm chi phí vận hành và tác động môi trường cho
                  các khách hàng trong ngành chế tạo của chúng tôi.
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={new1} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>dệt</NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  Cung cấp máy nén khí để chạy nhiều loại thiết bị và công cụ
                  tiện ích trong các quy trình dệt khác nhau và máy nén khí của
                  chúng tôi sẽ đóng một vai trò quan trọng trong việc duy trì
                  chất lượng và hiệu quả của quy trình tổng thể.
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={new3} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>khai mỏ</NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  Máy nén khí cải tiến của chúng tôi được sử dụng an toàn và
                  hiệu quả trong các mỏ và giàn khoan dầu để cung cấp năng lượng
                  cho thiết bị khoan và đóng cọc, công cụ khí nén, băng tải vận
                  chuyển vật liệu và hệ thống thông gió bên trong mỏ.
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={new4} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>thực phẩm & đồ uống </NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  Các ứng dụng Thực phẩm & Đồ uống (F&B) có phạm vi rất rộng -
                  từ đóng chai đồ uống đến vắt sữa bò. Điểm chung của các ứng
                  dụng này là đều cần loại khí không dầu để đảm bảo chất lượng
                  sản phẩm cao.
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={new5} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>ô tô</NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  cung cấp chủ yếu cho ba phân khúc; garage, linh kiện và hãng
                  sản xuất xe,...
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
          <NewsItems className="col c-6 l-4">
            <NewsItem>
              <NewsItemImgDiv>
                <NewsItemImg src={new6} alt="news"></NewsItemImg>
              </NewsItemImgDiv>
              <NewsItemText>
                <NewsItemTitle>hóa chất</NewsItemTitle>
                <NewsItemDes>
                  {" "}
                  Máy nén khí trong ngành hóa chất có rất nhiều ứng dụng. Thường
                  được sử dụng trong ngành hóa chất để xử lý không khí, lưu
                  thông không khí, xử lý vật liệu, sấy khô sản phẩm, tạo khí
                  nitơ, van điều khiển và xi lanh.
                </NewsItemDes>
              </NewsItemText>
            </NewsItem>
          </NewsItems>
        </div>
      </div>
    </News>
  );
}
