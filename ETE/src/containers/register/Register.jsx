import { React, useState } from 'react';
import ai from '../../assets/ai.png';
import './register.css';

const Register = () => {
  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [data] = useState([]);

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
    // console.log(inpval);
    const { name, email, phone, password } = inpval;
    if (name === '') {
      // eslint-disable-next-line no-alert
      alert('Name field is mandatory!!');
    } else if (email === '') {
      // eslint-disable-next-line no-alert
      alert('Email field is mandatory!!');
    } else if (!email.includes('@')) {
      // eslint-disable-next-line no-alert
      alert('Enter a valid Email!!');
    } else if (phone === '') {
      // eslint-disable-next-line no-alert
      alert('Mobile no. field is empty!!');
    } else if (password === '') {
      // eslint-disable-next-line no-alert
      alert('Password field is empty!!');
    } else {
      // eslint-disable-next-line no-alert
      alert('Data added successfully');
      localStorage.setItem('User', JSON.stringify([...data, inpval]));
      // eslint-disable-next-line no-restricted-globals
      location.href = '/login';
    }
  };
  // eslint-disable-next-line keyword-spacing
  return (
    <div className="gradient__bg container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"><img src={ai} /></div>
        <div className="col-md-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4 text-light">Register!</h3>
                  <br />
                  <form>
                    <div className="form-group mb-3">
                      <input id="inputName" type="text" name="name" placeholder="Name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={getdata} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="email" name="email" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={getdata} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPhone" type="text" name="phone" placeholder="Phone" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={getdata} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPassword" type="password" name="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={getdata} />
                    </div>
                    {/* <div className="custom-control custom-checkbox mb-3">
                      <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                      &emsp;<span className="custom-control-label text-light">Remember password</span>
                    </div> */}
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={addData}>Register</button>
                    <div><span className="text-light">Already have an account?</span>&emsp;<a href="/login"><span className="text-success text-decoration-none">Login</span></a></div>
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

export default Register;
