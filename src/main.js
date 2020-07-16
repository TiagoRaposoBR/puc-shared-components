import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import Cabecalho from './components/Cabecalho';
import FeedPost from './components/FeedPost';

const CustomElementCabecalho = wrap(Vue, Cabecalho);
const CustomElementPost = wrap(Vue, FeedPost);

window.customElements.define('cabecalho', CustomElementCabecalho);
window.customElements.define('feed-post', CustomElementPost);
