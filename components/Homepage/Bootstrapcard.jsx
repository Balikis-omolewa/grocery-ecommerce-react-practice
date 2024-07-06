// Bootstrapcard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bootstrapcard = ({ title, imgUrl, description, price }) => {
    return (
      <div className="card h-100">
          <img src={imgUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-warning">Add To Cart</a>
            </div>
        </div>
    );
};

export default Bootstrapcard;
