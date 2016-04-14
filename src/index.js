// require('./alert.js'); Webpack build first test. Passed... OK!

import greetings from './robot.js'
document.write(greetings("Affirmative", "Francesco!"));

// creating a stylesheet dependency of a JavaScript file. AMAZING!

import styles from './app.css'

const ELEMENT = `
  <div class="element">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`

document.write(ELEMENT);
