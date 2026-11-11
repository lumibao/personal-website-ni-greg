// script ko - simple lang

// para sa age ko - birthday ko November 25, 2007
var birthday = new Date(2007, 10, 25); // 10 = November
var today = new Date();
var age = today.getFullYear() - birthday.getFullYear();
var m = today.getMonth() - birthday.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
  age--;
}
document.getElementById('age').textContent = age;
document.getElementById('age2').textContent = age;
document.getElementById('age3').textContent = age;

// para sa Read More button sa Thoughts
function showMore(btn) {
  var post = btn.parentElement;
  var more = post.querySelector('.more');
  if (more.style.display === 'none') {
    more.style.display = 'block';
    btn.textContent = 'Show Less';
  } else {
    more.style.display = 'none';
    btn.textContent = 'Read More';
  }
}

// para sa contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name == '' || email == '' || message == '') {
    document.getElementById('formMsg').textContent = 'Punan mo muna lahat ng fields.';
    return;
  }

  document.getElementById('formMsg').textContent = 'Salamat ' + name + '! Na-receive ko na ang message mo. (Demo lang ito, wala pang totoong server)';
  document.getElementById('contactForm').reset();
});
