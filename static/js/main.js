document.addEventListener('DOMContentLoaded', function() {
    var paths = window.location.pathname.split('/').filter(n => n);
    if (paths.length > 1 && paths[0] === 'entries') {
        document.querySelector('footer').style.cssText = "position:relative;margin-top:25px;margin-bottom:15px;";
    }

    if (!localStorage.getItem('light-mode')) {
        document.body.classList.toggle('dark');
        document.getElementById('theme-switch').innerHTML = 'Light Mode';
    }

}, false);

document.getElementById('theme-switch').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains("dark")) {
        document.getElementById('theme-switch').innerHTML = 'Light Mode';
        localStorage.removeItem('light-mode');
    } else {
        document.getElementById('theme-switch').innerHTML = 'Dark Mode';
        localStorage.setItem('light-mode', true);
    }
});
