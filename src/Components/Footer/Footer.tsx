import Logo from "../../assets/whiteLogo.png";
import "./Footer.module.scss";
interface Props {}

function Footer(props: Props) {
   //    const {} = props;

   return (
      <footer>
         <img src={Logo} alt="" />
         <p>© 2020 Kasa. All rights reserved</p>
      </footer>
   );
}

export default Footer;
