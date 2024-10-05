import React from "react";

export default function NavBarTabTitle(){
    const user = localStorage.getItem('user')

    return(
        <><ul className="nav nav-tabs row navTabBar mx-0" id="myTab" role="tablist">
        <li className="nav-item itemBar mx-0 px-0">
            <a className="nav-link tab-link active w-100" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="true">Overview</a>
        </li>
        <li className="nav-item itemBar mx-0 px-0">
            <a className="nav-link tab-link w-100" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Feedback</a>
        </li>
        <li className="nav-item itemBar mx-0 px-0">
            <a className="nav-link tab-link w-100" id="timetable-tab" data-bs-toggle="tab" href="#timetable" role="tab" aria-controls="timetable" aria-selected="false">Book Now</a>
        </li>
        {user && (
                    <li className="nav-item itemBar mx-0 px-0">
                    <a className="nav-link tab-link" id="bookNow-tab" data-bs-toggle="tab" href="#bookNow" role="tab" aria-controls="bookNow" aria-selected="false">Chat Now</a>
                </li>
                )}
    </ul>
        
        </>
    )
}