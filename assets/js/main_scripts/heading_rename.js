// Changes Heading value to Home on smaller resolutions
function changeText() {
    var element = document.getElementById('heading');
    element.textContent = 'Home';
    
}

// Media query to check for a viewport width of 600px or less
var mediaQuery = window.matchMedia('(max-width: 1255px)');

// Event listener for changes in the media query state
mediaQuery.addEventListener('change', function(e) {
    if (e.matches) {
        // Call the function if the viewport is 600px or less
        changeText();
    } else {
        // Optionally revert the text when the viewport is larger
        var element = document.getElementById('heading');
        element.textContent = 'Rhys O\'Shea | Trainee Full Stack Developer | Home';
    }
});

// Initial check
if (mediaQuery.matches) {
    changeText();
}