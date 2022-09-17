const Button = (props) => {
  return (
    <button className={props.className + " flex"} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
