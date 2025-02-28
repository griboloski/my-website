document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for buttons and other interactive elements
    const container = document.querySelector('body');

    container.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            alert('Button clicked!');
        }
    });

    container.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'A') {
            event.target.style.color = 'red';
        }
    });

    container.addEventListener('mouseout', function(event) {
        if (event.target.tagName === 'A') {
            event.target.style.color = '';
        }
    });
});
