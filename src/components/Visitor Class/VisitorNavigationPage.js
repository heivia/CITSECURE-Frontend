import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VisitorNavigationPage.css';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import OfficeBuildingIcon from '@mui/icons-material/Business';

class VisitorNavigationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCarouselIndex: 0,
            showMapImage: false
        };
    }

    handleGetDirections = () => {
        //const origin = 'Cebu Institute of Technology, Cebu City, Philippines;'; // Set your starting point
        //const destination = 'CIT-U College Library, Auditorium or College Library Building, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu'; // Destination address
        //const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&destination_place_id=ChIJiUVpuU59qTQR7E3MI8j7pj4`; // You can include destination_place_id if available
        //window.open(googleMapsUrl, '_blank');
    };

    handleGoBack = () => {
        const navigate = useNavigate();
        navigate('/');
    };

    render() {
        const carouselCaptionStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            padding: '20px',
            textAlign: 'left',
            border: '5px solid maroon',
        };

        const directionButtonStyles = {
            backgroundColor: 'maroon',
            color: 'white',
            borderRadius: '30px',
            cursor: 'pointer',
            width: '150px',
            height: '45px',
            flexShrink: 0,
            margin: '10px',
        };

        return (
            <>
                <header
                    className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom"
                    style={{
                        backgroundColor: 'maroon',
                        padding: '10px',
                        fontSize: '20px',
                    }}
                >
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src="/images/CIT LOGO.png" alt="CITSecure Logo" width="67" height="60" />
                        <span style={{ width: '2.5px', height: '40px', backgroundColor: 'white', margin: '0 5px' }}></span>
                        <span>CITSecure</span>
                    </div>

                    <ul className="nav nav-pills d-flex justify-content-center" style={{ margin: 0, padding: 0, flexGrow: 1 }}>
                        <li className="nav-item"><NavLink to="/menu" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/visitor-navigation" className="nav-link" activeClassName="active" style={{ color: 'maroon', backgroundColor: 'white', marginRight: '10px' }}>Visitor Navigation</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>About us</NavLink></li>
                    </ul>

                    <Button
                        variant="contained"
                        startIcon={<ChevronLeftIcon />}
                        onClick={() => window.location.href = '/'}
                        style={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            backgroundColor: 'white',
                            color: 'maroon',
                        }}
                    >
                        Return
                    </Button>
                </header>

                <div>
                    {/* Carousel */}
                    <Carousel
                        data-bs-theme="dark"
                        style={{ width: '80%', margin: '20px auto', marginTop: '60px' }}
                        onSelect={(index) => this.setState({ currentCarouselIndex: index })}
                    >
                        {/* First Carousel Item */}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/Academic Building.jpg"
                                alt="Academic Building"
                                style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={carouselCaptionStyle}>
                                <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                    <h5>Academic Building</h5>
                                    <p>The Academic Building is a hub for various academic and administrative functions, including Architecture, Tourism, Industrial Engineering, Hospital Management, Alumni Office, Safety and Security, and Property Custodian Office. It offers design studios, specialized classrooms, labs, and a secure environment for students. The building serves as a hub for learning, innovation, and community building, fostering a dynamic learning environment.</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgateacadbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-acad" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/backgateacadbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        {/* Second Carousel Item */}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/High School Building.jpg"
                                alt="High School Building"
                                style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={carouselCaptionStyle}>
                                <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                    <h5>High School Building</h5>
                                    <p>Explore the hallways of our high school, a dynamic environment geared for academic advancement and exciting student life. The high school facility creates a suitable atmosphere for study and personal growth by providing well-equipped classrooms, contemporary amenities, and collaboration spaces.</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatehighschool" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-highschool" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/backgatehighschool" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        {/* Third Carousel Item */}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/Elementary Building.jpg"
                                alt="Elementary Building"
                                style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={carouselCaptionStyle}>
                                <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                    <h5>Elementary Building</h5>
                                    <p>Step inside the heart of our elementary building, a dynamic and loving environment designed for early childhood education.</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgateelementary" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-elementary" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/backgateelementary" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                  
                      {/* GLE Building Carousel Item */}
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="images/GLE Building.jpg"
                          alt="GLE Building"
                          style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                        />
                        <Carousel.Caption style={carouselCaptionStyle}>
                          <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                            <h5>GLE Building</h5>
                            <p>The educational complex is a hub for academic and administrative functions, encompassing the Human Resources office, Computer Engineering department, diverse classrooms, and a VPAA office. It promotes interdisciplinary collaboration and serves as a hub for administrative functions, technological education, and diverse academic disciplines.</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgateglebuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-gle" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offle-ices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/Backgateglebuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                  
                      {/* Main Canteen Carousel Item */}
                      
                  <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="images/Main Canteen.jpg"
                      alt="Main Canteen"
                      style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                    />
                    <Carousel.Caption style={{ ...carouselCaptionStyle, justifyContent: 'center' }}>
                      <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                        <h5>Main Canteen</h5>
                        <p>Immerse yourself in a culinary journey at the Main Canteen, where an assortment of delightful aromas and diverse flavors unite.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatemaincanteen" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/backgatemaincanteen" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>

                  
                    {/* RTL Building Carousel Item */}
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src="images/RTL Building.jpg"
                          alt="RTL Building"
                          style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                        />
                            <Carousel.Caption style={carouselCaptionStyle}>
                              <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                <h5>RTL Building</h5>
                                <p>The administrative center is a multifunctional building that houses various functions such as Accounting, Finance, Enrollment, Technical, and Executive. It ensures financial accuracy, compliance, and streamlines operations across various departments, ensuring smooth functioning and efficient operations across the institution.</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatertlbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-rtl" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/backgatertlbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                  
                          {/* NGE Building Carousel Item */}
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="images/NGE Building.jpg"
                              alt="NGE Building"
                              style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={carouselCaptionStyle}>
                              <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                <h5>NGE Building</h5>
                                <p>Enter our specialized building, a fusion of innovation and care, where the realms of Computer Studies and Nursing seamlessly coexist.</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatengebuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-nge" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/Backgatengebuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                  
                        {/* LIB Building Carousel Item */}
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/Library Building.jpg"
                      alt="Library Building"
                      style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                    />
                    <Carousel.Caption style={{ ...carouselCaptionStyle, justifyContent: 'center' }}>
                      <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                        <h5>Library Building</h5>
                        <p>Begin a literary adventure within the walls of our library, a haven for knowledge and discovery.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatelibrarybuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-library" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/Backgatelibrarybuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>

                  
                          {/* ALLIED Building Carousel Item */}
                          <Carousel.Item>
                            <img
                              claclassName="d-block w-100"
                              src="images/Allied Building.jpg"
                              alt="Allied Building"
                              style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={carouselCaptionStyle}>
                              <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                                <h5>Allied Building</h5>
                                <p>Our engineering hub is a comprehensive facility for students specializing in electrical, chemical, mining, civil, and mechanical engineering. It features specialized laboratories, classrooms, and collaborative spaces, fostering hands-on learning and innovation to shape the future.</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatealliedbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    {/* Main Offices Button */}
    <Link to="/offices-allied" style={{ textDecoration: 'none' }}>
        <button style={{ ...directionButtonStyles, backgroundColor: 'black', color: 'white' }}>
            Main Offices <OfficeBuildingIcon />
        </button>
    </Link>
    {/* Back Gate Button */}
    <Link to="/Backgatealliedbuilding" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                  
                          {/* HS CANTEEN Building Carousel Item */}
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/High School Canteen.jpg"
                      alt="High School Canteen"
                      style={{ height: '700px', width: '100%', objectFit: 'cover' }}
                    />
                    <Carousel.Caption style={{ ...carouselCaptionStyle, justifyContent: 'center' }}>
                      <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                        <h5>High School Canteen</h5>
                        <p>Discover a vibrant dining experience at the high school canteen, where a lively atmosphere meets diverse culinary offerings.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* Front Gate Button */}
    <Link to="/frontgatehigh-schoolcanteen" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Front Gate <DoorFrontIcon />
        </button>
    </Link>
    
    {/* Back Gate Button */}
    <Link to="/Backgatehigh-schoolcanteen" style={{ textDecoration: 'none' }}>
        <button style={directionButtonStyles}>
            Back Gate <DoorFrontIcon />
        </button>
    </Link>
</div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                        
                    </Carousel>

                    {this.state.showMapImage && (
                        <img
                            src="images/GLE.png"  // Replace with your map image URL
                            alt="Map"
                            style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }}
                        />
                    )}
                    {/* Line at the bottom of the page */}
                    <div style={{ borderTop: '2px solid maroon', margin: '10px auto', width: '95%' }}></div>

                    {/* Copyright Information */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'maroon', marginBottom: '20px', padding: '0 30px' }}>
                        <p>&copy; 2024 CIT-Secure. All rights reserved</p>
                        <p>Discover Your Campus Pathways with CIT-SECURE.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default VisitorNavigationPage;  