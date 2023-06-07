import useAlgo from "../../../../hooks/useAlgo";
import Cell from "./Cell/Cell";
import "./Table.scss";
import useMousePainting from "../../../../hooks/useMousePainting";
import useToggleCell from "../../../../hooks/useToggleCell";

const Table = () => {
  const { table } = useAlgo();
  const toggleCell = useToggleCell();

  const { onMouseDown, onMouseOver, onMouseLeave, onMouseUp } =
    useMousePainting();

  return table.length ? (
    <table className="table" onMouseLeave={onMouseLeave}>
      <tbody>
        {table.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <Cell
                onMouseDown={() =>
                  onMouseDown(cell === 1, () => toggleCell([i, j]))
                }
                onMouseOver={() =>
                  onMouseOver(cell === 1, () => toggleCell([i, j]))
                }
                onMouseUp={onMouseUp}
                isSpot={cell === 1}
                key={j}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
export default Table;
