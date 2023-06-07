import classNames from "../../../../../helpers/classNames";
import "./Cell.scss";

interface ICell
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {
  isSpot: boolean;
}
const Cell: React.FC<ICell> = ({ isSpot, className, ...props }) => {
  return <td {...props} className={classNames("cell", { spot: isSpot })} />;
};
export default Cell;
