import React, { useState, Window } from "react";
import "./navbar.css";
import "../../assets/css/grid.css";
import logo from "../../assets/images/logo4.png";
import zalo from "../../assets/images/zalo-icon.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    color: #ffffff;
    &:hover {
      color: rgb(216, 49, 49);
    }
  `;
  const NavItem = styled.div`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #fcfefe;
    margin-right: 31px;
    &:hover {
      color: #bfd2f8;
      padding-bottom: 23.9px;
      font-weight: 900;
    }
  `;
  const ParentMenuItem = styled.div`
    position: relative;
  `;

  const ChildMenu = styled.div`
    position: absolute;
    top: 3.25vw;
    left: 0;
    width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ open }) => (open ? "block" : "none")};
  `;

  const ChildMenuItem = styled.div`
    padding: 12px 20px;
    color: #1d4499;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    transition: transform 0.3s ease; 
    &:hover {
      background-color: #f5f5f5;
      color:#000000;
      transform: translateY(5px); 

    &:last-child {
      border-bottom: none;
    }
  `;
  const [isChildMenuOpen, setIsChildMenuOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  const openZaloAndSearch = () => {
    var phoneNumber = "0914136308";
    var zaloURL = "https://zalo.me/";
    var fullURL = zaloURL + phoneNumber;

    window.open(fullURL, "_blank");
  };

  const makePhoneCall = () => {
    var phoneNumber = "0914136308";
    window.location.href = "tel:" + phoneNumber;
  };
  const location = useLocation();
  const categories = useSelector((state) => state.category.categories);

  return (
    <header>
      <div className="header-nav">
        <div className="grid wide">
          <div className="navbar">
            <div className="row sm-gutter">
              <div className="navbar-left col l-7 c-8">
                <Link to="/">
                  <img style={{ marginlLeft: "-24px" }} src={logo} alt="logo" />
                </Link>
              </div>
              <div className="navbar-right col l-5 hide-on-mobile">
                <div className="row sm-gutter">
                  <div className="navbar-right-item col c-5">
                    <div className="navbar-right-item-left">
                      <PhoneInTalkIcon
                        style={{
                          color: "#159eec",
                          fontSize: "60px",
                          padding: "0 10px",
                        }}
                      />
                    </div>
                    <div className="navbar-right-item-right">
                      <div className="navbar-item-title">
                        <p>Hotline</p>
                      </div>
                      <div className="navbar-item-link">
                        <a href="tel:+3434343">(+84) 916-605-506</a> <br />
                        <a href="tel:+3434343">(+84) 914-136-308</a>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-right-item col c-6">
                    <div className="navbar-right-item-left">
                      <LocationOnIcon
                        style={{
                          color: "#159eec",
                          fontSize: "60px",
                          padding: "0 10px",
                        }}
                      />
                    </div>
                    <div className="navbar-right-item-right">
                      <div className="navbar-item-title">Location</div>
                      <div className="navbar-item-link">
                        <a>
                          128A/9, Nội Hóa II, P. Bình An, TP Dĩ An, Tỉnh Bình
                          Dương
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col c-2 cart_mobile">
                <Link to="/cart">
                  <MenuItem style={{}}>
                    <Badge badgeContent={quantity} color="error">
                      <ShoppingCartOutlined
                        style={{ fontSize: 30, color: "#000000" }}
                      />
                    </Badge>
                  </MenuItem>
                </Link>
              </div>
              <label
                for="nav-mobile-input"
                className="navbar-right nav__bars-btn col c-2"
              >
                <div style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <ReorderIcon style={{ fontSize: "30px" }} />
                </div>
              </label>
              <input
                type="checkbox"
                hidden
                class="nav__input"
                id="nav-mobile-input"
              />

              <label for="nav-mobile-input" class="nav__overlay"></label>
              <nav class="nav__mobile">
                <label for="nav-mobile-input" class="nav__mobile-close">
                  <CloseIcon style={{ fontSize: "30px" }} />
                </label>
                <div class="nav__mobile-list">
                  {/* <Link to="/" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/"
                          ? "activeMobile"
                          : ""
                      }`}
                    >
                      Trang chủ
                    </div>
                  </Link> */}
                  <Link to="/introduction" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/introduction"
                          ? "activeMobile"
                          : ""
                      }`}
                    >
                      Giới Thiệu
                    </div>
                  </Link>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/service" ? "activeMobile" : ""
                      }`}
                    >
                      Dịch Vụ
                    </div>
                  </Link>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/products" ? "activeMobile" : ""
                      }`}
                    >
                      Sản Phẩm
                    </div>
                  </Link>
                  <Link to="/news" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/news" ? "activeMobile" : ""
                      }`}
                    >
                      Tin Tức
                    </div>
                  </Link>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div
                      className={`nav__mobile-link ${
                        location.pathname === "/contact" ? "activeMobile" : ""
                      }`}
                    >
                      Liên hệ
                    </div>
                  </Link>
                </div>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <div className="nav-button-mobile">
                    <button>Nhận Tư Vấn</button>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="nav hide-on-mobile">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="col c-9">
                <div className="nav-left">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <NavItem
                      className={location.pathname === "/" ? "active" : ""}
                    >
                      Trang Chủ
                    </NavItem>
                  </Link>
                  <Link to="/introduction" style={{ textDecoration: "none" }}>
                    <NavItem
                      className={
                        location.pathname === "/introduction" ? "active" : ""
                      }
                    >
                      Giới Thiệu
                    </NavItem>
                  </Link>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    <NavItem
                      className={
                        location.pathname === "/service" ? "active" : ""
                      }
                    >
                      Dịch Vụ
                    </NavItem>
                  </Link>
                  <ParentMenuItem
                    onMouseEnter={() => setIsChildMenuOpen(true)}
                    onMouseLeave={() => setIsChildMenuOpen(false)}
                  >
                    <Link to="/products" style={{ textDecoration: "none" }}>
                      <NavItem
                        className={
                          location.pathname.includes("/products")
                            ? "active"
                            : "" || location.pathname.includes("/product")
                            ? "active"
                            : ""
                        }
                      >
                        Sản Phẩm
                      </NavItem>
                    </Link>
                    <ChildMenu open={isChildMenuOpen}>
                      {categories.map((category) => (
                        <Link
                          to={`/products/${category.cat}`}
                          key={category._id}
                          style={{ textDecoration: "none" }}
                        >
                          <ChildMenuItem>{category.title}</ChildMenuItem>
                        </Link>
                      ))}
                    </ChildMenu>
                  </ParentMenuItem>
                  <Link to="/news" style={{ textDecoration: "none" }}>
                    <NavItem
                      className={location.pathname === "/news" ? "active" : ""}
                    >
                      Tin Tức
                    </NavItem>
                  </Link>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <NavItem
                      className={
                        location.pathname === "/contact" ? "active" : ""
                      }
                    >
                      Liên Hệ
                    </NavItem>
                  </Link>
                </div>
              </div>
              <div className="col c-3">
                <div className="nav-right">
                  <div className="nav-search">
                    <Link to="/cart">
                      <MenuItem>
                        <Badge badgeContent={quantity} color="error">
                          <ShoppingCartOutlined style={{ fontSize: 30 }} />
                        </Badge>
                      </MenuItem>
                    </Link>
                  </div>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div className="nav-button">
                      <button>Nhận Tư Vấn</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zalo-float-button">
        <a
          href="tel:0914136308"
          className="zalo-link"
          onClick={openZaloAndSearch}
        >
          <img src={zalo} alt="Zalo Icon" className="zalo-icon" />
        </a>
      </div>
      <div className="phone-float-button" onClick={makePhoneCall}>
        <button className="phone-button">
          <PhoneInTalkIcon style={{ fontSize: "40px", marginTop: "10px" }} />
        </button>
      </div>
    </header>
  );
}
