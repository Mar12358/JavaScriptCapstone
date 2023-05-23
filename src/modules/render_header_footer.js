import headerLogo from '../header_logo.png';

const renderHeaderFooter = () => {
  const body = document.querySelector('body');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
  const footer = document.createElement('section');
  const h1 = document.querySelector('h1');
  nav.innerHTML = `<nav>
                    <a><img id="header-logo" src=${headerLogo} alt="header_logo"></a>
                    <ul>
                      <li><a href="">Items(6)</a></li>
                      <li><a href="">Categories</a></li>
                      <li><a href="">Ingredients</a></li>
                    </ul>
                  </nav>`;

  section.innerHTML = `<section class="container">
                        <div class="food-list">
                          food will be render here
                        </div>
                      </section>`;

  footer.innerHTML = `<footer>
                        <p>Created by Microverse students by MIT license</p>
                      </footer>`;
  body.insertBefore(nav, h1);
  body.appendChild(section);
  body.appendChild(footer);
  const btn = document.createElement('button');
  btn.innerHTML = 'Comments';
  btn.className = 'comment-button';
  btn.id = '52772';
  body.appendChild(btn);
};

export default renderHeaderFooter;