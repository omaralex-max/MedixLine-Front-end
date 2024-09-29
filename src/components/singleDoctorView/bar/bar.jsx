import React,{ useState }  from "react";
import "./bar.css"
import TimeTable from "../../timetable/timetable";
import Prices from "../../prices/prices";
export default function Bar() {
   
    return (
        <div className="container-fluid px-0">
            <ul className="nav nav-tabs row navTabBar mx-0" id="myTab" role="tablist">
                <li className="nav-item itemBar mx-0 px-0">
                    <a className="nav-link tab-link active w-100" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="true">Experience</a>
                </li>
                <li className="nav-item itemBar mx-0 px-0">
                    <a className="nav-link tab-link w-100" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                </li>
                <li className="nav-item itemBar mx-0 px-0">
                    <a className="nav-link tab-link w-100" id="timetable-tab" data-bs-toggle="tab" href="#timetable" role="tab" aria-controls="timetable" aria-selected="false">Book Now</a>
                </li>
                <li className="nav-item itemBar mx-0 px-0">
                    <a className="nav-link tab-link" id="bookNow-tab" data-bs-toggle="tab" href="#bookNow" role="tab" aria-controls="bookNow" aria-selected="false">Prices</a>
                </li>
            </ul>
            <div className="tab-content mt-2" id="myTabContent">
                <div className="tab-pane fade show active ms-3" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                    <h3 className="mt-2">Description:</h3>
                    <p className=" barDescriptionDocPat">
                        A surgeon who specializes in the female reproductive system, which includes the cervix, 
                        fallopian tubes, ovaries, uterus, vagina and vulva. 
                        Menstrual problems, contraception, sexuality, menopause and infertility issues are
                        diagnosed and treated by a gynecologist; most gynecologists also provide prenatal care,
                        and some provide primary care.
                    </p>
                    <h3>Specialities:</h3>
                    <p>Gynecology</p>
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
                    <Prices/>
                  
                   
                </div>
            </div>
        </div>
    );
}
