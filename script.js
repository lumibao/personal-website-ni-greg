// my birthday is November 25, 2007
// I compute my age here so I don't have to update it every year

var birthday = new Date(2007, 10, 25); // months start at 0, so 10 = November

function getAge() {
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var monthDiff = today.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age = age - 1;
  }

  return age;
}

document.getElementById("age").textContent = getAge();
document.getElementById("age2").textContent = getAge();

// contact form
// this doesn't send anywhere yet, I just check if the fields are filled
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var feedback = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Fill in all three fields first.";
    return;
  }

  feedback.textContent = "Thanks " + name + ". This form doesn't send anything yet, sorry — but I read it.";
});
