import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, img, date, text, linkWeb, linkSignup }) => {
  return (
    <div className="card shadow-sm">
        <div
        className="card-img-top"
        style={{
          height: '200px',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background image applied via inline styles */}
      </div>
      {/* <img className="card-img-top" src={img} alt={text} /> */}
      <div className="card-body">
        <p className="card-text bold">{title}</p>
        <p className="card-text">{text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <a href={linkSignup} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Signup
            </a>
            <a href={linkWeb} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
              Go to Website
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
