const Modal = (props) => {
  return (
    <div className="min-w-max w-2/5 z-90 overflow-hidden absolute my-0 mx-auto left-0 right-0 bg-white p-8 rounded border-3 border-slate-300 shadow-xl">
      {props.children}
    </div>
  );
};

export default Modal;
