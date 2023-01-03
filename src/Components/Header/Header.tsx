import Logo from "../../assets/salmonLogo.png";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
interface Props {
   currentPage?: string;
}
function Header({ currentPage }: Props) {
   const navigate = useNavigate();
   return (
      <header>
         <img src={Logo} alt="" />
         <nav>
            <ul>
               <li
                  onClick={() => navigate("/")}
                  className={currentPage === "home" ? "active" : ""}
               >
                  Accueil
               </li>
               <li
                  onClick={() => navigate("/about")}
                  className={currentPage === "about" ? "active" : ""}
               >
                  A Propos
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
