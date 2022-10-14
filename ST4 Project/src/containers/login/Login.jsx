import React from 'react';
import ai from '../../assets/ai.png';
import './Login.css';

const Login = () => (
  <div className="gradient__bg container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image"><img src={ai} /></div>
      <div className="col-md-6">
        <div className="login d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 mx-auto">
                <h3 className="display-4 text-light">Sign In!</h3>
                <br />
                <form>
                  <div className="form-group mb-3">
                    <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                  </div>
                  <div className="form-group mb-3">
                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                    &emsp;<span className="custom-control-label text-light">Remember password</span>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                  <div><span className="text-light">Dont have account?</span>&emsp;<span className="text-danger">Register</span></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Login;
