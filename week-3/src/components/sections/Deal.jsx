import React, { useState, useEffect } from 'react';

const dealItems = [
  {
    id: 1,
    img: 'images/items/tech/10.jpg',
    title: 'Electric kettle',
    discount: 20,
  },
  { id: 2, img: 'images/items/tech/9.jpg', title: 'Headsets', discount: 45 },
  {
    id: 3,
    img: 'images/items/tech/8.jpg',
    title: 'Smart watches',
    discount: 15,
  },
  { id: 4, img: 'images/items/tech/7.jpg', title: 'HP Laptop', discount: 20 },
  {
    id: 5,
    img: 'images/items/tech/6.jpg',
    title: 'Canon camera',
    discount: 20,
  },
];

// calculate time left until target date
const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Deal = () => {
  const initialDurationMs =
    4 * 24 * 60 * 60 * 1000 + // 4 days
    12 * 60 * 60 * 1000 + // 12 hours
    58 * 60 * 1000 + // 58 minutes
    2 * 1000; // 2 seconds

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTimestamp = new Date().getTime() + initialDurationMs;
    // update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp));
    }, 1000);
    // initialize immediately
    setTimeLeft(calculateTimeLeft(targetTimestamp));

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-3">
      <div className="card overflow-hidden">
        <div className="row gx-0">
          <aside className="col-lg-3 p-4">
            <header>
              <h3>Deals and offers</h3>
              <p>Hygiene equipments</p>
            </header>
            <div className="timer">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit}>
                  <span className="num">
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </span>
                  <small>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
                </div>
              ))}
            </div>
          </aside>

          <div className="col-lg-9 border-start">
            <div className="row gx-0 bordered-cols">
              {dealItems.map((item) => (
                <div key={item.id} className="col-md col-sm-4 col-6">
                  <figure className="card-product product-sm p-2">
                    <a href="#n" className="img-wrap p-2">
                      <img src={item.img} alt={item.title} />
                    </a>
                    <div className="p-3 text-center">
                      <a href="#n" className="title">
                        {item.title}
                      </a>
                      <span className="badge bg-danger rounded-pill">
                        -{item.discount}%
                      </span>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
