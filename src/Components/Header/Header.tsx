import Logo from "../../assets/salmonLogo.png";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
function Header() {
   const navigate = useNavigate();
   return (
      <header>
         <img src={Logo} alt="" />
         <nav>
            <ul>
               <li onClick={() => navigate("/")}>Accueil</li>
               <li onClick={() => navigate("/about")}>A Propos</li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
