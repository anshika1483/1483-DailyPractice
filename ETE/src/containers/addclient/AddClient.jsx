import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ai from '../../assets/ai.png';
import '../register/register.css';
import Uploads from './Uploads';

const AddClient = () => {
  const [data, setData] = useState([{}]);
  const getUser = async () => {
    await axios.get('http://localhost:4000/posts').then((res) => setData(res.data));
  };
  useEffect(() => {
    getUser();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const handleFormSubmit = async () => {
    await axios.post('http://localhost:4000/posts', formData);
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
    });
    getUser();
  };
  const handleDelete = async (id) => {
    // eslint-disable-next-line no-alert
    await axios.delete(`http://localhost:4000/posts/${id}`).then(alert('Data deleted successfully'));
    getUser();
  };
  const handleUpdate = async () => {
    // eslint-disable-next-line no-alert
    await axios.put(`http://localhost:4000/posts/${updateData.id}`, updateData).then(() => { alert('Data updated successfully'); getUser(); });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="gradient__bg container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"><img src={ai} /></div>
        <div className="col-md-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4 text-light">Add Empolyee!</h3>
                  <br />
                  <form>
                    <div className="form-group mb-3">
                      <input id="inputName" type="text" placeholder="Name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="text" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPhone" type="text" placeholder="Phone" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputAddress" type="text" placeholder="Address" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={handleFormSubmit}>Add Employee</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
            <th scope="col">Upload image</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      handleShow(); setUpdateData(
                        { name: user.name, email: user.email, phone: user.phone, address: user.address, id: user.id },
                      );
                    }}
                  >
                    Edit
                  </button>
                  &emsp; &emsp;
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
                <td>
                  <Uploads />
                </td>
                {/* <td>
                  <input type="file" name="myfile" onChange={myHandler()} />
                  &emsp;<button type="button" className="btn btn-success">Upload</button>
                </td> */}
              </tr>
            ))
          }
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-3">
              <input id="inputName" type="text" placeholder="Name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" value={updateData.name} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
            </div>
            <div className="form-group mb-3">
              <input id="inputEmail" type="text" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" value={updateData.email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} />
            </div>
            <div className="form-group mb-3">
              <input id="inputPhone" type="text" placeholder="Phone" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={updateData.phone} onChange={(e) => setUpdateData({ ...updateData, phone: e.target.value })} />
            </div>
            <div className="form-group mb-3">
              <input id="inputAddress" type="text" placeholder="Address" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={updateData.address} onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); handleUpdate(); }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default AddClient;
