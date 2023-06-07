import { memo } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <span>Algovision: Clear spots</span>
    </div>
  );
};
export default memo(Header);
