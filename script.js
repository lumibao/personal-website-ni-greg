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
document.getElementById("ageResume").textContent = getAge();

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

var slots = document.querySelectorAll(".slot");
var previewArt = document.getElementById("previewArt");
var previewName = document.getElementById("previewName");

slots.forEach(function (slot) {
  slot.addEventListener("click", function () {
    slots.forEach(function (item) {
      item.classList.remove("is-on");
    });
    slot.classList.add("is-on");
    previewArt.textContent = slot.dataset.kind;
    previewName.textContent = slot.dataset.name;
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
