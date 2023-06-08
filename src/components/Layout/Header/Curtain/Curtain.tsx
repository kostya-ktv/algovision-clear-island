import { memo } from "react";
import "./Curtain.scss";
import { CurtainShowingType, legend } from "./curtain.service";
import classNames from "../../../../helpers/classNames";
import { VscClose } from "react-icons/vsc";
import CodeFragment from "../../../shared/CodeFragment/CodeFragment";
import { clearTable } from "../../../../service/algo.service";

interface ICurtain {
  isShow: boolean;
  type: CurtainShowingType;
  onClose: Function;
}
const Curtain: React.FC<ICurtain> = (props) => {
  const codeText = clearTable.toString();
  const legendText = legend.toString();
  const { isShow, type, onClose } = props;
  return (
    <div className={classNames("curtain", { isCollapsed: !isShow })}>
      <div className="curtain-header">
        <VscClose
          className="curtain-close"
          size={27}
          onClick={() => onClose()}
        />
        <h1 className="curtain-title">
          {type === "code" ? "Code: " : "Legend: "}
        </h1>
      </div>
      {type === "code" ? (
        <CodeFragment style="code" code={codeText} />
      ) : (
        <CodeFragment style="legend" code={legendText} />
      )}
    </div>
  );
};
export default memo(Curtain);
