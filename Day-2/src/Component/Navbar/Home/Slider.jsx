import Marquee from "react-fast-marquee"
import "./Home.css"
function Slider(){
   return(
    <div className="slider">
       <Marquee>
         <div className="marquee">
         <img src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/1Q5BQTaWAplnUICA96OWOw/be456a6b21b030de107077f2155ce467/Vector__22_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/0e998b1376e2e3b2fc5489cfa7b3f11c/Zendesk_wordmark__1_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/2hJsUFIbIVEEEKj6R2YwR1/87ce3bb8fb245387aa9c376db473c079/ebay__3_.svg"/>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/244ce9c4c65c8425c8695a50ece73a4d/logo-ancestry.svg"/>
                <img className="adjust" src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg" />
         </div>
       </Marquee>
    </div>
   )
    
}
export default Slider;