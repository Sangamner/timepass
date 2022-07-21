import "./Home.css"
import Slider from "./Slider";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"
function Home(){
    return(
        <div>
            <div className="outerdiv">
            <div className="inner1">
               <div className="yangadu">
               <div className="redu">
               <h1 >Easy</h1>
               <h1 >scheduling</h1>
               <h1 className="cha">ahead</h1>
               </div>
               </div>
               <div className="yan">
                <p>Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.</p>
               </div>
               <div className="inputpart">
                <div><input placeholder="Enter your email"/></div>
                <div><button>Sign up</button></div>
               </div>
               <div className="endo">
                <p>Create your free account. No credit card required.</p>
                </div>
            </div>
            <div className="inner2">2nd
            <img src="https://www.business2community.com/wp-content/uploads/2021/12/B2C-4-600x387.png"/>
            </div>

            
        </div>
            <div className="yado">
                <div  className="totaluser">
                <h1>Simplified scheduling for more than <span className="yango">10,000,000</span> users worldwide</h1>
                </div>
                <div>
                <Slider/>
                </div>
            </div>

            <div className="div">
                <div className="headline">
                    <h1>We make it easy to get started</h1>
                </div>
                <div className="div3">
                    <div className="diva">hii
                    {/* <FontAwesomeIcon icon="fa-regular fa-circle-check" /> */}
                    </div>
                    <div className="diva">by</div>
                    <div className="diva">kjhg</div>
                </div>
            </div>
            
        </div>
    )
}
export default Home;