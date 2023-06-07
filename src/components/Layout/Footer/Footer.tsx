import { memo } from "react";
import "./Footer.scss";
import ShuffleButton from "./ShuffleButton/ShuffleButton";
import RunButton from "./RunButton/RunButton";

const Footer = () => {
  return (
    <div className="footer">
      <ShuffleButton />
      <RunButton />
    </div>
  );
};
export default memo(Footer);
