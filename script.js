var birthday = new Date(2007, 10, 25);

function getAge() {
  var now = new Date();
  var age = now.getFullYear() - birthday.getFullYear();
  var monthDiff = now.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthday.getDate())) {
    age -= 1;
  }

  return age;
}

document.getElementById("ageHero").textContent = getAge();

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var tabWrap = document.querySelector(".tab-wrap");
var activityBtn = document.getElementById("activityBtn");

menuBtn.addEventListener("click", function () {
  var open = menu.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

activityBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  var open = tabWrap.classList.toggle("is-open");
  activityBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", function (event) {
  if (!tabWrap.contains(event.target)) {
    tabWrap.classList.remove("is-open");
    activityBtn.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".tabs a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    tabWrap.classList.remove("is-open");
    activityBtn.setAttribute("aria-expanded", "false");

    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.classList.remove("is-on");
    });

    var target = link.getAttribute("href");

    if (target === "#resume" || target === "#calendar" || target === "#banner" ||
        target === "#background" || target === "#logo" || target === "#template") {
      activityBtn.classList.add("is-on");
    } else {
      link.classList.add("is-on");
    }
  });
});

var tiles = document.querySelectorAll(".tile");
var viewerPic = document.getElementById("viewerPic");
var viewerName = document.getElementById("viewerName");
var viewerText = document.getElementById("viewerText");

tiles.forEach(function (tile) {
  tile.addEventListener("click", function () {
    if (tile.classList.contains("is-empty")) {
      return;
    }

    tiles.forEach(function (item) {
      item.classList.remove("is-on");
    });
    tile.classList.add("is-on");

    var img = tile.querySelector(".pic img");
    var caption = tile.querySelector("figcaption").textContent;

    viewerPic.innerHTML = "";
    var big = document.createElement("img");
    big.src = img.src;
    big.alt = img.alt;
    viewerPic.appendChild(big);

    viewerName.textContent = caption;
    viewerText.textContent = img.alt;
  });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all three fields.";
    return;
  }

  msg.textContent = "Thanks, " + name + ". This form doesn't send yet.";
});
