import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ShowDetails=()=>{
    const location=useLocation();
    const data = location.state;
    const navigate=useNavigate();
    return(
        <>
         <div className="main">
            <div className="image">
                <img src={data.imageUrl} />
            </div>
            <div className="details">
            <p>id : {data.id}</p>
            <p>Body Type: {data.bodyType}</p>
            <p>Model Name: {data.modelName}</p>
            <p>MOdel Type: {data.modelType}</p>  
            <button className="back_button" onClick={()=>{navigate("/",{state:data})}}>Back to main page</button>  
            </div>
            
        </div>
        
        </>
      
        
    )
}