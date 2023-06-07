import { memo } from "react";
import "./Footer.scss";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <div className="footer">
      <Button>RUN</Button>
    </div>
  );
};
export default memo(Footer);
