const Button = (props) => {
  return (
    <button className={props.className} type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
