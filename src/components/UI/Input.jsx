import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={"quantity_" + props.input.id} className="spn">
        {props.label}
      </label>
      <input
        
        id={props.input.id}
        {...props.input}
        ref={ref}
      />
    </>
  );
});

export default Input;
