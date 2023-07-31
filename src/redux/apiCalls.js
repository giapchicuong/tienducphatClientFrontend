import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { addOrderFailure, addOrderStart, addOrderSuccess } from "./orderRedux";
import {
  addMessageFailure,
  addMessageStart,
  addMessageSuccess,
} from "./messageRedux";
import { reset } from "./cartRedux";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  increaseRatingCountFailure,
  increaseRatingCountStart,
  increaseRatingCountSuccess,
  increaseViewCountFailure,
  increaseViewCountStart,
  increaseViewCountSuccess,
} from "./productRedux";
import { getNewFailure, getNewStart, getNewSuccess } from "./newRedux";
import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "./categoryRedux";
import { toast } from "react-toastify";
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    toast.success("Đăng ký tài khoản thành công!"); // Show success notification
  } catch (err) {
    dispatch(registerFailure());
    toast.error("Đăng ký thất bại, hãy thử lại."); // Show success notification
  }
};
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success("Đăng nhập thành công!"); // Show success notification
  } catch (err) {
    dispatch(loginFailure());
    toast.error("Đăng nhập thất bại, hãy thử lại."); // Show success notification
  }
};
export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
  toast.success("Đăng xuất thành công!"); // Show success notification
};
export const getProducts = async (cat, dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(
      cat ? `/products?category=${cat}` : "/products"
    );
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
// NEW
export const getNews = async (dispatch) => {
  dispatch(getNewStart());
  try {
    const res = await userRequest.get("/news");
    dispatch(getNewSuccess(res.data));
  } catch (err) {
    dispatch(getNewFailure());
  }
};
// Category
export const getCategories = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest.get("/categories");
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
export const addOrder = async (order, dispatch) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post(`/orders`, order);
    dispatch(addOrderSuccess(res.data));
    dispatch(reset());
    toast.success("Đặt hàng thành công, chúng tôi sẽ liên lạc với bạn sớm nhất!"); // Show success notification
  } catch (err) {
    dispatch(addOrderFailure());
    toast.error("Đặt hàng thất bại, hãy thử lại."); // Show success notification
  }
};
export const addMessage = async (message, dispatch) => {
  dispatch(addMessageStart());
  try {
    const res = await userRequest.post(`/messages`, message);
    dispatch(addMessageSuccess(res.data));
    toast.success("Gửi tin nhắn thành công, chúng tôi sẽ liên lạc với bạn sớm nhất!"); // Show success notification
  } catch (err) {
    dispatch(addMessageFailure());
    toast.error("Gửi tin nhắn thất bại, hãy thử lại."); // Show success notification
  }
};

export const increaseViewCount = (productId) => async (dispatch) => {
  dispatch(increaseViewCountStart());
  try {
    // Gọi API để tăng lượt xem cho sản phẩm
    const res = await publicRequest.post(`/product/${productId}`);
    const { viewCount } = res.data;
    dispatch(increaseViewCountSuccess({ productId, viewCount }));
  } catch (err) {
    dispatch(increaseViewCountFailure());
    toast.error("Lỗi tăng lượt xem."); // Show error notification
  }
};

export const increaseRatingCount = (productId) => async (dispatch) => {
  dispatch(increaseRatingCountStart());
  try {
    // Gọi API để tăng lượt đánh giá cho sản phẩm
    const res = await publicRequest.post(`/product/${productId}`);
    const { ratingCount } = res.data;
    dispatch(increaseRatingCountSuccess({ productId, ratingCount }));
  } catch (err) {
    dispatch(increaseRatingCountFailure());
    toast.error("Lỗi tăng lượt đánh giá."); // Show error notification
  }
};