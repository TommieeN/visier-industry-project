import "./Footer.scss";
import footerImage from "../../assets/visier-footer-screengrab.png";

function Footer() {
  return (
    <div className="footer">
      {/* <img src={footerImage} alt="visier footer screengrab" className="footer-img" /> */}
      <div className="col">
        <img src="" />
      </div>
      <div className="col">
        <ul className="col-content">
          <li className="col-header">SOLUTIONS</li>
          <li className="col-link">Visier People</li>
          <li className="col-link">Embedded Analytics</li>
          <li className="col-link">Custom services</li>
          <li className="col-link">Use cases</li>
        </ul>
      </div>
      <div className="col">
        <ul className="col-content">
          <li className="col-header">COMPANY</li>
          <li className="col-link">About Visier</li>
          <li className="col-link">Leadership</li>
          <li className="col-link">Newsroom</li>
          <li className="col-link">Events</li>
          <li className="col-link">Partners</li>
          <li className="col-link">Careers</li>
        </ul>
      </div>
      <div className="col">
        <ul className="col-content">
          <li className="col-header">LEARN</li>
          <li className="col-link">Research</li>
          <li className="col-link">Outsmart blog</li>
          <li className="col-link">Resource library</li>
          <li className="col-link">Visier University</li>
        </ul>
      </div>
      <div className="col">
        <ul className="col-content">
          <li className="col-header">SUPPORT</li>
          <li className="col-link">Product login</li>
          <li className="col-link">Portal login</li>
          <li className="col-link">Contact us</li>
        </ul>
      </div>
      <div className="col">
        <ul className="col-content">
          <li className="col-header text-gradient">EXPLORE VISIER</li>
          <li className="col-link">Request a demo</li>
          <li className="col-link">Take a tour</li>
          <li className="col-link">Contact sales</li>
        </ul>
      </div>

      <div className="col copy-right">
        <ul className="col-content row">
          <li>© 2023 Visier, Inc.</li>
          <li>Privacy statement</li>
          <li>Terms of use</li>
        </ul>
      </div>
      <div className="icons">
        <ul className="col-content row">
          <li>Icons</li>
          <li>Icons</li>
          <li>Icons</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
