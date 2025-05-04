import React from 'react';

const HeaderAlibaba = () => {
  return (
    <nav class="navbar navbar-light bg-white navbar-expand-lg border-bottom">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbar_main">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#n"
                role="button"
                data-bs-toggle="dropdown"
              >
                All Categories
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/product/listview">
                    Automobiles
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product/listview">
                    Clothes and wear
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product/gridview">
                    More ..
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#n">
                Hot offers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#n">
                Gift boxes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#n">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#n">
                Menu item
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product/listview">
                List View
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product/gridview">
                Grid View
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#n"
                data-bs-toggle="dropdown"
              >
                USD
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#n">
                  RUBL
                </a>
                <a class="dropdown-item" href="#n">
                  UZS
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#n"
                data-bs-toggle="dropdown"
              >
                English
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#n">
                  Russian
                </a>
                <a class="dropdown-item" href="#n">
                  Uzbek
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAlibaba;
