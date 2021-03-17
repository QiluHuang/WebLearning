// console.log('running');

import { demo } from './services';

demo()
.then( data => {
    document.querySelector('#root');
    root.innerText = JSON.stringify(data, null, 2);
});