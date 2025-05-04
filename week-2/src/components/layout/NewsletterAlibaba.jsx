import React from 'react';

const NewsletterAlibaba = () => {
  return (
    <div className="padding-y-lg newsletter">
      <h4 className="text-center">Subscribe on our newsletter</h4>
      <p className="pb-2 text-center">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div style={{ maxWidth: '380px' }} className="mx-auto">
        <div className="d-flex">
          <div className="me-1 flex-grow-1">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-envelope"></i>
              </span>
              <input
                className="form-control"
                placeholder="Your Email"
                type="email"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAlibaba;
