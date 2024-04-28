import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [buildingToVisit, setBuildingToVisit] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  };

  useEffect(() => {
    setInitialTime();
  }, []);

  const setInitialTime = () => {
    const currentTime = getCurrentTime();
    setSystemTime(currentTime);
  };

  const [systemTime, setSystemTime] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      if (!firstName || !lastName || !purpose || !cardNo || !buildingToVisit) {
        alert('Please fill out all fields');
        return;
      }

      const formData = {
        firstName,
        lastName,
        purpose,
        cardNo,
        timeInString: systemTime,
        buildingToVisit,
      };

      const response = await axios.post(
        'http://localhost:8080/admin/addvisitor',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Signup successful:', response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please check the console for details.');
    }
  };

  const resetFormInputs = () => {
    setFirstName('');
    setLastName('');
    setPurpose('');
    setCardNo('');
    setBuildingToVisit('');
  };
  

  
  const handleViewMap = () => {
    // Navigate to the map page
    navigate('/visitor-navigation'); // Assuming '/visitor-navigation' is the route for your map page
  };
  
  const handleExit = () => {
    // Navigate back to the home page or perform any other action
    navigate('/'); // Assuming '/' is the route for your home page
  };
  

  const handleClose = () => {
    setShowModal(false);
    resetFormInputs();
  };
  

  

  const backgroundImageStyle = {
    backgroundImage: 'url("images/TIME IN.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    overflowY: 'auto',
  };

  const formStyle = {
    border: '3px solid maroon',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#FFF9EB',
    fontFamily: 'Roboto, sans-serif',
  };
  
  const inputStyle = {
    borderColor: 'maroon',
    borderRadius: '8px',
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'Roboto, sans-serif',
    width: '100%',
  };

  return (
    <section className="background-radial-gradient overflow-hidden" style={backgroundImageStyle}>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div className="card bg-glass" style={formStyle}>
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ color: 'maroon', marginBottom: '30px' }}>Visitor Form</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control custom-input"
                          style={inputStyle}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-control custom-input"
                          style={inputStyle}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="purpose">
                      Purpose
                    </label>
                    <input
                      type="text"
                      id="purpose"
                      className="form-control custom-input"
                      style={inputStyle}
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="cardNo">
                      Card Number
                    </label>
                    <input
                      type="number"
                      id="cardNo"
                      className="form-control custom-input"
                      style={inputStyle}
                      value={cardNo}
                      onChange={(e) => setCardNo(e.target.value)}
                      min={0}
                      step={1}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="timeIn">
                      Time In
                    </label>
                    <input
                      type="text"
                      id="timeIn"
                      className="form-control custom-input"
                      style={inputStyle}
                      value={systemTime}
                      readOnly
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="buildingToVisit">Building to Visit</label>
                    <select
                      id="buildingToVisit"
                      className="form-control"
                      value={buildingToVisit}
                      onChange={(e) => setBuildingToVisit(e.target.value)}
                      required
                      style={{
                        color: 'maroon',
                        paddingRight: '30px',
                        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'maroon\' width=\'18px\' height=\'18px\'><path d=\'M8.59 8.59L13 13l4.41-4.41L19 10l-6 6-6-6 1.41-1.41z\'/></svg>")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right center',
                      }}
                    >
                      <option value="">Select Building</option>
                      <option value="NGE">NGE</option>
                      <option value="GLE">GLE</option>
                      <option value="RTL">RTL</option>
                      <option value="ALLIED">ALLIED</option>
                      <option value="ACAD">ACAD</option>
                      <option value="SAL">SAL</option>
                      <option value="MAIN CANTEEN">MAIN CANTEEN</option>
                      <option value="HIGHSCHOOL CANTEEN">HIGHSCHOOL CANTEEN</option>
                      <option value="ELEMENTARY BUILDING">ELEMENTARY BUILDING</option>
                      <option value="WILDCATS LIBRARY">WILDCATS LIBRARY</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    style={{ background: '#A43F3F', borderRadius: '17px' }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ borderBottom: '2px solid maroon' }}>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center">
            <p style={{ marginRight: '10px' }}>Form Submitted Successfully!</p>
            <p style={{ color: 'green', fontSize: '2rem' }}>✓</p>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: '2px solid maroon', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="primary" onClick={handleViewMap} style={{ background: 'maroon', width: '150px' }}>
            View Map
          </Button>
          <Button variant="primary" onClick={handleExit} style={{ background: 'maroon', width: '150px' }}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default SignUp;
