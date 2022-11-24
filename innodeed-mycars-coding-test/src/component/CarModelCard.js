import React from "react";
import { useNavigate } from "react-router-dom";

export const CarModelCard=(props)=>{
    const {data} = props;
    const navigate=useNavigate();
    return(
        <div className="car_card">
            <div className="card_container">
                <div className="card_header">
                    <p className="title">{data.bodyType}</p>
                    <label className="subtitle">{data.modelName}</label>
                    <label className="title">{data.modelType}</label>
                </div>
                <div className="card_body">
                    <img  src={data.imageUrl}/>
                </div>
                <div className="card_footer">
                    <div>
                        <p className="learn" onClick={()=>{navigate("/learn",{state:data})}}>LEARN &gt;</p>
                    </div>
                    <div>
                        <p className="learn" onClick={()=>{navigate("/shop",{state:data})}}>SHOP &gt;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}