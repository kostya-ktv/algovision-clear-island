import { memo } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <span>Algovision: Remove islands</span>
    </div>
  );
};
export default memo(Header);
