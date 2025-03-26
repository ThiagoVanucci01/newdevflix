import "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <img src={props.logo} alt="" />
    </div>
  );
};
export default NavBar;
