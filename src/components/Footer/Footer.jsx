import "./Footer.scss";
import footerImage from "../../assets/visier-footer-screengrab.png";

function Footer() {
  return (
    <div className="footer">
      <img src={footerImage} alt="visier footer screengrab" className="footer-img" />
    </div>
  );
}

export default Footer;
