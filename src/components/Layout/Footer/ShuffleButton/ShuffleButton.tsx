import { memo } from "react";
import Button from "../../../Button/Button";
import useShuffle from "../../../../hooks/useShuffle";

const ShuffleButton = () => {
  const shuffle = useShuffle();
  return (
    <Button onClick={shuffle} theme="blue" icon="shuffle">
      Shuffle
    </Button>
  );
};
export default memo(ShuffleButton);
