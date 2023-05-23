import './style.css';
import renderHeaderFooter from './modules/render_header_footer.js';
import commentsButtonListener from './modules/popup.js';
import onLoad from './modules/home.js';

renderHeaderFooter();
onLoad();
commentsButtonListener();
