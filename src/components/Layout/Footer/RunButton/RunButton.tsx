import { memo } from "react";
import Button from "../../../shared/Button/Button";
import useRun from "../../../../hooks/useRun";

const RunButton = () => {
  const run = useRun();
  return (
    <Button onClick={run} icon="run">
      Run
    </Button>
  );
};
export default memo(RunButton);
