import {h, render} from 'preact';
import App from './App.jsx';

render(h(App), document.getElementById('app'));

console.log('hydrated!');