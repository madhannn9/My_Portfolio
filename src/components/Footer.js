import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white">
        <div className="py-5 text-center" style={{ fontSize: '30px' }}>
          Interested in working with me?
          <br />
          <button className="btn btn-outline-light mt-3">Let's Talk</button>
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More Links</h5>
            <a href="#" className="text-light d-block">Blogs</a>
            <a href="#" className="text-light d-block">Home</a>
            <a href="#" className="text-light d-block">Contact Me</a>
            <a href="#" className="text-light d-block">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </a>
          </div>
          <div className="col-12 col-md-4 py-3">
            <p>
              Hard-working and tolerant of hardship. Strong determination to succeed.
              Works well in a multicultural, diverse environment with good analytical capability.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="#"><i className="fab fa-linkedin text-light h1 d-block"></i></a>
            <a href="#"><i className="fab fa-github text-light h1 d-block"></i></a>
            <a href="#"><i className="fas fa-envelope text-light h1 d-block"></i></a>
          </div>
        </div>
        <div className="text-center text-muted py-2">
          <p>&copy; Madhan Abbineni 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
