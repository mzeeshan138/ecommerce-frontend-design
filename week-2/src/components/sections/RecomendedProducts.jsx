import React from 'react';

const recommendedItems = [
  {
    id: 1,
    img: 'images/items/cloth/1.jpg',
    price: 24.0,
    title: 'T-shirts with multiple colors, for men',
  },
  {
    id: 2,
    img: 'images/items/cloth/2.jpg',
    price: 29.9,
    title: 'T-shirts with blue color, unisex model',
  },
  {
    id: 3,
    img: 'images/items/cloth/3.jpg',
    price: 790.5,
    title: 'Casual Winter Jacket, Brown Color',
  },
  {
    id: 4,
    img: 'images/items/cloth/4.jpg',
    price: 12.0,
    title: 'Jeans shorts for men darkblue color',
  },
  {
    id: 5,
    img: 'images/items/cloth/5.jpg',
    price: 192.5,
    title: 'Lightweight Jeans bag for travel, Unisex model',
  },
  {
    id: 6,
    img: 'images/items/cloth/6.jpg',
    price: 790.5,
    title: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 7,
    img: 'images/items/interior/3.jpg',
    price: 790.5,
    title: 'Ceramic Jug for Kitchen, Medium size',
  },
  {
    id: 8,
    img: 'images/items/interior/2.jpg',
    price: 790.5,
    title: 'Armchair for Home and Office, Yellow color',
  },
  {
    id: 9,
    img: 'images/items/interior/5.jpg',
    price: 790.5,
    title: 'Airbed Blue Soft Material With Pump',
  },
  {
    id: 10,
    img: 'images/items/interior/7.jpg',
    price: 19.5,
    title: 'Modern Product Name Goes Here',
  },
];

const RecomendedProducts = () => (
  <div className="pb-3 ">
    <header className="section-heading">
      <h3>New products</h3>
    </header>

    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
      {recommendedItems.map((item) => (
        <div key={item.id} className="col">
          <figure className="card card-product-grid">
            <a href="#null" className="img-wrap">
              <img src={'/' + item.img} alt={item.title} />
            </a>
            <figcaption className="p-3">
              <div className="price-wrap">
                <span className="price">${item.price.toFixed(2)}</span>
              </div>
              <a href="#null" className="title">
                {item.title}
              </a>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  </div>
);

export default RecomendedProducts;
