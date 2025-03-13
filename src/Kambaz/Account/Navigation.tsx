import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Account/${link}`;
        const isActive = pathname === path;
        return (
          <Link 
            key={link} 
            to={path} 
            className={`list-group-item text-danger border-0 p ${isActive ? "active text-black" : ""}`}
          >
            {link}
          </Link>
        );
      })}
    </div>

      
      
      <br />
    </div>
  );
}
