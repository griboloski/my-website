document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for buttons and other interactive elements
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = 'red';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });

    // Function to toggle the visibility of the menu bar
    function toggleMenu() {
        const menuBar = document.getElementById('menu-bar');
        if (menuBar) {
            menuBar.classList.toggle('hidden');
        }
    }

    // Add event listener to the toggle button to call the toggle function
    const menuToggleButton = document.getElementById('menu-toggle');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', toggleMenu);
    }
});
