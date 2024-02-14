import React from 'react';
// Importez vos feuilles de style CSS ici
// Importez vos images ici, assurez-vous que le chemin est correct
import logo from './images/logo/logo.png';
import searchicon from './images/icons/search-icon.svg';



function Header() {
  return (
    
    <header>
    <div id="sticky-header" class="tg-header__area">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler">
              <i class="flaticon-menu-1"></i>
            </div>
            <div class="tgmenu__wrap">
              <nav class="tgmenu__nav">
                <div class="logo">
                  <a href="index-2.html"><img src={logo} alt="Logo"/></a>
                </div>
                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                  <ul class="navigation">
                    <li class="menu-item-has-children">
                      <a href="#" class="active-menu">
                        Home
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a class="active-menu" href="index-2.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-4.html">
                            Home Three
                          </a>
                        </li>
                        <li>
                          <a href="index-5.html">
                            Home Four
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="services.html">
                        Services
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="services.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Pages </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="about.html">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="team.html"> Team </a>
                        </li>
                        <li>
                          <a href="team-details.html">
                            Team Details
                          </a>
                        </li>
                        <li>
                          <a href="price.html">
                            Price
                          </a>
                        </li>
                        <li>
                          <a href="404.html">
                            404 Error
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#"> Projects </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="case-study.html">
                            Case Study
                          </a>
                        </li>
                        <li>
                          <a href="case-masonary.html">
                            Case Masonary
                          </a>
                        </li>
                        <li>
                          <a href="case-metro.html">
                            Case Metro
                          </a>
                        </li>
                        <li>
                          <a href="project-details.html">
                            Case Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Blog </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="blog-sidebar.html">
                            Blog Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-modern.html">
                            Blog Modern
                          </a>
                        </li>
                        <li>
                          <a href="blog-modern.html">
                            Blog Modern
                          </a>
                        </li>
                        <li>
                          <a href="blog-list.html">
                            Blog List
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tgmenu__action d-none d-md-block">
                  <ul class="list-wrap">
                    <li class="header-search">
                      <a href="#" class="search search--button">
                        <img src={searchicon} alt="Search"/>
                      </a>
                    </li>
                    <li class="header-btn">
                      <a href="about.html" class="btn">Let's Talk</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <form action="#" class="search-block">
              <div class="search-block__container">
                <span id="close-search" class="search-block__close">
                  <i class="fa-solid fa-xmark"></i>
                </span>
                <div class="search-block__input">
                  <input class="search-block__field-input" type="text" placeholder="Enter Your Keywords..."/>
                </div>
              </div>
            </form>
            <div class="tgmobile__menu">
              <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="flaticon-close-1"></i></div>
                <div class="nav-logo">
                  <a href="index-2.html"><img src={logo} alt="Logo"/></a>
                </div>
                <div class="tgmobile__search">
                  <form action="#">
                    <input type="text" placeholder="Search here..."/>
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div class="tgmobile__menu-outer">
                </div>
                <div class="social-links">
                  <ul class="list-wrap">
                    <li>
                      <a href="project-details.html"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="project-details.html"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="project-details.html"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="project-details.html"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href="project-details.html"><i class="fab fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="tgmobile__menu-backdrop"></div>
          </div>
        </div>
      </div>
    </div>
    </header>

  );
}

export default Header;
