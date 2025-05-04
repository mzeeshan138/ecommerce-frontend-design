import React, { useState } from 'react';

// Data arrays
const breadcrumbs = [
  { id: 'home', label: 'Home', link: '#null' },
  { id: 'technology', label: 'Technology', link: '#null' },
  { id: 'gadgets', label: 'Gadgets' },
];

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
const viewModes = ['Recommended', 'Best rated', 'Latest'];
const sortOptions = ['Best match', 'Recommended', 'High rated', 'Randomly'];

// Product list data
const listProducts = [
  {
    id: 1,
    img: '1.jpg',
    title: 'Original Apple iPhone 12 Mini 5G LTE Cellphone',
    ratingPct: 90,
    rating: 4.5,
    orders: 61,
    shipping: 'Free shipping',
    price: '$899.50',
    description: 'Description about the product goes here...',
  },
  {
    id: 2,
    img: '2.jpg',
    title: 'Samsung Galaxy Tab S7 FE WiFi Tablet Snapdragon',
    ratingPct: 90,
    rating: 4.5,
    orders: 154,
    shipping: 'Free shipping',
    price: '$256.00',
    oldPrice: '$830',
    description: 'Short description about the product goes here...',
  },
  {
    id: 3,
    img: '3.jpg',
    title: 'Xiaomi Redmi 12C Global Version 3GB',
    ratingPct: 90,
    rating: 4.5,
    orders: 154,
    shipping: 'Free shipping',
    price: '$249.99',
    oldPrice: '$330',
    description: 'Some info about the product goes here...',
  },
  {
    id: 4,
    img: '4.jpg',
    title: 'Apple iPhone 13 Pro Max Smartphone 256GB Black color',
    ratingPct: 50,
    rating: 3.5,
    orders: 9,
    shipping: 'Paid shipping',
    price: '$899.50',
    description: 'Short description about the product goes here...',
  },
  {
    id: 5,
    img: '7.jpg',
    title: 'HP Laptop Computer 15.6" 512GB SSD Win11 Intel',
    ratingPct: 90,
    rating: 4.5,
    orders: 154,
    shipping: 'Free shipping',
    price: '$299.50',
    description: 'We are offering the lowest price ever on this new...',
  },
  {
    id: 6,
    img: '8.jpg',
    title: 'Heading text about the product name',
    ratingPct: 20,
    rating: 2.0,
    orders: 3,
    shipping: 'Free shipping',
    price: '$499.50',
    description: 'Short description about the product goes here...',
  },
];

const popularCategories = [
  {
    id: 'notebooks',
    title: 'Notebooks',
    img: 'nav-1.jpg',
    items: ['Asus laptops', 'Macbooks', 'Gaming laptops', 'Lenovo'],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    img: 'nav-2.jpg',
    items: ['Smartwatches', 'Keyboards', 'Cables HDML, USB', 'Others'],
  },
  {
    id: 'office-tech',
    title: 'Office tech',
    img: 'nav-8.jpg',
    items: ['Printers', 'Lighting', 'TV boxes', 'Lorem ipsum'],
  },
];

const ProductListView = () => {
  const [selectedView, setSelectedView] = useState(viewModes[0]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="container">
          <ol className="breadcrumb mt-2">
            {breadcrumbs.map((crumb) => (
              <li key={crumb.id} className="breadcrumb-item">
                {crumb.link ? (
                  <a href={crumb.link} className="text-muted">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-muted">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Main Section */}
      <section className="padding-y pageBackground">
        <div className="container">
          <div className="row">
            {/* Sidebar filters */}
            <aside className="col-lg-3 ">
              <article className="p-3 p-lg-4 border-bottom ">
                <strong>Category</strong>
                <ul className="list-menu pt-3 mb-0 ">
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
                            <img src="/images/misc/starts-disable.svg" alt="" />
                          </li>
                        </ul>
                      </span>
                    </label>
                  ))}
                </div>
              </article>
            </aside>

            {/* Product List and Controls */}
            <main className="col-lg-9">
              <header className="d-md-flex align-items-center border-bottom mb-3 pb-3">
                <div className="btn-group mb-3 mb-md-0">
                  {viewModes.map((vm) => (
                    <button
                      key={vm}
                      className={`btn btn-light${
                        selectedView === vm ? ' active' : ''
                      }`}
                      onClick={() => setSelectedView(vm)}
                    >
                      {vm}
                    </button>
                  ))}
                </div>
                <div className="ms-auto">
                  <select
                    className="form-select d-inline-block w-auto"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
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
              </header>

              {/* Products */}
              {listProducts.map((prod) => (
                <article
                  key={prod.id}
                  className="card-product-list border-bottom p-3 mb-3 bg-white  "
                >
                  <div className="row">
                    <aside className="col-xl-3 col-md-4">
                      <a
                        href="/product/detail"
                        className="img-wrap bg-light rounded"
                      >
                        <img
                          className="mix-blend-multiply"
                          src={`/images/items/tech/${prod.img}`}
                          alt={prod.title}
                        />
                      </a>
                    </aside>
                    <div className="col-xl-9 col-md-8">
                      <button className="btn btn-outline-primary btn-icon float-end">
                        <i className="fa fa-heart"></i>
                      </button>
                      <a
                        href="/product/detail"
                        className="text-dark removeLine"
                      >
                        {prod.title}
                      </a>
                      <div className="rating-wrap mb-2">
                        <ul className="rating-stars">
                          <li
                            className="stars-active"
                            style={{ width: `${prod.ratingPct}%` }}
                          >
                            <img src="/images/misc/stars-active.svg" alt="" />
                          </li>
                          <li>
                            <img src="/images/misc/starts-disable.svg" alt="" />
                          </li>
                        </ul>
                        <span className="label-rating text-warning">
                          {prod.rating}
                        </span>
                        <i className="dot"></i>
                        <span className="label-rating text-muted">
                          {prod.orders} orders
                        </span>
                        <i className="dot"></i>
                        <span className="label-rating text-success">
                          {prod.shipping}
                        </span>
                      </div>
                      <div className="mb-3 h5">
                        <span className="price text-danger">{prod.price}</span>
                        {prod.oldPrice && (
                          <del className="price-old"> {prod.oldPrice}</del>
                        )}
                      </div>
                      <p className="text-muted">{prod.description}</p>
                    </div>
                  </div>
                </article>
              ))}
              <footer className="d-flex mt-4">
                <div>
                  <a href="/" className="btn btn-light">
                    &laquo; Go back
                  </a>
                </div>
                <nav className="ms-3">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#null">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#null">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#null">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </main>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="padding-y bg-light">
        <div className="container">
          <header className="section-heading">
            <h3>Popular categories</h3>
          </header>
          <div className="row">
            {popularCategories.map((cat) => (
              <div key={cat.id} className="col-lg-4">
                <nav className="bg-white p-4 rounded shadow-sm mb-4">
                  <img
                    src={`/images/icons/nav/${cat.img}`}
                    alt={cat.title}
                    className="size-100x100 float-end mb-2"
                  />
                  <h6 className="mb-2">
                    <a href="#null" className="text-dark removeLine">
                      {cat.title}
                    </a>
                  </h6>
                  <ul className="list-menu mb-0">
                    {cat.items.map((it, i) => (
                      <li key={i}>
                        <a href="#null" className="removeLine">
                          {it}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListView;
