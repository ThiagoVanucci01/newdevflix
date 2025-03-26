import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Feito com ❤️‍🔥 por
        <a href={props.devLink1}>{props.devName1}</a> e <a href={props.devLink2}>{props.devName2}</a>
      </p>
    </footer>
  );
};

export default Footer;
