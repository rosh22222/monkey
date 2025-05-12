// Toggle between light and dark mode
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Light mode styles
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background-color: #f9f9f9;
        color: #111;
    }
    .light-mode .navbar {
        background-color: #ffffff;
    }
    .light-mode .nav-links a {
        color: #111;
    }
    .light-mode .nav-links a:hover {
        color: #a259ff;
    }
    .light-mode #toggle-theme {
        color: #111;
    }
`;
document.head.appendChild(style);