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
document.getElementById("ageCard").textContent = getAge();
document.getElementById("ageResume").textContent = getAge();

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var sub = document.querySelector(".sub");
var subBtn = document.getElementById("activityBtn");

menuBtn.addEventListener("click", function () {
  var open = menu.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

subBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  var open = sub.classList.toggle("is-open");
  subBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", function (event) {
  if (!sub.contains(event.target)) {
    sub.classList.remove("is-open");
    subBtn.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    sub.classList.remove("is-open");
    subBtn.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".menu > a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelectorAll(".menu > a").forEach(function (item) {
      item.classList.remove("is-active");
    });
    link.classList.add("is-active");
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
