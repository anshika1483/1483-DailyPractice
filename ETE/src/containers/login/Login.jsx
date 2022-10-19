import { React, useState } from 'react';
import ai from '../../assets/ai.png';
import './Login.css';

const Login = () => {
  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setInpval(() => ({
      ...inpval,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem('User');
    // console.log(getuserArr);

    const { email, password } = inpval;
    if (email === '') {
      // eslint-disable-next-line no-alert
      alert('Email field is mandatory!!');
    } else if (!email.includes('@')) {
      // eslint-disable-next-line no-alert
      alert('Enter a valid Email!!');
    } else if (password === '') {
      // eslint-disable-next-line no-alert
      alert('Password field is empty!!');
    } else if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
      const userlogin = userdata.filter((el) => el.email === email && el.password === password);
      if (userlogin.length === 0) {
        // eslint-disable-next-line no-alert
        alert("OOPS!!! Don't have an account.. Register first");
        // eslint-disable-next-line no-restricted-globals
        location.href = '/register';
      } else {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/client';
      }
    }
  };

  return (
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
                      <input id="inputEmail" type="email" name="email" onChange={getdata} placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPassword" type="password" name="password" onChange={getdata} placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                      &emsp;<span className="custom-control-label text-light">Remember password</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={addData}>Sign in</button>
                    <div><span className="text-light">Dont have account?</span>&emsp;<a href="/register" className="text-decoration-none"><span className="text-danger">Register</span></a></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
