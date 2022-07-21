import "../Navbar.css"
import {Link} from "react-router-dom"
function Navbarlink(){
    return(
        <div className="navbar">
            
            <div className="icon"><Link to={"/"}>
            <img  src="https://mms.businesswire.com/media/20220302005343/en/1376587/22/Calendly_Primary_Logo_2_%282%29.jpg"/>
            </Link></div>
              
              <div className="navbarmiddle">
               <Link to={"/individual"}><h4>Indivdiuals</h4></Link>
              <Link to={"/teams"}><h4>Teams</h4></Link>
              <Link to={"/enterprise"}><h4>Enterprise</h4></Link>
              <Link to={"/product"}><h4>Product</h4></Link>
              <Link to={"/pricing"}><h4>Pricing</h4></Link>
              <Link to={"/resources"}><h4>Resources</h4></Link>
              </div>
              <div className="navbarlast">
              <Link to={"/login"}><h4>Login</h4></Link>
              <Link to={"/getstarted"}><div className="started"><h4 >Get started</h4></div></Link>
              </div>
        </div>
    )
}
export default Navbarlink;