import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";
import Introduction from "./pages/Introduction/Introduction";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Service from "./pages/Service/Service";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import New from "./pages/New/New";
import { useEffect } from "react";
import { getCategories, getNews, getProducts } from "./redux/apiCalls";
import { useDispatch } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);
    getNews(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/introduction">
          <Introduction />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route path="/new/:id">
          <New />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
