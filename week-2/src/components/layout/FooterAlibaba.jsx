import React from 'react';

const FooterAlibaba = () => {
  return (
    <footer className="section-footer footer-dark">
      <div className="footer-main padding-y footerPadding">
        <div className="row">
          <aside className="col-12 col-sm-12 col-lg-3">
            <article className="me-lg-5">
              <img
                src="/images/logo-white.jpg"
                alt="logo"
                height="44"
                className="logo-footer"
              />
              <p className="mt-3 " style={{ color: '#505050' }}>
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <nav className="fontIcon mb-4 mb-lg-0">
                <a
                  className=" btn-icon btn-primary"
                  title="Facebook"
                  target="_blank"
                  href="#null"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className=" btn-icon btn-primary"
                  title="Instagram"
                  target="_blank"
                  href="#null"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  className="btn-icon btn-primary"
                  title="Youtube"
                  target="_blank"
                  href="#null"
                >
                  {/* or use "fa fa-youtube" if you want the logo instead of play button */}
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a
                  className=" btn-icon btn-primary"
                  title="Twitter"
                  target="_blank"
                  href="#null"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </nav>
            </article>
          </aside>
          <aside className="col-6 col-sm-3 col-lg-2">
            <h6 className="title">About us</h6>
            <ul className="list-menu mb-4">
              <li>
                <a href="#null">About us</a>
              </li>
              <li>
                <a href="#null">Find store</a>
              </li>
              <li>
                <a href="#null">Categories</a>
              </li>
              <li>
                <a href="#null">Blogs</a>
              </li>
            </ul>
          </aside>
          <aside className="col-6 col-sm-3 col-lg-2">
            <h6 className="title">Partnership</h6>
            <ul className="list-menu mb-4">
              <li>
                <a href="#null">Help center</a>
              </li>
              <li>
                <a href="#null">Money refund</a>
              </li>
              <li>
                <a href="#null">Shipping info</a>
              </li>
              <li>
                <a href="#null">Refunds</a>
              </li>
            </ul>
          </aside>
          <aside className="col-6 col-sm-3 col-lg-2">
            <h6 className="title">Information</h6>
            <ul className="list-menu mb-4">
              <li>
                <a href="#null">Help center</a>
              </li>
              <li>
                <a href="#null">Documents</a>
              </li>
              <li>
                <a href="#null">Account restore</a>
              </li>
              <li>
                <a href="#null">My Orders</a>
              </li>
            </ul>
          </aside>
          <aside className="col-6 col-sm-3 col-lg-2">
            <h6 className="title">For users</h6>
            <ul className="list-menu mb-4">
              <li>
                <a href="#null">Login</a>
              </li>
              <li>
                <a href="#null">Register</a>
              </li>
              <li>
                <a href="#null">Setting</a>
              </li>
              <li>
                <a href="#null">My Orders</a>
              </li>
            </ul>
          </aside>
          <aside className="col-6 col-sm-4 col-lg-1">
            <h6 className="title">Get App</h6>
            <a href="#null" className="mb-2 d-inline-block">
              <img
                src="/images/misc/btn-appstore.png"
                height="40"
                alt="appstore button"
              />
            </a>
            <a href="#null" className="mb-2 d-inline-block">
              <img src="/images/misc/btn-market.png" height="40" alt="button" />
            </a>
          </aside>
        </div>
      </div>

      <hr className="my-0" />
      <div className="footer-bottom d-flex justify-content-between px-5">
        <div>© 2023 Ecommerce. </div>
        <nav className="dropup">
          <button
            className="dropdown-toggle btn  align-items-center"
            type="button"
            data-bs-toggle="dropdown"
          >
            <img
              src="/images/flags/flag-usa.png"
              className="me-2"
              height="20"
              alt=""
            />
            <span>English</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#null">
                Russian
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#null">
                Arabic
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#null">
                Spanish
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterAlibaba;
