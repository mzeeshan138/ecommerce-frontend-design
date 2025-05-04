import React from 'react';

const servicesList = [
  { id: 1, img: 'images/posts/1.jpg', title: 'Source from Industry Hubs' },
  { id: 2, img: 'images/posts/2.jpg', title: 'Customize Your Products' },
  { id: 3, img: 'images/posts/3.jpg', title: 'Fast shipping by ocean or air' },
  { id: 4, img: 'images/posts/4.jpg', title: 'Product monitoring service' },
];

const Services = () => (
  <div className="mb-4">
    <header className="section-heading">
      <h3>Our extra services</h3>
    </header>

    <div className="row">
      {servicesList.map((service) => (
        <div key={service.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
          <article className="card mb-3">
            <img
              className="card-img-top"
              src={service.img}
              height="160"
              alt={service.title}
            />
            <div className="card-body">
              <a href="#null" className="stretched-link text-body">
                {service.title}
              </a>
            </div>
          </article>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
