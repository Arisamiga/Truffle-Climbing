import "./style.css";
import {
  embed,
} from "@trufflehq/sdk";

if (JSON.parse(localStorage.getItem("rock_enabled")).enabled === true) {

  embed.setStyles({
    transform: "rotate(0deg)",
  });

  const rock = document.querySelector(".rock");
  const eyes = document.querySelector(".eyes");
  var direction = "right";


  if (localStorage.getItem("rock") !== null) {
    var rock_color = JSON.parse(localStorage.getItem("rock")).rock;
    var rock_path_color = JSON.parse(localStorage.getItem("rock")).rock_path;
    document.getElementsByClassName("rock-polygon")[0].setAttribute("fill", rock_color);
    document.getElementsByClassName("rock-path")[0].setAttribute("fill", rock_path_color);
    document.getElementById("svgtooltip").innerHTML = JSON.parse(localStorage.getItem("rock")).rock_name;
  }


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
}
else {
  embed.setStyles({
    display: "none",
  });
  document.getElementById("app").innerHTML = "Rock is disabled. Enable it in the admin panel.";
}