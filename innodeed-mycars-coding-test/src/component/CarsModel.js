import { cardata } from "../database/api";
import { CarModelCard } from "./CarModelCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { useState } from "react";

export const CarsModel=()=>{
    const [searchData,setSearchData]=useState("");
    
    const data=cardata;
    return(
        <div> 
            <div className="main_container">
                <div className="search_bar">
                    <input value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} className="input_searchbar" type="search" placeholder="search by bodytype"/>
                </div>
            <div className="carosel_container">
                {data.filter((d)=>{
                    if(searchData==""){
                        return d;
                    }
                    else if(d.bodyType.toLowerCase().match(searchData.toLowerCase())){
                        return d;
                    }
                })
                .map((data)=>{
                    return(
                        <div className="legend">
                            <CarModelCard data = {data} />
                        </div>
                    )
                })} 
                </div>
            </div>
           
        </div>
    )
}