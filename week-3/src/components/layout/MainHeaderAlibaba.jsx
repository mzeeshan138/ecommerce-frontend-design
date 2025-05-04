import React from 'react';
import { Link } from 'react-router-dom';

const MainHeaderAlibaba = () => {
  return (
    <div className="header-main bg-white border-bottom py-lg-3 py-2">
      <div className="container">
        <div className="row gx-2 align-items-center">
          <div className="col-xl-2 col-lg col-6 col-sm-6  col-md flex-grow-0">
            <a href="/" className="brand-wrap me-3">
              <img
                className="logo"
                height="40"
                src="/images/logo.jpg"
                alt="logo"
              />
            </a>
          </div>

          <div className="col-xl-7 col-lg-5 col-12 col-sm-12 col-md">
            <form action="#" className="search my-3 my-lg-0 ms-xl-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  style={{ width: '55%' }}
                  placeholder="Search"
                />
                <select className="form-select">
                  <option value="">All type</option>
                  <option value="codex">Special</option>
                  <option value="comments">Only best</option>
                  <option value="content">Latest</option>
                </select>
                <button className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <nav className="d-flex justify-content-end ms-4">
              <div className="col mx-2 text-center">
                <a
                  href="page-user-signup.html"
                  className="text-muted hover:text-dark removeLine"
                >
                  <span className="fs-5 d-inline-block">
                    <i className="fa fa-user"></i>
                  </span>
                  <small className="d-block text-dark text-truncate ">
                    Profile
                  </small>
                </a>
              </div>

              <div className="col mx-2 text-center">
                <a
                  href="#null"
                  className="text-muted hover:text-dark removeLine"
                >
                  <span className="icon-28 fs-5 d-inline-block position-relative">
                    <i className="fa fa-comment-dots"></i>
                    <span className="notify">1</span>
                  </span>
                  <small className="d-block text-dark text-truncate ">
                    Message
                  </small>
                </a>
              </div>

              <div className="col mx-2 text-center">
                <a
                  href="#null"
                  className="text-muted hover:text-dark removeLine"
                >
                  <span className="fs-5 d-inline-block">
                    <i className="fa fa-heart"></i>
                  </span>
                  <small className="d-block text-dark text-truncate ">
                    Orders
                  </small>
                </a>
              </div>

              <div className="col mx-2 text-center">
                <Link
                  to="/product/cart"
                  className="text-muted hover:text-dark removeLine"
                >
                  <span className="fs-5 d-inline-block">
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  <small className="d-block text-dark text-truncate">
                    Cart
                  </small>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderAlibaba;
