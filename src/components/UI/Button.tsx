interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`cursor-pointer bg-rose-400 flex justify-around items-center rounded font-semibold transition-all hover:ring hover:ring-rose-500 active:ring active:ring-rose-500 ${props.className}`}
    ></button>
  );
};

export default Button;
