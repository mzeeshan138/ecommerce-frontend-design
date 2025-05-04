import React from 'react';

const items = [
  {
    id: 1,
    title: 'Armchairs',
    img: 'images/items/interior/1.jpg',
    price: 25,
  },
  {
    id: 2,
    title: 'Office chairs',
    img: 'images/items/interior/2.jpg',
    price: 19,
  },
  {
    id: 3,
    title: 'Kitchen dishes',
    img: 'images/items/interior/3.jpg',
    price: 7,
  },
  {
    id: 4,
    title: 'Home Plants',
    img: 'images/items/interior/4.jpg',
    price: 10,
  },
  {
    id: 5,
    title: 'For Bedroom',
    img: 'images/items/interior/5.jpg',
    price: 12,
  },
  {
    id: 6,
    title: 'Home Lighting',
    img: 'images/items/interior/6.jpg',
    price: 19,
  },
  {
    id: 7,
    title: 'Best items',
    img: 'images/items/interior/7.jpg',
    price: 19,
  },
  {
    id: 8,
    title: 'Category name',
    img: 'images/items/interior/8.jpg',
    price: 19,
  },
];

const CardCategoryA = () => {
  return (
    <div className="pb-3">
      <div className="card overflow-hidden">
        <div className="row gx-0">
          <aside
            className="col-lg-3 p-4 bg-cover"
            style={{ backgroundImage: "url('images/banners/interior.jpg')" }}
          >
            <header>
              <h3 className="mb-3">
                Home and
                <br />
                outdoor items
              </h3>
              <a href="#n" className="btn btn-light">
                Source now
              </a>
            </header>
          </aside>

          <div className="col-lg-9">
            <ul className="row g-0 bordered-cols m-0">
              {items.map((item) => (
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
};

export default CardCategoryA;
