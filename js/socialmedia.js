let searchinput = document.querySelector(".search input");
let closeicon = document.querySelector(".search .closeicon");

closeicon.onclick = function () {
  searchinput.value = "";
  closeicon.style.display = "none";
};

searchinput.onkeyup = function () {
  closeicon.style.display = "block";
  if (searchinput.value === "") closeicon.style.display = "none";
};

let links = document.querySelectorAll(".dashboard .links li");
let notificationbar = document.querySelector(".notificationbar");
let message_btn = document.querySelector(".dashboard .links .message");
let message_side = document.querySelector(".right .message-side");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
      if (links[i].classList.contains("notification")) {
        notificationbar.classList.remove("toggle");
      } else notificationbar.classList.add("toggle");
      if (links[i].classList.contains("message"))
        message_side.classList.add("shadowjj");
      else message_side.classList.remove("shadowjj");
    }
    links[i].classList.add("active");
  });
}

let message = document.querySelectorAll(".messages .message");
let names = document.querySelectorAll(".messages .message .name");
let message_input = document.querySelector("#message-input");
let close_icon = document.querySelector(".right .close-icon");

message_input.addEventListener("keyup", function () {
  for (let i = 0; i < names.length; i++) {
    if (
      names[i].textContent
        .toLowerCase()
        .includes(message_input.value.toLowerCase())
    ) {
      message[i].style.display = "flex";
    } else message[i].style.display = "none";
  }
});

close_icon.onclick = function () {
  message_input.value = "";
  close_icon.style.display = "none";
  for (let i = 0; i < message.length; i++) {
    message[i].style.display = "flex";
  }
};

message_input.addEventListener("keyup", function () {
  close_icon.style.display = "block";
  if (message_input.value === "") close_icon.style.display = "none";
});

let pointes = document.querySelectorAll(".pointes .empty");

for (let i = 0; i < pointes.length; i++) {
  pointes[i].addEventListener("click", function () {
    pointes.forEach(function (pointe) {
      pointe.classList.remove("colored");
    });
    this.classList.add("colored");
  });
}

let emptyone = document.querySelector(".pointes .emptyone");

emptyone.addEventListener("click", function () {
  remove_empty_class();
  document.body.classList.add("empty1");
});

let emptytwo = document.querySelector(".pointes .emptytwo");

emptytwo.addEventListener("click", function () {
  remove_empty_class();
  document.body.classList.add("empty2");
});

let emptythree = document.querySelector(".pointes .emptythree");

emptythree.addEventListener("click", function () {
  remove_empty_class();
  document.body.classList.add("empty3");
});

let emptyfour = document.querySelector(".pointes .emptyfour");

emptyfour.addEventListener("click", function () {
  remove_empty_class();
  document.body.classList.add("empty4");
});

let emptyfive = document.querySelector(".pointes .emptyfive");

emptyfive.addEventListener("click", function () {
  remove_empty_class();
  document.body.classList.add("empty5");
});

let remove_empty_class = function () {
  document.body.classList.remove("empty1");
  document.body.classList.remove("empty2");
  document.body.classList.remove("empty3");
  document.body.classList.remove("empty4");
  document.body.classList.remove("empty5");
};

let purple = document.querySelector(".color .purple");

purple.addEventListener("click", function () {
  color_class();
  document.body.classList.add("purple");
  purple.classList.add("border-color");
});

let yellow = document.querySelector(".color .yellow");

yellow.addEventListener("click", function () {
  color_class();
  document.body.classList.add("yellow");
  yellow.classList.add("border-color");
});

let red = document.querySelector(".color .red");

red.addEventListener("click", function () {
  color_class();
  document.body.classList.add("red");
  red.classList.add("border-color");
});

let green = document.querySelector(".color .green");

green.addEventListener("click", function () {
  color_class();
  document.body.classList.add("green");
  green.classList.add("border-color");
});

let babyblue = document.querySelector(".color .babyblue");

babyblue.addEventListener("click", function () {
  color_class();
  document.body.classList.add("babyblue");
  babyblue.classList.add("border-color");
});

let color_class = function () {
  document.body.classList.remove("purple");
  document.body.classList.remove("yellow");
  document.body.classList.remove("red");
  document.body.classList.remove("green");
  document.body.classList.remove("babyblue");
  purple.classList.remove("border-color");
  yellow.classList.remove("border-color");
  red.classList.remove("border-color");
  green.classList.remove("border-color");
  babyblue.classList.remove("border-color");
};

let light = document.querySelector(".background-color .light");

light.addEventListener("click", function () {
  background_class();
  document.body.classList.add("light-mode");
  light.classList.add("border-check");
});

let dim = document.querySelector(".background-color .dim");

dim.addEventListener("click", function () {
  background_class();
  document.body.classList.add("dim-mode");
  dim.classList.add("border-check");
});

let lightout = document.querySelector(".background-color .lightout");

lightout.addEventListener("click", function () {
  background_class();
  document.body.classList.add("lightout-mode");
  lightout.classList.add("border-check");
});

let background_class = function () {
  document.body.classList.remove("light-mode");
  document.body.classList.remove("dim-mode");
  document.body.classList.remove("lightout-mode");

  light.classList.remove("border-check");
  dim.classList.remove("border-check");
  lightout.classList.remove("border-check");
};

let theme_btn = document.querySelector(".theme-btn");
let theme = document.querySelector(".theme");
let theme_close = document.querySelector(".theme .close-theme");
let container = document.querySelectorAll(".container-xl");

theme_btn.addEventListener("click", function () {
  theme.style.display = "block";
  container.forEach(function (ele) {
    ele.classList.add("container-opacity");
  });
});

theme_close.addEventListener("click", function () {
  theme.style.display = "none";
  container.forEach(function (ele) {
    ele.classList.remove("container-opacity");
  });
});
