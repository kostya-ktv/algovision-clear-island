import { memo, useCallback, useState } from "react";
import "./Header.scss";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Curtain from "./Curtain/Curtain";
import { CurtainShowingType } from "./Curtain/curtain.service";

const Header = () => {
  const [isShowCurtain, setIsShowCurtain] = useState<boolean>(false);
  const [showingContent, setShowingContent] =
    useState<CurtainShowingType>("info");
  const handleCloseCurtain = useCallback(() => setIsShowCurtain(false), []);
  const handleClick = useCallback(
    (content: CurtainShowingType) => {
      if (isShowCurtain) {
        setIsShowCurtain(false);
      } else {
        setShowingContent(content);
        setIsShowCurtain(true);
      }
    },
    [showingContent, isShowCurtain]
  );
  return (
    <>
      <div className="header">
        <span>Algovision: Remove islands</span>

        <div className="header-buttons">
          <HiOutlineCode
            onClick={() => handleClick("code")}
            size={30}
            className="header-buttons-icon"
          />
          <HiOutlineInformationCircle
            onClick={() => handleClick("info")}
            size={30}
            className="header-buttons-icon"
          />
        </div>
      </div>
      <Curtain
        onClose={handleCloseCurtain}
        isShow={isShowCurtain}
        type={showingContent}
      />
    </>
  );
};
export default memo(Header);
