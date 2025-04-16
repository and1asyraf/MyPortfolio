// existing code (menu toggle)
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setTheme(isDark);
});

// toggle theme on button click
toggleBtn.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    setTheme(isDark);
});

// -------------------------------
// EMAILJS INTEGRATION STARTS HERE
// -------------------------------

// Initialize EmailJS
(function () {
    emailjs.init('aRtXftZTuIVJyfnsB'); // Replace with your actual PUBLIC KEY
})();

// Form submission
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_i2tphbp', 'service_i2tphbp', this)
            .then(function (response) {
                alert('Email sent successfully!');
                form.reset(); // Optional: Reset form after submission
            }, function (error) {
                alert('Error sending email: ' + error.text);
            });
    });
}
