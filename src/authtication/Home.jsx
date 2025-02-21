import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SinglePageWebsite = () => {
  return (
    <div className="">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            YourLogo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-primary me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to Our Course Platform</h1>
        <p>Explore a variety of courses to boost your skills!</p>
      </header>

      {/* Courses Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Courses</h2>
        <div className="row">
          {[
            { name: "Web Development", img: "https://via.placeholder.com/150" },
            { name: "Data Science", img: "https://via.placeholder.com/150" },
            {
              name: "Digital Marketing",
              img: "https://via.placeholder.com/150",
            },
            { name: "Graphic Design", img: "https://via.placeholder.com/150" },
          ].map((course, index) => (
            <div className="col-md-3" key={index}>
              <div className="card text-center">
                <img
                  src={course.img}
                  className="card-img-top"
                  alt={course.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">
                    Learn {course.name} with expert guidance.
                  </p>
                  <button className="btn btn-primary"style={{backgroundColor:"gray" , color:"black", border:"none"}}>Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5">
        <p>&copy; 2025 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SinglePageWebsite;
