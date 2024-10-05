import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { json } from "react-router-dom";


const UpdateProfile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const token = localStorage.getItem('token')
    const [days, setDays] = useState([]);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        bio: "",
        working_days: [],
        end_time: null,
        start_time: null,
        duration: null,
        price: null
      });

    useEffect(() => {
        console.log(user)
        axios.get(`http://127.0.0.1:8000/api/doctor/workingdays`, {
            headers: {
                'Authorization': `Token ${token}`,
                }
                })
                .then(response => {
                    setDays(response.data);
                    
                    })
                    .catch(error => {
                        console.error(error);
                        });
      axios.get('http://127.0.0.1:8000/api/auth/detail/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data))
            setUser(response.data)
            
          setFormData({
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
            email: response.data.user.email,
            phone_number: response.data.phone_number,
            address: response.data.address,
            bio: response.data.description,
            working_days: response.data.working_days,
            end_time: response.data.end_time,
            start_time: response.data.start_time,
            duration: response.data.duration,
            price: response.data.price
          });
          console.log(formData)
        })
        .catch(error => {
          console.error(error);
        });
        
    }, [token]);
    
    
    const handelOnChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const handleWorkingDaysChange = (event) => {
        const { value, checked } = event.target;
        const dayId = parseInt(value);
      
        if (checked) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            working_days: [...prevFormData.working_days, dayId]
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            working_days: prevFormData.working_days.filter((day) => day !== dayId)
          }));
        }
      };


    


    const handelUpdatePersonal = (e) => {
        e.preventDefault();
        const updateUserData = axios.patch('http://127.0.0.1:8000/api/auth/detail/',
            {"user": {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email
                }
            }
          , {
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
                axios.get('http://127.0.0.1:8000/api/auth/detail/', {
                    headers: {
                      'Authorization': `Token ${token}`
                    }
                  })
                  .then(response => {
                      localStorage.setItem('user', JSON.stringify(response.data))
                      setUser(response.data)
                      })
                alert('Update Success');
                window.location.href = '/doctorpage/update-profile';
            })
            .catch(error => {
              console.error(error);
            });
      };

    const handelDelete = (e) => {
      e.preventDefault();
      if (window.confirm('Are you sure you want to delete your account!')) {
        axios.patch('http://127.0.0.1:8000/api/auth/detail/',
          { "user":
            {
            is_active: false
            }
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
    


    const handleSubmitWorkingHours = (event) => {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/api/doctor/${user.id}/`,
            {
                working_days: formData.working_days,
                end_time: formData.end_time,
                start_time: formData.start_time,
                duration: formData.duration,
                price: formData.price
            }, {
              headers: {
                'Authorization': `Token ${token}`
              }
            })
            .then(response => {
                alert('Update Success');
                window.location.href = '/doctorpage/update-profile';
                })
                .catch(error => {
                    console.error(error);
                    });
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
                                />
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

            <div className="rounded shadow mt-4 p-3">
                <div className="p-4 border-bottom">
                    <h5 className="mb-0">Set Working Days and Hours :</h5>
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmitWorkingHours}>
                        <div className="mb-3">
                            <label className="form-label">Select Working Days:</label>
                            <div>
                                {days.map((day) => (
                                    <div key={day.day} className="form-check">
                                        <input
                                            type="checkbox"
                                            name = {day.id}
                                            value={day.id}
                                            className="form-check-input"
                                            checked={formData.working_days.includes(day.id)}
                                            onChange={handleWorkingDaysChange}                                            
                                        />
                                        <label className="form-check-label">{day.day}</label>
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
                                        name="start_time"
                                        className="form-control"
                                        placeholder="Start Time"
                                        value={formData.start_time}
                                        onChange={handelOnChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>End Time</label>
                                    <input
                                        type="time"
                                        name="end_time"
                                        className="form-control"
                                        placeholder="End Time"
                                        value={formData.end_time}
                                        onChange={handelOnChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Session Duration (minutes):</label>
                            <input
                                type="number"
                                name="duration"
                                className="form-control"
                                placeholder="Session Duration"
                                value={formData.duration}
                                onChange={handelOnChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Session Price:</label>
                            <input
                                type="number"
                                name="price"
                                className="form-control"
                                placeholder="Session Price"
                                value={formData.price}
                                onChange={handelOnChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Save</button>
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
