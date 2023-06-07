import classNames from "../../../../../helpers/classNames";
import "./Cell.scss";

const Cell: React.FC<{ isSpot: boolean }> = ({ isSpot }) => {
  return <td className={classNames("cell", { spot: isSpot })} />;
};
export default Cell;
