import Button from "./UI/Button";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-screen px-8 py-8 border-b-2 border-orange-200 tracking-widest font-myfont">
      <div className="logo">
        <h1 className="text-3xl font-bold">fop</h1>
      </div>
      <ul className="flex justify-evenly space-x-12 text-lg font-medium">
        <li>home</li>
        <li>categories</li>
        <li>contact</li>
      </ul>
      <Button className="text-bold bg-yellow-500 px-3 py-2 text-slate-900 font-medium tracking-widest rounded hover:bg-yellow-300">
        cart
      </Button>
    </nav>
  );
};

export default Nav;
