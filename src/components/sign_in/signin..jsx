import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signbody">
      <div className="wrapper push">
        <div className="title">Sign In</div>
          <div className="form">
            <div className="inputfield">
              <label>Your Email</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>Password</label>
              <input type="password" className="input" />
            </div>
            <div className="inputfield terms">
              <label className="check">
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <span>Remember me</span>
              <a href="#" className="forgot">Forgot password ?</a>
            </div>
            <div className="inputfield">
              <input type="submit" value="Sign In" className="btn" />
            </div>
            <div className="or">
              <p>Or</p>
            </div>
            <div className="out-social">
              <a href="#">
                <button className="social fac">Facebook</button>
              </a>
              <a href="#">
                <button className="social goo">Google</button>
              </a>
            </div>
            <div>
              <label>Don't have an account ?</label>{" "}
              <Link to="/signup" className="signin">
                Sign up
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Signin;
