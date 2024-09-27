import Pfp from "../../assets/images/FB_IMG_1596651719832.jpg"

const PatientProfileSetting = () => {
  return (
    <>
      {/* <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div className="card border-0 shadow overflow-hidden">
          <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
            <li className="nav-item">
              <a className="nav-link rounded-0" href="#">
                <div className="text-center pt-1 pb-1">
                  <h5 className="title fw-normal mb-0">Profile</h5>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="active nav-link rounded-0" href="#">
                <div className="text-center pt-1 pb-1">
                  <h5 className="title fw-normal mb-0">Profile Settings</h5>
                </div>
              </a>
            </li>
          </ul> */}
          <div className="tab-content p-4">
            <div className="tab-pane fade show active">
              <h5 className="mb-0">Personal Information :</h5>
              <div className="row align-items-center mt-4">
                <div className="col-lg-2 col-md-4">
                  <img
                    src={Pfp}
                    className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                    alt=""
                  />
                </div>
                <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                  <h6 className="">Upload your picture</h6>
                  <p className="text-muted mb-0">
                    For best results, use an image at least 256px by 256px in
                    either .jpg or .png format
                  </p>
                </div>
                <div className="col-lg-5 col-md-12 text-lg-right text-center mt-4 mt-lg-0">
                  <a className="btn btn-primary" href="#">
                    Upload
                  </a>
                  <a className="btn btn-soft-primary ms-2 hov" href="#">
                    Remove
                  </a>
                </div>
              </div>
              <form className="mt-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="First Name :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        name="name"
                        id="name2"
                        type="text"
                        className="form-control"
                        placeholder="Last Name :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Phone no.</label>
                      <input
                        name="number"
                        id="number"
                        type="text"
                        className="form-control"
                        placeholder="Phone no. :"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Your Bio Here</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows={4}
                        className="form-control"
                        placeholder="Bio :"
                        defaultValue={""}
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
                      defaultValue="Save changes"
                    />
                  </div>
                </div>
              </form>
              <div className="mt-4 pt-2">
                <h5 className="mb-0">Change Password :</h5>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Old password :</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Old password"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">New password :</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New password"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Re-type New password :
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Re-type New password"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-2 mb-0">
                      <button className="btn btn-primary">Save password</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-4 pt-2">
                <h5 className="mb-0 text-danger">Delete Account :</h5>
                <p className="mb-0 mt-4">
                  Do you want to delete the account? Please press below "Delete"
                  button
                </p>
                <div className="mt-4">
                  <button className="btn btn-danger">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}
    </>
  );
};

export default PatientProfileSetting;
