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
});
