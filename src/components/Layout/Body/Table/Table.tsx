import useAlgo from "../../../../hooks/useAlgo";
import Cell from "./Cell/Cell";
import "./Table.scss";

const Table = () => {
  const { table } = useAlgo();
  return table.length ? (
    <table className="table">
      {table.map((row, i) => (
        <tr key={i}>
          {row.map((cell, i) => (
            <Cell isSpot={cell === 1} key={i} />
          ))}
        </tr>
      ))}
    </table>
  ) : null;
};
export default Table;
