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
        <li>&#169; 2022 Shoppy, Inc.</li>
        <li className="gitHub">
          <FaGithub />
        </li>
        <li className="linkedin">
          <FaLinkedin />
        </li>
      </ul>
    </div>
  );
}
