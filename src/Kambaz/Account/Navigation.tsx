import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const links = ["Signin", "Signup", "Profile"];
  const location = useLocation();
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Account/${link}`;
        const isActive = location.pathname === path;
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
