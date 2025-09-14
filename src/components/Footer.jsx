import React from "react";

const Footer = () => {
  return (
    // Footer
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          
          {/* About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">SchoolPortal</h4>
            <p className="text-muted">
              Your one-stop platform for education, results, payments, and more. 
              Empowering students and schools with technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-white-50">Home</a></li>
              <li><a href="/courses" className="text-decoration-none text-white-50">Courses</a></li>
              <li><a href="/register" className="text-decoration-none text-white-50">Register</a></li>
              <li><a href="/login" className="text-decoration-none text-white-50">Login</a></li>
              <li><a href="/contact" className="text-decoration-none text-white-50">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i> 123 School Road, Lagos</p>
            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i> abdulmaliklawal388@gmail.com</p>
            <p><i className="bi bi-telephone-fill me-2"></i> +234 808 116 8026</p>
            
            {/* Social Media */}
            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center pb-3">
          <p className="mb-0">&copy; 2025 SchoolPortal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;