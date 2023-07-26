import React from "react";
import "./strengths.css";
import "../../assets/css/grid.css";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
export default function Strengths() {
  return (
    <div class="strengths">
      <div class="grid wide">
        <div class="row sm-gutter">
          <div class="strengths-left hide-on-mobile col c-7">
            <div class="strengths-header">Thế mạnh của chúng tôi</div>
            <div class="strengths-title">
              Cung cấp cho khách hàng sự lựa chọn rộng rãi nhằm đáp ứng yêu cầu
              khắt khe nhất và ứng dụng chung nhất về chất lượng khí nén.
            </div>
            <div class="strengths-des">
              Sản phẩm của chúng tôi đã đạt tiêu chuẩn quốc tế ISO 8573, tiêu
              chuẩn quản lý chất lượng thực phẩm và dược phẩm (FDA) và được kiểm
              chứng bởi cơ quan độc lập Lloyd's Regisster
            </div>
          </div>
          <div class="strengths-right col c-12 l-5">
            <div class="strengths-item">
              <div class="row sm-gutter">
                <div class="strengths-item-logo col c-1"></div>
                <div class="strengths-item-logo col c-2">
                  <div class="border">
                  <MotionPhotosAutoIcon
                    className="strengths-icon"
                    fontSize="large"
                    style={{
                      color: "#159eec",
                      fontSize: "30px",
                    }}
                  />
                  </div>
                </div>
                <div class="strengths-item-text col c-9">
                  <div class="strengths-item-title">Sản phẩm chất lượng</div>
                  <div class="strengths-item-des">
                    Sản phẩm của chúng tôi được sản xuất tại Donaldson Germany
                  </div>
                </div>
              </div>
            </div>
            <div class="strengths-item">
              <div class="row sm-gutter">
                <div class="strengths-item-logo col c-1"></div>
                <div class="strengths-item-logo col c-2">
                  <div class="border">  
                  <BrightnessMediumIcon
                    className="strengths-icon"
                    fontSize="large"
                    style={{
                      color: "#159eec",
                      fontSize: "30px",
                    }}
                  />
                  </div>
                </div>
                <div class="strengths-item-text col c-9">
                  <div class="strengths-item-title">Công nghệ hiện đại</div>
                  <div class="strengths-item-des">
                    Đảm bảo chất lượng khí nén theo tiêu chuẩn ISO 8573.1:2001
                  </div>
                </div>
              </div>
            </div>
            <div class="strengths-item">
              <div class="row sm-gutter">
                <div class="strengths-item-logo col c-1"></div>
                <div class="strengths-item-logo col c-2">
                  <div class="border">

                  <TrackChangesIcon
                    className="strengths-icon"
                    fontSize="large"
                    style={{
                      color: "#159eec",
                      fontSize: "30px",
                    }}
                  />
                  </div>
                </div>
                <div class="strengths-item-text col c-9">
                  <div class="strengths-item-title">Kinh nghiệm 10 năm</div>
                  <div class="strengths-item-des">
                    Trải qua nhiều năm kinh nghiệp hợp tác cùng những thương
                    hiệu lớn tại Việt Nam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
