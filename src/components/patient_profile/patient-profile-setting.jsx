import Pfp from "../../assets/images/FB_IMG_1596651719832.jpg";
import axios from 'axios';
import React, { useEffect, useState } from "react";

const PatientProfileSetting = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const token = localStorage.getItem('token')


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: ""
  });

  // Fetch user details
  useEffect(() => {
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
      });
    })
    .catch(error => {
      console.error(error);
    });
    
}, [token]);
      

  const handelDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete your account!')) {
      axios.patch('http://127.0.0.1:8000/api/auth/detail/',
        { "user": {
          is_active: false
        }
        }, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/';
        })
        .catch(error => {
          console.error(error);
        });
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

      const UpdatePatientData = axios.patch(`http://127.0.0.1:8000/api/patient/${user.id}/`,
        {
          phone_number:formData.phone_number,
          address: formData.address,
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
            window.location.href = '/patient-profile';
        })
        .catch(error => {
          console.error(error);
        });
  };
  
  const handelOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
};


  return (
    <>
      <div className="tab-content p-4">
        <div className="tab-pane fade show active">
          <h5 className="mb-0">Personal Information :</h5>
          <div className="row align-items-center mt-4">
          </div>
          <form className="mt-4" onSubmit={handelUpdatePersonal}>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    name="first_name"
                    type="text"
                    className="form-control"
                    placeholder="First Name :"
                    value={formData.first_name}
                    onChange={handelOnChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    name="last_name"
                    type="text"
                    className="form-control"
                    placeholder="Last Name :"
                    value={formData.last_name}
                    onChange={handelOnChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Phone no.</label>
                  <input
                    name="phone_number"
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
              <div className="col-sm-12">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save changes"
                />
              </div>
            </div>
          </form>

          <div className="mt-4 pt-2">
            <h5 className="mb-0 text-danger">Delete Account :</h5>
            <p className="mb-0 mt-4">
              Do you want to delete the account? Please press below "Delete" button
            </p>
            <div className="mt-4">
              <button className="btn btn-danger" onClick={handelDelete}>Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfileSetting;
