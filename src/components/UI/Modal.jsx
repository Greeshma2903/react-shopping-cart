const Modal = (props) => {
    return (
        <div className="w-2/5 z-40 overflow-hidden absolute top-1/2 translate-y-1/2 right-0 left-0">
            <div className="header flex justify-around">
                <h2 className="text-md text-slate-900">Cart Items</h2>
                <img src="src/assets/x.svg" alt="close cart items list" />
            </div>
            {props.children}
        </div>
    )
}

export default Modal;