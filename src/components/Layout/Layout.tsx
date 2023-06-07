import { memo } from "react";
import "./Layout.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-main-frame">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};
export default memo(Layout);
