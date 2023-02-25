import "./style.css";
import {
  embed,
} from "@trufflehq/sdk";

embed.setStyles({
  transform: "rotate(0deg)",
});

document.querySelector("#app").innerHTML = `
  <div>
    <div className="App"> 
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="rock animationMovement" viewBox="-2 -2 138 83" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon id="Shape" fill="#E6E7E8" points="36 0.15 83.025 0.15 99 12.525 102.6 24.9 134.1 68.775 106.275 78.6 61.275 73.425 8.625 75.45 0.9 61.125 0.9 44.475 12.225 37.8 23.625 16.2"/>
        <path d="M8.25,74.325 L31.425,59.7 L47.85,58.5 L64.95,60.6 L83.025,50.325 L108.3,57.15 L134.1,68.775 L106.275,78.6 L61.275,73.425 L37.05,74.1 L8.25,74.325 Z M18.15,27.45 L34.425,28.125 L39.075,33.15 L22.05,39.375 L7.425,51.3 L0.9,45.45 L10.5,38.775 L18.15,27.45 Z M71.175,25.875 L73.875,19.2 L83.85,15.9 L97.5,27.225 L84.375,23.1 L75.825,27.225 L71.175,25.875 Z M37.425,38.85 L58.725,33.15 L70.95,36.375 L79.2,42.525 L74.55,48.225 L59.175,49.275 L45.75,51 L32.85,50.325 L27.225,56.4 L16.35,52.8 L37.425,38.85 Z" id="Shape" fill="#D1D3D4"/>
        <polygon id="body" stroke="#000000" stroke-width="3" points="36 0.15 83.025 0.15 99 12.525 102.6 24.9 134.1 68.775 106.275 78.6 61.275 73.425 8.625 75.45 0.9 61.125 0.9 44.475 12.225 37.8 23.625 16.2"/>
      </g>
    </svg>
    
    <div class="eyes animationMovement">
    <div class="eye">
      <div class="eye-ball"></div>
    </div>
    <div class="eye">
      <div class="eye-ball"></div>
    </div>
    </div>
  </div>
`;

const rock = document.querySelector(".rock");
const eyes = document.querySelector(".eyes");
var direction = "right";

function moveRock(element){
    if (element.clientX > window.innerWidth - 100) {
    rock.classList.remove("animationMovement");
    eyes.classList.remove("animationMovement");
    rock.style.left = "0px";
    eyes.style.left = "25px";
    if (direction === "right") {
      embed.setStyles({
        transform: "rotate(-90deg)",
      });
      direction = "top";
    }
    else if (direction === "top") {
      embed.setStyles({
        transform: "rotate(180deg)",
      });
      direction = "left";
    }
    else if (direction === "left") {
      embed.setStyles({
        transform: "rotate(90deg)",
      });
      direction = "bottom";
    }
    else if (direction === "bottom") {
      embed.setStyles({
        transform: "rotate(0deg)",
      });
      direction = "right";
    }
    setTimeout(() => {
      rock.classList.add("animationMovement");
      eyes.classList.add("animationMovement");
    }, 300);
  }
  else {
    rock.style.left = `${element.clientX}px`;
    eyes.style.left = `${element.clientX + 25}px`;
  }
}

rock.addEventListener("click", (element) => {
  moveRock(element);
});
eyes.addEventListener("click", (element) => {
  moveRock(element);
});