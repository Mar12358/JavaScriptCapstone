import headerLogo from '../header_logo.png';

const renderHeaderFooter = () => {
  const popUp = document.createElement('div');
  popUp.className = 'popup-window invisible';
  const body = document.querySelector('body');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
  section.className = 'container';
  const footer = document.createElement('footer');
  const h1 = document.querySelector('h1');
  nav.innerHTML = `<a><img id="header-logo" src=${headerLogo} alt="header_logo"></a>
                  <ul>
                    <li><a id="items-link" href="">Items</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Ingredients</a></li>
                  </ul>`;

  section.innerHTML = `<div class="food-list">
                       </div>`;

  footer.innerHTML = '<p>Created by Microverse students under MIT license</p>';
  body.appendChild(popUp);
  body.insertBefore(nav, h1);
  body.appendChild(section);
  body.appendChild(footer);
};

export default renderHeaderFooter;