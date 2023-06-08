import { useMemo } from "react";
import classNames from "../../../helpers/classNames";
import "./Button.scss";
import { BiShuffle, BiRun } from "react-icons/bi";
import { HiOutlineCode } from "react-icons/hi";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isDisabled?: boolean;
  theme?: "blue" | "red" | "neutral";
  icon?: "shuffle" | "run" | "code";
}
const Button: React.FC<IButton> = (props) => {
  const { isDisabled, icon, theme, children, ...restProps } = props;
  const Icon = useMemo(() => {
    if (icon === "shuffle") return BiShuffle;
    if (icon === "run") return BiRun;
    if (icon === "code") return HiOutlineCode;
  }, [icon]);
  return (
    <button
      {...restProps}
      className={classNames("button", { isDisabled: isDisabled || false }, [
        restProps.className,
        theme,
      ])}
    >
      {Icon && <Icon size={20} />}
      <div className="button-children">{children}</div>
    </button>
  );
};
export default Button;
