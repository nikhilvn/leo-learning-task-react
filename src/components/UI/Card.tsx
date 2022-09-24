interface CardProps {
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return <div className="rounded bg-white shadow-card">{props.children}</div>;
};

export default Card;
