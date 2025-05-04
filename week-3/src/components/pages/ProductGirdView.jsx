import React from 'react';

const ProductGirdView = () => {
  const breadcrumbs = ['Home', 'Electronics', 'Mini gadgets'];

  const otherCategories = [
    'Computers',
    'Smart watches',
    'Mini Cameras',
    'Accessories',
    'Headphones',
    'Printers',
    'Multimedia',
    'Accessories',
  ];

  const brands = [
    { id: 'apple', name: 'Apple', checked: true },
    { id: 'asus', name: 'Asus', checked: true },
    { id: 'dell', name: 'DELL', checked: true },
    { id: 'lenovo', name: 'Lenovo', checked: true },
    { id: 'xiaomi', name: 'Xiaomi', checked: false },
    { id: 'samsung', name: 'Samsung', checked: false },
  ];

  const colors = ['Red', 'Black', 'Blue', 'Brown', 'Silver'];
  const ratings = [100, 80, 60, 40].map((pct) => ({ pct }));

  // Filter dropdowns data
  const filterOptions1 = [
    'Machinery',
    'Toys and Kids',
    'Sport items',
    'Heavily used',
    'Brand new',
    'Well used',
  ];
  const filterOptions2 = ['Any', 'Brand new', 'Well used', 'Heavily used'];
  const brandOptions = ['Electronics', 'Home goods', 'Equipments'];

  // Product grid data
  const products = [
    {
      img: '1.jpg',
      title: 'Original Apple iPhone 12 Cellphone 512GB',
      price: '$980.00',
      badge: 'Brand new',
    },
    {
      img: '2.jpg',
      title: 'Samsung Galaxy Tab S7 WiFi Tablet Snapdragon',
      price: '$275.00',
      badge: 'Brand new',
    },
    {
      img: '3.jpg',
      title: 'Xiaomi Redmi 12C Global Version 3GB',
      price: '$299.90',
      badge: 'Brand new',
    },
    {
      img: '4.jpg',
      title: 'Apple iPhone 12 Mini 5G LTE Cellphone',
      price: '$75.00',
      badge: 'Brand new',
    },
    {
      img: '5.jpg',
      title: 'Wired Gaming Headset Headphone with Microphone',
      price: '$75.00',
      badge: 'Brand new',
    },
    {
      img: '6.jpg',
      title: 'Canon Camera EOS 2000, Black 10x zoom',
      price: '$75.00',
      badge: 'Brand new',
      badgeClass: 'text-primary-emphasis',
    },
    {
      img: '7.jpg',
      title: 'HP Laptop Computer 15.6" 512GB SSD Win11 Intel',
      price: '$275.00',
      badge: 'Brand new',
    },
    {
      img: '8.jpg',
      title: 'Best of Sample Product Name Goes Here',
      price: '$175.00',
      badge: 'Brand new',
    },
    {
      img: '9.jpg',
      title: 'Stereo Headphone with mic for Office, Quality sound',
      price: '$476.00',
      badge: 'Brand new',
    },
    {
      img: '10.jpg',
      title: 'Philips HD4646/20 Electric kettle Black color',
      price: '$275.00',
      badge: 'Brand new',
    },
    {
      img: '2.jpg',
      title: 'Samsung Galaxy Tab S7 WiFi Tablet Snapdragon',
      price: '$299.50',
      badge: 'Brand new',
    },
    {
      img: '9.jpg',
      title: 'JBL Tune 710BT Wireless Headphone with Microphone',
      price: '$375.00',
      badge: 'Brand new',
    },
  ];

  // Pagination data
  const pages = ['Prev', '1', '2', '3', '4', 'Next'];

  return (
    <>
      <section className="padding-bottom pageBackground">
        <div className="container">
          {/* Breadcrumb */}
          <ol className="breadcrumb my-3">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="breadcrumb-item">
                <a href="#null" className="text-body">
                  {crumb}
                </a>
              </li>
            ))}
          </ol>

          {/* Filter bar */}
          <article className="card card-body mb-4">
            <form>
              <div className="row g-2">
                <div className="col-lg">
                  <div className="dropdown">
                    <button
                      className="form-select text-start"
                      data-bs-toggle="dropdown"
                    >
                      Electronics
                    </button>
                    <ul className="dropdown-menu min-w-100">
                      {filterOptions1.map((opt, i) => (
                        <li key={i}>
                          <a href="#null" className="dropdown-item">
                            {opt}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="dropdown">
                    <button
                      className="form-select text-start"
                      data-bs-toggle="dropdown"
                    >
                      Show all
                    </button>
                    <ul className="dropdown-menu min-w-100">
                      {filterOptions2.map((opt, i) => (
                        <li key={i}>
                          <a href="#null" className="dropdown-item">
                            {opt}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="dropdown">
                    <button
                      className="form-select text-start"
                      data-bs-toggle="dropdown"
                    >
                      All brands
                    </button>
                    <nav className="dropdown-menu min-w-100">
                      {brandOptions.map((opt, i) => (
                        <div key={i} className="dropdown-item">
                          <label className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="form-check-label">{opt}</span>
                          </label>
                        </div>
                      ))}
                      <div className="p-3 pb-2 mt-2 border-top">
                        <a href="#null" className="btn btn-primary me-2">
                          Apply
                        </a>
                        <a href="#null" className="btn btn-light">
                          Clear all
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col-lg">
                  <select defaultValue="Any" className="form-select">
                    {filterOptions2.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="col-lg">
                  <select defaultValue="Price range" className="form-select">
                    <option>Price range</option>
                    <option>$10,000 - $20,000</option>
                    <option>$20,000 - $30,000</option>
                    <option>$30,000 and more</option>
                  </select>
                </div>
                <div className="col-auto">
                  <a href="#null" className="btn d-block btn-light shadow-sm">
                    <i className="me-2 fa fa-filter" /> All filters
                  </a>
                  <div class="btn-group">
                    <a
                      href="/product/listview"
                      className="btn btn-light mx-2 active"
                      data-bs-toggle="tooltip"
                      title="List view"
                    >
                      <i class="fa fa-bars"></i>
                    </a>
                    <a
                      href="/product/gridview"
                      className="btn btn-light "
                      data-bs-toggle="tooltip"
                      title="Grid view"
                    >
                      <i class="fa fa-th"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </article>
          <div className="row ">
            <div className="col-4 col-md-4 ">
              {/* start */}
              <aside className="col-10 ">
                <article className="p-3 p-lg-4 border-bottom">
                  <strong>Category</strong>
                  <ul className="list-menu pt-3 mb-0">
                    {otherCategories.map((cat, idx) => (
                      <li key={idx}>
                        <a href="#null" className="removeLine">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="p-3 p-lg-4 border-bottom ">
                  <strong>Brands</strong>
                  <div className="pt-3">
                    {brands.map((b) => (
                      <label key={b.id} className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          defaultChecked={b.checked}
                        />
                        <span className="form-check-label">{b.name}</span>
                      </label>
                    ))}
                  </div>
                </article>
                <article className="p-3 p-lg-4 border-bottom ">
                  <strong>Prices</strong>
                  <input
                    type="range"
                    className="form-range pt-3"
                    min="0"
                    max="100"
                  />
                </article>
                <article className="p-3 p-lg-4 border-bottom ">
                  <strong>Colors</strong>
                  <div className="pt-3">
                    {colors.map((col) => (
                      <label key={col} className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light bg-white">{col}</span>
                      </label>
                    ))}
                  </div>
                </article>
                <article className="p-3 p-lg-4 ">
                  <strong>Rating</strong>
                  <div className="pt-3">
                    {ratings.map(({ pct }, idx) => (
                      <label key={idx} className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" />
                        <span className="form-check-label">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: `${pct}%` }}
                            >
                              <img src="/images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              <img
                                src="/images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>
                    ))}
                  </div>
                </article>
              </aside>
              {/* end */}
            </div>
            <div className="col-8 col-md-8">
              <header className="mb-4 d-flex justify-content-between align-items-end">
                <h4>Found {products.length} products</h4>
                <a href="#null">Clear filter</a>
              </header>

              {/* Product grid */}
              <div className="row">
                {products.map(
                  ({ img, title, price, badge, badgeClass }, idx) => (
                    <div
                      key={idx}
                      className="col-xxl-3 col-xl-4 col-sm-6 col-12"
                    >
                      <figure className="card card-product-grid">
                        <a href="/product/detail" className="img-wrap">
                          <img src={`/images/items/tech/${img}`} alt={title} />
                        </a>
                        <figcaption className="p-3 border-top">
                          <a
                            href="/product/detail"
                            className="float-end btn btn-light btn-icon"
                          >
                            <i className="fa fa-heart" />
                          </a>
                          <a href="/product/detail" className="title mb-1">
                            {title}
                          </a>
                          <div className="price text-lg mb-2 fw-bold">
                            {price}
                          </div>
                          <span className={badgeClass || 'text-muted'}>
                            {badge}
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Header */}

          {/* Pagination */}
          <footer className="card p-3 mb-4">
            <nav className="mx-auto">
              <ul className="pagination mb-0">
                {pages.map((p, i) => (
                  <li
                    key={i}
                    className={`page-item${p === '2' ? ' active' : ''}`}
                  >
                    {p === '2' ? (
                      <span className="page-link">{p}</span>
                    ) : (
                      <a href="#null" className="page-link">
                        {p}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
};

export default ProductGirdView;
