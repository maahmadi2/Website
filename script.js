// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const darkModeToggle = document.getElementById('darkModeToggle');
    let darkMode = false;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    darkModeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
            document.querySelector('header').style.backgroundColor = '#1e1e1e';
            document.querySelectorAll('nav ul li a').forEach(link => link.style.color = '#bb86fc');
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            document.querySelector('header').style.backgroundColor = '#282c34';
            document.querySelectorAll('nav ul li a').forEach(link => link.style.color = '#ffffff');
        }
    });
});

