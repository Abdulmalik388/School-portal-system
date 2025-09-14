import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/images/hero.jpg";
import aboutimg from "../assets/images/about.jpg";
import scienceimg from "../assets/images/science.jpeg";
import culturalimg from "../assets/images/cultural.jpeg";
import eventimg from "../assets/images/event.jpeg";
import campusimg from "../assets/images/campus.jpeg";
import Footer from '../components/Footer';
export default function HomePage() {
  // Ensure the body has no margin/padding and the page uses full width
  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.boxSizing = "";
    };
  }, []);

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
<section
  className="position-relative text-white text-center"
  style={{
    height: "80vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Hero Content */}
  <div className="container d-flex flex-column justify-content-center align-items-center h-100 position-relative" style={{ zIndex: "1" }}>
    <h1 className="display-3 fw-bold">Welcome to SchoolPortal</h1>
    <p className="lead mt-3">
      Your one-stop platform for learning, results, payments, and more.
    </p>
    <a href="/register" className="btn btn-light btn-lg mt-3">
      Get Started
    </a>
  </div>
</section>



      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={aboutimg}
                alt="About School"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">About Our School</h2>
              <p className="mt-3">
                We provide quality education and modern facilities to empower
                students with the right knowledge and skills. Our mission is to
                nurture future leaders and innovators.
              </p>
              <a href="/about" className="btn btn-outline-primary mt-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Courses Section */}
<section className="py-5 bg-light">
  <div className="container text-center">
    <h2 className="fw-bold mb-5 text-primary">Our Courses</h2>
    <div className="row g-4">
      
      {/* Science */}
      <div className="col-md-4">
        <div className="card shadow-sm h-100 border-0 rounded-4 course-card">
          <div className="card-body p-4">
            <div className="mb-3 text-primary fs-1">
              <i className="bi bi-flask"></i>
            </div>
            <h5 className="card-title fw-bold">Science</h5>
            <p className="card-text  mt-2">
              Explore Physics, Chemistry, Biology, and cutting-edge research opportunities.
            </p>
            <a href="/courses" className="btn btn-outline-primary mt-3">
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Arts */}
      <div className="col-md-4">
        <div className="card shadow-sm h-100 border-0 rounded-4 course-card">
          <div className="card-body p-4">
            <div className="mb-3 text-danger fs-1">
              <i className="bi bi-palette"></i>
            </div>
            <h5 className="card-title fw-bold">Arts</h5>
            <p className="card-text  mt-2">
              Study Literature, History, Languages, and develop creative talents.
            </p>
            <a href="/courses" className="btn btn-outline-danger mt-3">
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="col-md-4">
        <div className="card shadow-sm h-100 border-0 rounded-4 course-card">
          <div className="card-body p-4">
            <div className="mb-3 text-success fs-1">
              <i className="bi bi-cpu"></i>
            </div>
            <h5 className="card-title fw-bold">Technology</h5>
            <p className="card-text  mt-2">
              Dive into Programming, Web Development, and Digital Skills for the future.
            </p>
            <a href="/courses" className="btn btn-outline-success mt-3">
              View More
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* News & Events Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Latest News & Events</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={scienceimg}
                  className="card-img-top"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Science Fair 2025</h5>
                  <p className="card-text">
                    Our students will showcase innovative projects in science
                    and technology.
                  </p>
                  <a href="/news" className="btn btn-outline-primary ">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={culturalimg}
                  className="card-img-top h-100"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Cultural Day</h5>
                  <p className="card-text">
                    A celebration of diversity and creativity with performances
                    and exhibitions.
                  </p>
                  <a href="/news" className="btn btn-outline-danger">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={eventimg}
                  className="card-img-top h-100"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Sports Week</h5>
                  <p className="card-text">
                    Join us for exciting inter-house competitions in football,
                    athletics, and more.
                  </p>
                  <a href="/news" className="btn btn-outline-success">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Call to Action Section */}
<section 
  className="py-5 text-white text-center" 
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), ",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(59, 24, 140, 0.6)"
  }}
>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Text Side */}
      <div className="col-md-7 text-md-start">
        <h2 className="fw-bold display-5">🎓 Ready to Join Us?</h2>
        <p className="lead mt-3 mb-4">
          Register today and become part of our vibrant academic community.  
          Unlock access to quality education, modern facilities, and a world of opportunities.
        </p>
        <a href="/register" className="btn btn-lg btn-light fw-bold px-4">
          Register Now
        </a>
      </div>

      {/* Illustration Side */}
      <div className="col-md-5 text-center mt-4 mt-md-0">
        <img 
          src={campusimg} 
          alt="Join Us" 
          className="img-fluid rounded-4 shadow-lg w-100"
        />
      </div>
    </div>

    {/* Extra Features */}
    <div className="row mt-5 text-center">
      <div className="col-md-4">
        <i className="bi bi-book fs-1 text-warning"></i>
        <h5 className="fw-bold mt-2">Quality Courses</h5>
        <p className="text-light">Learn from experienced lecturers and industry experts.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-people fs-1 text-info"></i>
        <h5 className="fw-bold mt-2">Modern Learning</h5>
        <p className="text-light">Access digital resources, online lectures, and e-library tools.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-award fs-1 text-success"></i>
        <h5 className="fw-bold mt-2">Student Support</h5>
        <p className="text-light">Enjoy mentorship, counseling, and career guidance.</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
