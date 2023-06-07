import { memo } from "react";
import "./Footer.scss";
import Button from "../../Button/Button";
import ShuffleButton from "./ShuffleButton/ShuffleButton";

const Footer = () => {
  return (
    <div className="footer">
      <ShuffleButton />
      <Button icon="run">Run</Button>
    </div>
  );
};
export default memo(Footer);
