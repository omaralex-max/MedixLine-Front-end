import React,{ useState }  from "react";
import "./bar.css"
import TimeTable from "../timetable/timetable";
import ChatAppoint from "../chatAppoint/chatAppoint";
import NavBarTabTitle from "../navBarTabTitles/navBarTabTitles";
import OverViewAppt from "../overView/overView";
import Reviews from "../reviews/reviews";
import Comment from "../comments/comments";
export default function Bar({doctor}) {
   
    return (
        <div className="container-fluid px-0">
            <NavBarTabTitle/>
            <div className="tab-content mt-2" id="myTabContent">
                <div className="tab-pane fade show active ms-3" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                    <OverViewAppt key={doctor.  id} doctor={doctor}/>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div className="eachPatientReview mb-2">
                        <Reviews  doctor={doctor}/>
                        <Comment doctor={doctor}/>
                    </div>
                    
                </div>
                <div className="tab-pane fade" id="timetable" role="tabpanel" aria-labelledby="timetable-tab">
                    <TimeTable/>
                </div>
                <div className="tab-pane fade" id="bookNow" role="tabpanel" aria-labelledby="bookNow-tab">
                    <ChatAppoint  key={doctor.id} doctor={doctor}/>   
                </div>
            </div>
        </div>
    );
}
