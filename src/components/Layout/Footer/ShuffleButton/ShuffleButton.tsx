import { memo, useEffect } from "react";
import Button from "../../../shared/Button/Button";
import useShuffle from "../../../../hooks/useShuffle";

const ShuffleButton = () => {
  const shuffle = useShuffle();

  useEffect(() => {
    shuffle();
  }, []);
  return (
    <Button onClick={shuffle} theme="blue" icon="shuffle">
      Shuffle
    </Button>
  );
};
export default memo(ShuffleButton);
