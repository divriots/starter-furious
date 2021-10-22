import 'https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css';
import 'https://gitcdn.link/repo/PrismJS/prism-themes/master/themes/prism-vsc-dark-plus.css';
import './typography.css';
import './misc.css';
import { MdjsLayout } from './src/mdjs-layout';

customElements.define('mdjs-layout', MdjsLayout);
