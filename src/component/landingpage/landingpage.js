import React from 'react';
import {Link} from "react-router-dom"
import "./landingpage.css";
const LandingPage=(props)=>{
    return(
        <div>
           <div>
               <Link to="/create">
               <button className="btn">Create Survey</button>
                </Link>
           </div>
               <div>
                   
                   <button className="btn">Take Survey</button>
                   
                   </div>
            
            Landing Page
        </div>
    )
}
export default LandingPage;