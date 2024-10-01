import React,{ useState }  from "react";
import "./bar.css"
import TimeTable from "../timetable/timetable";
import ChatAppoint from "../chatAppoint/chatAppoint";
import NavBarTabTitle from "../navBarTabTitles/navBarTabTitles";
import OverViewAppt from "../overView/overView";
export default function Bar({doctor}) {
   
    return (
        <div className="container-fluid px-0">
            <NavBarTabTitle/>
            <div className="tab-content mt-2" id="myTabContent">
                <div className="tab-pane fade show active ms-3" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                    <OverViewAppt key={doctor.id} doctor={doctor}/>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div className="eachPatientReview mb-2">
                        <h2>Ahmed Ismail ★★★★</h2>
                        <p>'A perfect Doctor'</p>
                    </div>
                    <div className="eachPatientReview mb-2">
                        <h2>Menna Salama ★★★</h2>
                        <p>'I have had better'</p>
                    </div>
                    <div className="eachPatientReview mb-2">
                        <h2>Menna Salama ★★★★★</h2>
                        <p>'Thank you doctor for everything...'</p>
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
