import { memo } from "react";
import "./Body.scss";
import Table from "./Table/Table";

const Body = () => {
  return (
    <div className="body">
      <Table />
    </div>
  );
};
export default memo(Body);
