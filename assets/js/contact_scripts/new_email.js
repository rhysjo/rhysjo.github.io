document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure the DOM is fully loaded before accessing elements
    const emailButton = document.getElementById('emailButton');
    
    if (emailButton) {
        emailButton.addEventListener('click', function() {
            // Using a template literal for easier customization
            const emailAddress = 'roegpc@gmail.com';
            const subject = 'Test Email Subject';
            const body = 'Test Email Body';
            
            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    } else {
        console.error('Email button not found.');
    }
});
