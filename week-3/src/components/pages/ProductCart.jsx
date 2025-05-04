import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    img: 'images/items/cloth/4.jpg',
    alt: 'Jeans Short for Men',
    title: 'Jeans Short for Men Original',
    details: 'Size: medium, Color: blue, Material: Plastic',
    seller: 'Artel Market',
    price: 78.99,
    qty: 2,
  },
  {
    id: 2,
    img: 'images/items/cloth/1.jpg',
    alt: 'Semir T-Shirt',
    title: 'Semir Short Sleeve Men T-Shirt Cotton for Summer Versatile',
    details: 'Size: XXL, Color: Lightblue',
    seller: 'Adidas',
    price: 12.0,
    qty: 1,
  },
  {
    id: 3,
    img: 'images/items/tech/4.jpg',
    alt: 'iPhone 11',
    title: 'Smart Phone Apple iPhone 11, 64 / 128 GB',
    details: '128GB, Color: black',
    seller: 'Apple Inc',
    price: 970.99,
    qty: 1,
  },
];

const initialSaved = [
  {
    id: 4,
    img: 'images/items/tech/2.jpg',
    title: 'Original Product Name',
    price: '$39.99',
  },
  {
    id: 5,
    img: 'images/items/cloth/5.jpg',
    title: 'Jeans Backpack Small',
    price: '$140.00',
  },
  {
    id: 6,
    img: 'images/items/cloth/4.jpg',
    title: 'Mens Jeans Short Blue',
    price: '$132.00',
  },
  {
    id: 7,
    img: 'images/items/tech/10.jpg',
    title: 'Electric Kettle 200 Watt',
    price: '$95.80',
  },
];

const ProductCart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [savedItems, setSavedItems] = useState(initialSaved);

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const saveForLater = (item) => {
    removeItem(item.id);
    setSavedItems((prev) => [item, ...prev]);
  };

  const addToCart = (item) => {
    setSavedItems((items) => items.filter((i) => i.id !== item.id));
    const priceNum =
      typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        : item.price;
    const newItem = { ...item, price: priceNum, qty: 1 };
    setCartItems((prev) => [newItem, ...prev]);
  };

  return (
    <>
      <section className="py-4 pageBackground">
        <div className="container">
          <div className="row">
            <main className="col-lg-9">
              <div className="card mb-4">
                <div className="card-body p-lg-4">
                  <h4 className="card-title mb-4">Shopping cart</h4>

                  {cartItems.length === 0 ? (
                    <p className="text-center">There is no product in cart.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id}>
                        <article className="row mb-4">
                          <div className="col-lg-9">
                            <figure className="d-flex align-items-start">
                              <div className="me-3 flex-shrink-0">
                                <img
                                  src={'/' + item.img}
                                  className="size-100x100 img-thumbnail"
                                  alt={item.alt}
                                />
                              </div>
                              <figcaption className="info">
                                <a className="title" href="#null">
                                  {item.title}
                                </a>
                                <p className="text-muted">
                                  {item.details}
                                  <br />
                                  Seller: {item.seller}
                                </p>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="btn btn-light text-danger btn-sm me-2"
                                >
                                  Remove
                                </button>
                                <button
                                  onClick={() => saveForLater(item)}
                                  className="btn btn-light btn-sm"
                                >
                                  Save for later
                                </button>
                              </figcaption>
                            </figure>
                          </div>
                          <div className="col-lg-3">
                            <div className="text-end mb-2">
                              <var className="h6">${item.price.toFixed(2)}</var>
                            </div>
                            <select
                              value={item.qty}
                              style={{ width: '100px' }}
                              className="float-end form-select"
                              onChange={(e) => {
                                const qty = parseInt(e.target.value, 10);
                                setCartItems((items) =>
                                  items.map((i) =>
                                    i.id === item.id ? { ...i, qty } : i
                                  )
                                );
                              }}
                            >
                              {[1, 2, 3].map((q) => (
                                <option key={q} value={q}>
                                  {`Qty.: ${q}`}
                                </option>
                              ))}
                            </select>
                          </div>
                        </article>
                        <hr />
                      </div>
                    ))
                  )}

                  <div className="d-flex justify-content-between">
                    <button onClick={removeAll} className="btn btn-light">
                      Remove all
                    </button>
                    <a className="btn btn-light" href="/">
                      <i className="fa fa-arrow-left me-2" /> Back to shop
                    </a>
                  </div>
                </div>
              </div>
            </main>

            <aside className="col-lg-3">
              <div className="card p-3 mb-3">
                <form>
                  <label className="form-label">Have coupon?</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add coupon"
                    />
                    <button className="btn btn-light">Apply</button>
                  </div>
                </form>
              </div>

              <div className="card shadow-lg">
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-7 fw-normal text-muted">Subtotal:</dt>
                    <dd className="col-5 text-end">
                      $
                      {cartItems
                        .reduce((sum, i) => sum + i.price * i.qty, 0)
                        .toFixed(2)}
                    </dd>
                  </dl>
                  <hr />
                  <dl className="row">
                    <dt className="col-7 h5 text-muted">Total:</dt>
                    <dd className="col-5 h5 text-end">
                      $
                      {cartItems
                        .reduce((sum, i) => sum + i.price * i.qty, 0)
                        .toFixed(2)}
                    </dd>
                  </dl>
                  <div className="my-3">
                    <a
                      className="btn btn-lg  w-100"
                      href="#null"
                      style={{ backgroundColor: '#00B517' }}
                    >
                      Make Purchase
                    </a>
                  </div>
                  <p className="text-center mt-3">
                    <img
                      src="/images/misc/payments.png"
                      height="24"
                      alt="Payments"
                    />
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="rounded p-5 bg-gray-light">
            {/* Features section unchanged */}
          </article>
        </div>
      </section>

      <section className="padding-bottom pageBackground">
        <div className="container">
          <article className="card p-3 p-lg-4 mb-4">
            <h4 className="card-title mb-4">
              <i className="fa fa-heart text-muted me-2" /> Your saved items
            </h4>

            {savedItems.length === 0 ? (
              <p className="text-center text-muted">
                You haven’t saved any items for later.
              </p>
            ) : (
              <div className="row">
                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="col-xxl-2 col-xl-3 col-sm-4 col-6"
                  >
                    <figure className="card-product-grid product-sm">
                      <a href="#null" className="img-wrap border rounded">
                        <img src={'/' + item.img} alt={item.title} />
                      </a>
                      <figcaption className="mt-2">
                        <a href="#null" className="title">
                          {item.title}
                        </a>
                        <p className="mt-1 mb-2 text-muted">{item.price}</p>
                        <button
                          onClick={() => addToCart(item)}
                          className="btn btn-light"
                        >
                          Add to cart
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductCart;
