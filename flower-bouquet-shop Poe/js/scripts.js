
function showFeedback(elementId, message, success = true) {
  const el = document.getElementById(elementId);
  el.textContent = message;
  el.style.color = success ? 'green' : 'red';
}

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
      showFeedback('enquiryFeedback', 'Please fill in all fields.', false);
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      showFeedback('enquiryFeedback', 'Please enter a valid email.', false);
      return;
    }

    showFeedback('enquiryFeedback', 'Your enquiry has been submitted!');

    enquiryForm.reset();
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const type = document.getElementById('messageType').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showFeedback('contactFeedback', 'Please fill in all required fields.', false);
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      showFeedback('contactFeedback', 'Please enter a valid email.', false);
      return;
    }

    showFeedback('contactFeedback', 'Your message has been sent!');

    contactForm.reset();
  });
}
