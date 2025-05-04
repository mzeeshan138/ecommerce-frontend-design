import React from 'react';

const itemsB = [
  { id: 1, title: 'Smartphones', img: 'images/items/tech/3.jpg', price: 140 },
  { id: 2, title: 'Apple iPhone', img: 'images/items/tech/4.jpg', price: 850 },
  { id: 3, title: 'For Gaming', img: 'images/items/tech/5.jpg', price: 19 },
  { id: 4, title: 'Cameras', img: 'images/items/tech/6.jpg', price: 120 },
  { id: 5, title: 'Computers', img: 'images/items/tech/7.jpg', price: 19 },
  { id: 6, title: 'Smartwatches', img: 'images/items/tech/8.jpg', price: 19 },
  { id: 7, title: 'Headphones', img: 'images/items/tech/9.jpg', price: 19 },
  {
    id: 8,
    title: 'Electric kettle',
    img: 'images/items/tech/10.jpg',
    price: 19,
  },
];

const CardCategoryB = () => (
  <div className="pb-3">
    <div className="card overflow-hidden">
      <div className="row gx-0">
        <aside
          className="col-lg-3 p-4 bg-cover"
          style={{ backgroundImage: "url('images/banners/tech.jpg')" }}
        >
          <header>
            <h3 className="mb-3">
              Consumer
              <br />
              electronics and
              <br />
              gadgets
            </h3>
            <a href="#null" className="btn btn-light">
              Source now
            </a>
          </header>
        </aside>

        <div className="col-lg-9">
          <ul className="row g-0 bordered-cols m-0">
            {itemsB.map((item) => (
              <li key={item.id} className="col-6 col-lg-3 col-md-4">
                <div className="card-product p-3 pe-0">
                  <a href="#n" className="title">
                    {item.title}
                  </a>
                  <img
                    className="size-72x72 float-end mb-2"
                    src={item.img}
                    alt={item.title}
                  />
                  <p className="text-muted small">
                    From
                    <br />
                    USD {item.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CardCategoryB;
