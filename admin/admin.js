function change_rock(hex) {
    document.getElementsByClassName("rock-polygon")[0].setAttribute("fill", hex);
}

function change_rock_path(hex) {
    document.getElementsByClassName("rock-path")[0].setAttribute("fill", hex);
}

function turn_on_off(elem) {
    localStorage.setItem('rock_enabled', JSON.stringify({enabled: elem.checked}));
}

if (localStorage.getItem("rock") !== null) {
    var rock_color = JSON.parse(localStorage.getItem("rock")).rock;
    var rock_path_color = JSON.parse(localStorage.getItem("rock")).rock_path;
    document.getElementsByClassName("rock-polygon")[0].setAttribute("fill", rock_color);
    document.getElementsByClassName("rock-path")[0].setAttribute("fill", rock_path_color);
    document.getElementById("rockpolygon").value = rock_color;
    document.getElementById("rockpath").value = rock_path_color;
    document.getElementById("rockname").value = JSON.parse(localStorage.getItem("rock")).rock_name;
    document.getElementById("svgtooltip").innerHTML = JSON.parse(localStorage.getItem("rock")).rock_name;
}

if (localStorage.getItem("rock_enabled") !== null) {
    var rock_enabled = JSON.parse(localStorage.getItem("rock_enabled")).enabled;
    document.getElementById("rockenabled").checked = rock_enabled;
}

document.querySelector("#save").addEventListener("click", (element) => {
    var rock = document.getElementsByClassName("rock-polygon")[0].getAttribute("fill");
    var rock_path = document.getElementsByClassName("rock-path")[0].getAttribute("fill");
    var rock_name = document.getElementById("rockname").value;
    change_rock(rock);
    change_rock_path(rock_path);

    localStorage.setItem('rock',JSON.stringify({rock_name: rock_name,rock: rock, rock_path: rock_path}));
    document.getElementById("confirmation").innerHTML = "Saved!";

    setTimeout(() => {
        document.getElementById("confirmation").innerHTML = "";
    }, 2000);
});

document.querySelector("#reset").addEventListener("click", (element) => {
    document.getElementById("rockpolygon").value = "#E6E7E8";
    document.getElementById("rockpath").value = "#D1D3D4";
    document.getElementsByClassName("rock-polygon")[0].setAttribute("fill", "#E6E7E8");
    document.getElementsByClassName("rock-path")[0].setAttribute("fill", "#D1D3D4");
    localStorage.setItem('rock',JSON.stringify({rock_name: "Rocky", rock: "#E6E7E8", rock_path: "#D1D3D4"}));
    document.getElementById("confirmation").innerHTML = "Reset!";
    setTimeout(() => {
        document.getElementById("confirmation").innerHTML = "";
    }, 2000);
});


