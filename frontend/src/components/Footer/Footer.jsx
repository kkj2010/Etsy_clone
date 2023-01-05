import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="leftFooter">
        <li className="flag">
          <img src="/img/usaFlag.png" />
        </li>
        <li> United States</li>
        <li>l</li>
        <li>English (US)</li>
        <li>l</li>
        <li> $ (USD)</li>
      </ul>
      <ul className="rightFooter">
        <li className="shoppyInc">&#169; 2022 Shoppy, Inc.</li>
        <li className="gitHub">
        <a className="gitHub" style={{color:"white"}} href="https://github.com/kkj2010/Etsy_clone.git"><FaGithub /></a>
        </li>
        <li className="linkedin">
        <a className="linkedin" style={{color:"white"}} href="https://www.linkedin.com/in/kunjukim"><FaLinkedin /></a>
        </li>
      </ul>
    </div>
  );
}
