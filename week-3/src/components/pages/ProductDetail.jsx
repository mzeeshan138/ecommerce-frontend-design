import React, { useState } from 'react';

const ProductDetail = () => {
  // Breadcrumb items
  const breadcrumbs = ['Home', 'Category name', 'Interiors', 'Equipments'];

  // Gallery thumbnails
  const thumbs = [
    'thumb1.jpg',
    'thumb2.jpg',
    'thumb3.jpg',
    'thumb1.jpg',
    'thumb4.jpg',
  ];

  // Tab navigation
  const tabs = [
    { id: 'details', label: 'Description' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'seller', label: 'About seller' },
  ];

  // Related products
  const related = [
    {
      img: '6.jpg',
      title: 'Original Product Name',
      price: '$32.00-$40.00',
      srcPath: 'cloth',
    },
    {
      img: '5.jpg',
      title: 'Jeans Backpack Small',
      price: '$32.00-$40.00',
      srcPath: 'cloth',
    },
    {
      img: '4.jpg',
      title: 'Mens Jeans Short Blue',
      price: '$32.00-$40.00',
      srcPath: 'cloth',
    },
    {
      img: '10.jpg',
      title: 'Electric Kettle 200 Watt',
      price: '$32.00-$40.00',
      srcPath: 'tech',
    },
    {
      img: '3.jpg',
      title: 'Headset for Office',
      price: '$32.00-$40.00',
      srcPath: 'interior',
    },
    {
      img: '1.jpg',
      title: 'Soft Chair for Office',
      price: '$32.00-$40.00',
      srcPath: 'interior',
    },
  ];

  const [activeTab, setActiveTab] = useState('details');

  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-4 pageBackground">
        <div className="container">
          <ol className="breadcrumb mb-0">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="breadcrumb-item">
                {idx < breadcrumbs.length - 1 ? (
                  <a href="/" className="text-muted">
                    {crumb}
                  </a>
                ) : (
                  <span className="text-muted" aria-current="page">
                    {crumb}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Item Info */}
      <section>
        <div className="container pageBackground">
          <article className="card p-3 mb-4">
            <div className="row">
              <aside className="col-lg-4">
                <figure className="gallery-wrap">
                  <a href="#null" className="img-main-wrap mb-3 h-auto">
                    <img
                      src="/images/items/detail-cloth/big.jpg"
                      className="img-thumbnail w-100 img-contain"
                      alt="product"
                      style={{ maxHeight: '360px' }}
                    />
                  </a>
                  <div className="thumbs-wrap text-center overflow-auto text-nowrap">
                    {thumbs.map((img, i) => (
                      <a key={i} href="#null" className="item-thumb">
                        <img
                          className="img-thumbnail size-60x60"
                          src={`/images/items/detail-cloth/${img}`}
                          alt={`thumb-${i}`}
                          style={{ height: '60px' }}
                        />
                      </a>
                    ))}
                  </div>
                </figure>
              </aside>

              <main className="col-lg-5">
                <article>
                  <p className="mb-2 text-success">
                    <i className="fa fa-check" /> in Stock
                  </p>
                  <h4 className="mb-2">
                    Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                  </h4>

                  <div className="rating-wrap mb-3">
                    <ul className="rating-stars">
                      <li className="stars-active" style={{ width: '80%' }}>
                        <img src="../images/misc/stars-active.svg" alt="" />
                      </li>
                      <li>
                        <img src="../images/misc/starts-disable.svg" alt="" />
                      </li>
                    </ul>
                    <b className="label-rating text-warning">4.5</b>
                    <i className="dot" />
                    <span className="label-rating text-muted">
                      <i className="fa fa-comment" /> 34 reviews
                    </span>
                    <i className="dot" />
                    <span className="label-rating text-muted">
                      <i className="fa fa-shopping-basket" /> 154 sold
                    </span>
                  </div>

                  <div className="d-flex mb-3 p-3 bg-warning-subtle col-lg-9">
                    <div className="col">
                      <var className="text-danger h6">$98.00</var>
                      <br />
                      <small>50-100 pcs</small>
                    </div>
                    <div className="col">
                      <var className="h6">$90.00</var>
                      <br />
                      <small>100-700 pcs</small>
                    </div>
                    <div className="col">
                      <var className="h6">$82.00</var>
                      <br />
                      <small>700+ pcs</small>
                    </div>
                  </div>

                  <dl className="row">
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Price:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">Negotiable</dd>
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Type:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">Classic style</dd>
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Material:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">Plastic</dd>
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Sizes:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">Small, Medium, Large</dd>
                  </dl>
                  <hr />
                  <dl className="row">
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Customization:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">
                      Customized logo and design packages
                    </dd>
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Protection:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">Refund Policy</dd>
                    <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                      Warranty:
                    </dt>
                    <dd className="col-xxl-9 col-lg-8">
                      2 years full warranty
                    </dd>
                  </dl>
                </article>
              </main>

              <aside className="col-lg-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <figure className="d-flex">
                      <div className="me-2">
                        <img
                          className="size-48x48 rounded"
                          src="/images/avatars/company.jpg"
                          alt="logo"
                        />
                      </div>
                      <figcaption>
                        Supplier:
                        <br /> Guanjoi Trading LLC
                      </figcaption>
                    </figure>
                    <hr />
                    <ul className="list-icon">
                      <li>
                        <img
                          className="icon me-2 align-bottom"
                          src="/images/flags/flag-tr.png"
                          alt=""
                        />
                        Istanbul, Turkiye
                      </li>
                      <li>
                        <i className="icon me-2 text-muted fa fa-check-circle" />
                        Verified Seller
                      </li>
                      <li>
                        <i className="icon me-2 text-muted fa fa-globe" />
                        Worldwide shipping
                      </li>
                    </ul>
                    <div>
                      <a href="#null" className="btn btn-primary w-100 mb-2">
                        Send inquiry
                      </a>
                      <a href="#null" className="btn btn-light w-100 mb-2">
                        Seller's profile
                      </a>
                      <a href="#null" className="btn btn-light w-100">
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>

      {/* Detail Bottom */}
      <section>
        <div className="container pageBackground">
          <div className="row">
            <main className="col-xl-9 col-lg-8">
              <div className="card mb-4">
                <header className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    {tabs.map((tab) => (
                      <li key={tab.id} className="nav-item">
                        <button
                          className={`nav-link${
                            activeTab === tab.id ? ' active' : ''
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                          type="button"
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </header>
                <div className="card-body tab-content">
                  {activeTab === 'details' && (
                    <article className="tab-pane active">
                      <p>With supporting text below ...</p>
                      <ul className="list-check cols-two">
                        <li>Some great feature name here</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Duis aute irure dolor in reprehenderit</li>
                        <li>Optical heart sensor</li>
                        <li>Easy fast and very good</li>
                        <li>Modern style and design</li>
                      </ul>
                      <table className="table border">
                        <tbody>
                          <tr>
                            <td
                              className="bg-light text-muted"
                              style={{ width: '200px' }}
                            >
                              Model
                            </td>
                            <td>Latest model A-123121</td>
                          </tr>
                          <tr>
                            <td className="bg-light text-muted">Style</td>
                            <td>Classic style</td>
                          </tr>
                          <tr>
                            <td className="bg-light text-muted">Certificate</td>
                            <td>ISO-8791287391231</td>
                          </tr>
                          <tr>
                            <td className="bg-light text-muted">Size</td>
                            <td>34mm x 450mm x 19mm</td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                  )}

                  {activeTab === 'reviews' && (
                    <article
                      className="tab-pane show active"
                      id="reviews"
                      role="tabpanel"
                    >
                      <h6>Reviews</h6>
                      <p>
                        “Amazing product—loved the build quality and the
                        customer support was top-notch!”
                      </p>
                      <p>
                        “Good value for money. Battery life could be better, but
                        sound is excellent.”
                      </p>
                      <p>
                        “It does exactly what it promises. Highly recommend for
                        daily use.”
                      </p>
                    </article>
                  )}
                  {activeTab === 'shipping' && (
                    <article
                      className="tab-pane show active"
                      id="shipping"
                      role="tabpanel"
                    >
                      <h6>Shipping Information</h6>
                      <ul>
                        <li>Free standard shipping on orders over $50.</li>
                        <li>Estimated delivery: 3-7 business days.</li>
                        <li>Express shipping options at checkout.</li>
                        <li>International shipping available.</li>
                      </ul>
                    </article>
                  )}

                  {activeTab === 'seller' && (
                    <article
                      className="tab-pane show active"
                      id="seller"
                      role="tabpanel"
                    >
                      <h6>About Seller</h6>
                      <p>
                        <strong>Guanjoi Trading LLC</strong> has been a verified
                        partner since 2015, specializing in high-quality
                        apparel. We pride ourselves on fast response times and a
                        2-year warranty.
                      </p>
                      <ul>
                        <li>Location: Istanbul, Turkiye</li>
                        <li>Verified Seller</li>
                        <li>Worldwide shipping</li>
                      </ul>
                    </article>
                  )}
                </div>
              </div>
            </main>
            <aside className="col-xl-3 col-lg-4">
              <div className="card p-3">
                <h6 className="card-title">You may like</h6>
                {[
                  {
                    img: '6.jpg',
                    title: "Men's Wallet Leather, Small, Blue",
                    price: '$7.00 - $99.50',
                  },
                  {
                    img: '2.jpg',
                    title: 'Basketball Crew Socks Long',
                    price: '$7.00 - $99.50',
                  },
                  {
                    img: '3.jpg',
                    title: 'Winter Jacket for Men Brown',
                    price: '$7.00 - $99.50',
                  },
                  {
                    img: '4.jpg',
                    title: 'Super Product Name',
                    price: '$7.00 - $99.50',
                  },
                ].map((item, idx) => (
                  <figure key={idx} className="d-flex mb-4">
                    <a href="#null" className="me-2 flex-shrink-0">
                      <img
                        className="size-72x72 img-thumbnail"
                        width="72"
                        height="72"
                        src={`/images/items/cloth/${item.img}`}
                        alt={item.title}
                      />
                    </a>
                    <figcaption>
                      <a href="#null" className="text-dark">
                        {item.title}
                      </a>
                      <p className="text-muted mb-0">{item.price}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section>
        <div className="container pageBackground">
          <article className="card p-3 mb-4">
            <h5 className="card-title">Related products</h5>
            <div className="row">
              {related.map((item, idx) => (
                <div key={idx} className="col-xxl-2 col-xl-3 col-sm-4 col-6">
                  <figure className="card-product-grid product-sm">
                    <a href="#null" className="img-wrap border rounded">
                      <img
                        src={`/images/items/${item.srcPath}/${item.img}`}
                        alt={item.title}
                      />
                    </a>
                    <figcaption className="mt-2">
                      <a href="#null" className="title">
                        {item.title}
                      </a>
                      <p className="mt-1 text-muted">{item.price}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Banner */}
      <section className="padding-bottom pageBackground">
        <div className="container">
          <article
            className="card border-0 bg-primary bg-cover"
            style={{ backgroundImage: 'url(/images/banners/bg-warehouse.jpg)' }}
          >
            <div className="card-body p-lg-4">
              <a href="#null" className="mt-2 me-3 float-end btn btn-warning">
                Learn more
              </a>
              <h4 className="text-white">
                Super discount on more than 100 USD
              </h4>
              <p className="text-white lead mb-0">You ever write dummy info</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
