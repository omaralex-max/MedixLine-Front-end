import React from "react";

export default function Prices(){
    const services = [
        { name: "Initial Consultation", description: "First visit and evaluation.", price: "$100" },
        { name: "Follow-up Consultation", description: "Subsequent visits for ongoing care.", price: "$75" },
        { name: "Blood Test", description: "Comprehensive blood analysis.", price: "$50" },
        { name: "X-Ray", description: "Radiological imaging.", price: "$150" },
        { name: "Ultrasound", description: "Non-invasive imaging technique.", price: "$200" },
        { name: "Vaccination", description: "Preventive immunization.", price: "$30" },
        { name: "Health Check-up", description: "Complete health evaluation.", price: "$120" },
        { name: "Specialist Referral", description: "Referral to a specialist.", price: "$60" },
    ];

    return(
        <>
          <div className="container mt-5">
            <h2 className="text-center mb-4">Doctor's Price List</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                                <h6 className="card-price">{service.price}</h6>
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}