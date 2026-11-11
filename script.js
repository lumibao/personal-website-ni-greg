// Age, from my birthday
var birthday = new Date(2007, 10, 25); // 10 = November

function getAge() {
  var now = new Date();
  var age = now.getFullYear() - birthday.getFullYear();
  var monthDiff = now.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthday.getDate())) {
    age -= 1;
  }

  return age;
}

document.getElementById("age").textContent = getAge();
document.getElementById("age2").textContent = getAge();

// Contact form: checks the fields, doesn't send anything yet
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
