import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


const UpdateProfile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [workingDays, setWorkingDays] = useState([]);
    const [workingHours, setWorkingHours] = useState({ start: "", end: "" });
    const [sessionTime, setSessionTime] = useState("");
    const [sessionPrice, setSessionPrice] = useState("");
    const token = localStorage.getItem('token')

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        bio: ""
      });

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/auth/detail/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(response => {
          console.log(response)
          setFormData({
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email
          });
        })
        .catch(error => {
          console.error(error);
        });
        
      axios.get(`http://127.0.0.1:8000/api/doctor/${user.id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      .then(response => {
        console.log(response)
        setFormData({
          phone_number: response.data.phone_number,
          address: response.data.address,
          bio: response.data.description
          });
          })
          .catch(error => {
            console.error(error);
            });
    }, [token]);
    
    
    const handelOnChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value !== "" ? e.target.value : formData[e.target.name]
        });
    };

    const handelUpdatePersonal = (e) => {
        e.preventDefault();
        const updateUserData = axios.patch('http://127.0.0.1:8000/api/auth/detail/',
          {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email
          }, {
            headers: {
              'Authorization': `Token ${token}`
            }
          })
    
          const UpdatePatientData = axios.patch(`http://127.0.0.1:8000/api/doctor/${user.id}/`,
            {
              phone_number:formData.phone_number,
              address: formData.address,
              description: formData.bio
            }, {
              headers: {
                'Authorization': `Token ${token}`
              }
            })
            Promise.all([updateUserData, UpdatePatientData])
            .then(response => {
              console.log(response.data);
              alert('Update Success');
            })
            .catch(error => {
              console.error(error);
            });
      };

    const handelDelete = (e) => {
      e.preventDefault();
      if (window.confirm('Are you sure you want to delete your account!')) {
        axios.patch('http://127.0.0.1:8000/api/auth/detail/',
          {
            is_active: false
          }, {
            headers: {
              'Authorization': `Token ${token}`
            }
          })
          .then(response => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/';
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
    

    const handleWorkingDaysChange = (event) => {
        const { value, checked } = event.target;
        setWorkingDays((prev) =>
            checked ? [...prev, value] : prev.filter(day => day !== value)
        );
    };

    const handleSubmitWorkingHours = (event) => {
        event.preventDefault();
        console.log("Working Days:", workingDays);
        console.log("Working Hours:", workingHours);
        console.log("Session Time:", sessionTime);
        console.log("Session Price:", sessionPrice);
        // Here you can add logic to save the data, e.g., API call
    };
    return (
        
        <div className="rounded shadow mt-4">
            <div className="p-4 border-bottom">
                <h5 className="mb-0">Personal Information :</h5>
            </div>
            <div className="p-4 border-bottom">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4">
                        <img
                            src={`http://127.0.0.1:8000/${user.profile_picture}`}
                            className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                        <h5>Upload your picture</h5>
                        <p className="text-muted mb-0">
                            For best results, use an image at least 256px by 256px in either
                            .jpg or .png format
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                        <a className="btn btn-primary" href="/doctor-profile-setting">
                            Upload
                        </a>
                        <a className="btn btn-soft-primary ms-2" href="/doctor-profile-setting">
                            Remove
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <form onSubmit={handelUpdatePersonal}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input
                                    name="first_name"
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name :"
                                    value={formData.first_name}
                                    onChange={handelOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input
                                    name="last_name"
                                    id="name2"
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name :"
                                    value={formData.last_name}
                                    onChange={handelOnChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email :"
                                    value={formData.email}
                                    onChange={handelOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Phone no.</label>
                                <input
                                    name="phone_number"
                                    id="number"
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone no. :"
                                    value={formData.phone_number}
                                    onChange={handelOnChange}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    placeholder="Address :"
                                    value={formData.address}
                                    onChange={handelOnChange}
                                />comments
                            </div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Your Bio Here</label>
                                <textarea
                                    name="bio"
                                    id="comments"
                                    rows="4"
                                    className="form-control"
                                    placeholder="Bio :"
                                    value={formData.bio}
                                    onChange={handelOnChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <input
                                type="submit"
                                id="submit"
                                name="send"
                                className="btn btn-primary"
                                value="Save changes"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div class="rounded shadow mt-4">
                <div class="p-4 border-bottom">
                    <h5 class="mb-0">Change Password :</h5>
                </div>
                <div class="p-4">
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label">Old password :</label>
                                    <input type="password" class="form-control" placeholder="Old password" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label">New password :</label>
                                    <input type="password" class="form-control" placeholder="New password" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label">Re-type New password :</label>
                                    <input type="password" class="form-control" placeholder="Re-type New password" />
                                </div>
                            </div>
                            <div class="col-lg-12 mt-2 mb-0">
                                <button type="submit" class="btn btn-primary">Save password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="rounded shadow mt-4 p-3">
                <div className="p-4 border-bottom">
                    <h5 className="mb-0">Set Working Days and Hours :</h5>
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmitWorkingHours}>
                        <div className="mb-3">
                            <label className="form-label">Select Working Days:</label>
                            <div>
                                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                                    <div key={day} className="form-check">
                                        <input
                                            type="checkbox"
                                            value={day}
                                            className="form-check-input"
                                            onChange={handleWorkingDaysChange}
                                        />
                                        <label className="form-check-label">{day}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Working Hours:</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder="Start Time"
                                        onChange={(e) => setWorkingHours({ ...workingHours, start: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder="End Time"
                                        onChange={(e) => setWorkingHours({ ...workingHours, end: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Session Duration (minutes):</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Session Duration"
                                value={sessionTime}
                                onChange={(e) => setSessionTime(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Session Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Session Price"
                                value={sessionPrice}
                                onChange={(e) => setSessionPrice(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Save Working Hours</button>
                    </form>
                </div>
            </div>
            <div class="rounded shadow mt-4 p-3">
                <div class="p-4 border-bottom">
                    <h5 class="mb-0 text-danger">Delete Account :</h5>
                </div>
                <div class="p-4">
                    <h6 class="mb-0 fw-normal">Do you want to delete the account? Please press the "Delete" button below.</h6>
                    <div class="mt-4">
                        <button class="btn btn-danger" onClick={handelDelete}>Delete Account</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;
