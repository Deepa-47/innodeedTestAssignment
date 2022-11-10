import { Route,Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { ShowDetails } from "./ShowDetails";

export const Router=()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/learn" element={<ShowDetails/>}/>
            <Route path="/shop" element={<ShowDetails/>}/>
        </Routes>
    )
}