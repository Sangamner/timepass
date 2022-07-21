import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Individual from "./Individual/Individual"
import Team from "./Team/Team";
import Enterprise from "./Enterprices/Enterprise";
import Product from "./Product/Product";
import Pricing from "./Pricing/Pricing";
import Resource from "./Resources/Resource";
import Signin from "./Signin/Signin";
import Getstarted from "./Getstarted/getStarted"
import Navbarlink from "./Navbarlink/Navbarlink";
function Navbar(){
    return(
        <div>
            <Navbarlink/>{""}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/individual"} element={<Individual/>}/>
                 <Route path={"/teams"} element={<Team/>}/>
                 <Route path={"/enterprise"} element={<Enterprise/>}/>
                 <Route path={"/product"} element={<Product/>}/>
                 <Route path={"/pricing"} element={<Pricing/>}/>
                 <Route path={"/resources"} element={<Resource/>}/>
                 <Route path={"/login"} element={<Signin/>}/>
                 <Route path={"/getstarted"} element={<Getstarted/>}/>
            </Routes>
        </div>
    )
}
export default Navbar;