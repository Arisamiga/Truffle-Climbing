import './style.css'
import { setupCounter } from './counter.js'
import { embed,
  org as orgClient,
  user as userClient,
  getSrcByImageObj, } from '@trufflehq/sdk'

embed.setSize("500px", "500px")
embed.setStyles({
  borderRadius: "10%",
})
document.querySelector('#app').innerHTML = `
  <div>
    <div className="App"> 
      <div class="blob">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="#242424"
            d="M44.1,-50.4C59.4,-44.2,71.1,-36.2,79.2,-24.8C87.3,-13.4,91.8,1.3,86.9,16.6C82,31.9,67.8,48,52.2,55.1C36.6,62.2,19.3,60.3,3.6,59.6C-12.2,59,-24.4,59.5,-36.7,56.9C-49.1,54.3,-61.6,48.6,-73.4,40.9C-85.1,33.2,-96.2,23.5,-96.9,11.8C-97.6,0.1,-87.9,-14.6,-78.1,-28.1C-68.3,-41.6,-58.4,-53.9,-46.1,-60.9C-33.8,-67.9,-19.1,-69.6,-4.4,-69.9C10.3,-70.2,20.6,-69.1,44.1,-50.4Z"
            transform="translate(100 100)"
          />
        </svg>
        
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
