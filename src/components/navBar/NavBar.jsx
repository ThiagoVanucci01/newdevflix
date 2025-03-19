import "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <img src={props.logo} alt="" />
    </div>
  );
};
export default NavBar;
