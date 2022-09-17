import ReactDOM from "react-dom";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";


const App = () => {
  const navRoot = document.querySelector("#nav-root");
  return (
    <>
      {ReactDOM.createPortal(<Nav />, navRoot)}
      <h1 className="text-3xl font-bold text-center m-5">Menu</h1>
      <Menu/>
    </>
  );
};

export default App;
