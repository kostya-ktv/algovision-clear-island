import "./Button.scss";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
const Button: React.FC<IButton> = (props) => {
  return <button {...props} className={`button ${props.className}`} />;
};
export default Button;
