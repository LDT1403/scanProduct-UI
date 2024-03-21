import React from "react";
import Body from "./Body";
import Header from "./Header";
import CardAD from "./CardAD";
import DateAD from "./DateAD";


const DashBoard = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <CardAD />
            </div>
            <div>
                <DateAD />
            </div>
            <div>
                <Body />
            </div>


        </div >
    )
}
export default DashBoard