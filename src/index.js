// require('./alert.js'); Webpack build first test. Passed... OK!

import greetings from './robot.js'

const CONTAINER = document.querySelector('.container');

CONTAINER.insertAdjacentHTML('beforeend' , greetings("Affirmative", "Francesco!"));

// creating a stylesheet dependency of a JavaScript file. AMAZING!

import styles from './app.css'

const ELEMENT = `
  <div class="${styles.element}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`

let webpackTest = `
  <div class="${styles.webpackTest}">
    <p>This is another test using webpack to compile and add the styles</p>
    <p>the div class name should be altered by webpack extract text plugin</p>
  </div>
`

CONTAINER.insertAdjacentHTML('beforeend', ELEMENT);
CONTAINER.insertAdjacentHTML('beforeend', webpackTest);
