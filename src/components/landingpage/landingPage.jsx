import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const LandingPage = () => {
  return (
    
    
   
        <div className="lms-system">
          {/* NAVBAR SECTION */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div className="container-fluid px-4">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src="https://www.hibob.com/wp-content/themes/hibob/assets/images/bob-logo.svg"
                  alt="HiBob Logo"
                  height="40"
                />
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
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      PLATFORM
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      SOLUTIONS
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      RESOURCES
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      PARTNERS
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      PRICING
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <button className="demo-btn">REQUEST DEMO</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          {/* HERO SECTION */}
          <main className="hero-section container my-5">
            <div className="row">
              <div className="content-left col-md-6">
                <h1 className="title">LMS system</h1>
                <p className="subtitle">
                  Keep learning in the flow of work and align with employee lifecycle events
                </p>
                <button className="watch-demo mb-4">WATCH A DEMO (3:27)</button>
    
                <div className="ratings d-flex">
                  <div className="g2-rating d-flex align-items-center me-4">
                    <img
                      src="https://www.g2.com/assets/g2-logo-2-87f4c5015b91b8c95df6ad0c806533c4.svg"
                      alt="G2 Logo"
                      className="rating-logo me-2"
                    />
                    <div className="stars">★★★★★</div>
                    <p className="mb-0 ms-2">1232 reviews | 4.5</p>
                  </div>
                  <div className="capterra-rating d-flex align-items-center">
                    <img
                      src="https://www.capterra.com/reviews/images/capterra-logo.svg"
                      alt="Capterra Logo"
                      className="rating-logo me-2"
                    />
                    <div className="stars">★★★★★</div>
                    <p className="mb-0 ms-2">149 reviews | 4.6</p>
                  </div>
                </div>
              </div>
    
              <div className="content-right col-md-6 position-relative">
                <div className="learning-card">
                  <div className="score-section mb-3">
                    <div className="score">100% score</div>
                    <div className="passed">✓ Passed!</div>
                  </div>
                  <div className="satisfaction">
                    <div className="rating">5</div>
                    <div className="text">Very satisfied</div>
                  </div>
                  <div className="my-learning">
                    <h3>My learning</h3>
                    <div className="progress-bar">
                      <div className="progress"></div>
                    </div>
                    <div className="learning-stats">
                      <span>80%</span>
                      <span>11:10m</span>
                    </div>
                  </div>
                </div>
                <div className="decorative-shapes">
                  <div className="shape shape1"></div>
                  <div className="shape shape2"></div>
                </div>
              </div>
            </div>
          </main>
    
          {/* FEATURES SECTION */}
          <section className="features-section">
            <div className="feature-cards container">
              <div className="row justify-content-center">
                <div className="feature-card col-md-2 mx-2 my-2">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 6V12M12 12V18M12 12H18M12 12H6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>Course builder</h3>
                </div>
    
                <div className="feature-card col-md-2 mx-2 my-2">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l-5 5-5-5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>Personalized training</h3>
                </div>
    
                <div className="feature-card col-md-2 mx-2 my-2">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>Dynamic learning</h3>
                </div>
    
                <div className="feature-card col-md-2 mx-2 my-2">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19h16M4 15h16M4 11h16M4 7h16" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>Measurable insights</h3>
                </div>
    
                <div className="feature-card col-md-2 mx-2 my-2">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 18l4-4 4 4M8 10l4-4 4 4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>Content integrations</h3>
                </div>
              </div>
            </div>
          </section>
    
          {/* COURSE BUILDER SECTION */}
          <section className="course-builder-section">
            <div className="content-wrapper d-flex flex-column flex-lg-row mx-auto">
              <div className="text-content flex-fill mb-4">
                <h2>Effortlessly build impactful courses</h2>
                <p>
                  Foster a culture of continuous learning with a user-friendly LMS system that
                  your people will love. Effortlessly build effective, engaging courses and
                  learning journeys using various media formats and LMS tools such as videos,
                  PDFs, and more. Also integrate them with third-party content providers like
                  Udemy. Build a comprehensive course catalog.
                </p>
              </div>
              <div className="interface-preview flex-fill">
                <div className="toolbar d-flex align-items-center justify-content-between">
                  <button className="create-course">+ Create course</button>
                  <span className="total">Total: 430</span>
                </div>
                <div className="course-interface">
                  <img
                    src="https://www.hibob.com/wp-content/uploads/2024/02/course-builder-interface.png"
                    alt="Course Builder Interface"
                  />
                </div>
              </div>
            </div>
          </section>
    
          {/* COURSES SECTION */}
          <section className="courses-section">
            <div className="container">
              <h2>Popular Courses</h2>
              <div className="course-cards">
                {/* COURSE CARD 1 */}
                <div className="course-card">
                  <div
                    className="course-image"
                    style={{ background: 'linear-gradient(45deg, #1a0f2e, #432874)' }}
                  >
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg"
                      alt="Course Instructor"
                    />
                    <div className="course-overlay"></div>
                  </div>
                  <div className="course-content">
                    <h3>ChatGPT Complete Guide: Learn Generative AI & More</h3>
                    <p className="instructor">Julian Melanson, Benzi Kaman</p>
                    <div className="course-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating">4.5</span>
                      <span className="reviews">(44,394)</span>
                    </div>
                    <div className="course-price">
                      <span className="current-price">₹449</span>
                      <span className="original-price">₹2,849</span>
                      <span className="badge premium">Premium</span>
                      <span className="badge bestseller">Bestseller</span>
                    </div>
                  </div>
                </div>
    
                {/* COURSE CARD 2 */}
                <div className="course-card">
                  <div
                    className="course-image"
                    style={{ background: 'linear-gradient(45deg, #1d4d4f, #52b788)' }}
                  >
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg"
                      alt="Course Instructor"
                    />
                    <div className="course-overlay"></div>
                  </div>
                  <div className="course-content">
                    <h3>The Complete AI-Powered Copywriting Course</h3>
                    <p className="instructor">Ing. Tomas Moravek, Learn Digital</p>
                    <div className="course-rating">
                      <span className="stars">★★★★☆</span>
                      <span className="rating">4.3</span>
                      <span className="reviews">(1,748)</span>
                    </div>
                    <div className="course-price">
                      <span className="current-price">₹449</span>
                      <span className="original-price">₹2,099</span>
                      <span className="badge premium">Premium</span>
                    </div>
                  </div>
                </div>
    
                {/* COURSE CARD 3 */}
                <div className="course-card">
                  <div
                    className="course-image"
                    style={{ background: 'linear-gradient(45deg, #2b1b47, #663399)' }}
                  >
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg"
                      alt="Course Instructor"
                    />
                    <div className="course-overlay"></div>
                  </div>
                  <div className="course-content">
                    <h3>ChatGPT, Midjourney, Gemini: Marketing Tools</h3>
                    <p className="instructor">Anton Voroniuk, Anton Voroniuk Support</p>
                    <div className="course-rating">
                      <span className="stars">★★★★☆</span>
                      <span className="rating">4.4</span>
                      <span className="reviews">(487)</span>
                    </div>
                    <div className="course-price">
                      <span className="current-price">₹529</span>
                      <span className="original-price">₹1,899</span>
                      <span className="badge premium">Premium</span>
                    </div>
                  </div>
                </div>
    
                {/* COURSE CARD 4 */}
                <div className="course-card">
                  <div
                    className="course-image"
                    style={{ background: 'linear-gradient(45deg, #0d3b2c, #2d6a4f)' }}
                  >
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg"
                      alt="Course Instructor"
                    />
                    <div className="course-overlay"></div>
                  </div>
                  <div className="course-content">
                    <h3>Mastering SEO With ChatGPT: Ultimate Beginner's Guide</h3>
                    <p className="instructor">Anton Voroniuk, Anton Voroniuk Support</p>
                    <div className="course-rating">
                      <span className="stars">★★★★☆</span>
                      <span className="rating">4.4</span>
                      <span className="reviews">(250)</span>
                    </div>
                    <div className="course-price">
                      <span className="current-price">₹469</span>
                      <span className="original-price">₹799</span>
                      <span className="badge premium">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* ABOUT SECTION */}
          <section className="about-section">
            <div className="container">
              <div className="about-content row">
                <div className="about-text col-md-6 mb-4">
                  <h2>About Us</h2>
                  <p className="subtitle">Empowering Learning Through Innovation</p>
                  <p className="description">
                    We are dedicated to revolutionizing the way people learn and grow. Our
                    platform combines cutting-edge technology with expert-led courses to create
                    an engaging and effective learning experience. With our comprehensive LMS
                    system, we've helped thousands of individuals and organizations achieve
                    their learning goals.
                  </p>
                  <div className="stats d-flex">
                    <div className="stat-item me-5">
                      <h3>50K+</h3>
                      <p>Active Learners</p>
                    </div>
                    <div className="stat-item me-5">
                      <h3>200+</h3>
                      <p>Expert Instructors</p>
                    </div>
                    <div className="stat-item">
                      <h3>1000+</h3>
                      <p>Course Library</p>
                    </div>
                  </div>
                </div>
                <div className="about-image col-md-6">
                  <div className="image-container">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="Team Learning"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* FOOTER SECTION */}
          <footer className="footer">
            <div className="container">
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icon">📧</i> support@learningplatform.com
                    </li>
                    <li>
                      <i className="icon">📞</i> +1 (555) 123-4567
                    </li>
                    <li>
                      <i className="icon">📍</i> 123 Learning Street, Education Valley, CA 94105
                    </li>
                  </ul>
                </div>
    
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
    
                <div className="footer-section">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
    
                <div className="footer-section">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      Facebook
                    </a>
                    <a href="#" className="social-link">
                      Twitter
                    </a>
                    <a href="#" className="social-link">
                      LinkedIn
                    </a>
                    <a href="#" className="social-link">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2025 Learning Platform. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    };
    
   
  

export default LandingPage
