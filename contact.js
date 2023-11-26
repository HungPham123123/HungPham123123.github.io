document.getElementById('openLiveChatBtn').addEventListener('click', function() {
    // Trigger the live chat script
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.open();
    }
  });

  function validateForm() {
    // Resetting previous errors
    resetErrors();

    // Flag to check if there are any errors
    let hasErrors = false;

    // Validate Name
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!nameInput.value.trim()) {
        hasErrors = true;
        markAsError(nameInput);
        nameError.textContent = 'Please fill out this field.';
    }

    // Validate Email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        hasErrors = true;
        markAsError(emailInput);
        emailError.textContent = 'Please fill out this field with a valid email address.';
    }

    // Validate Message
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!messageInput.value.trim()) {
        hasErrors = true;
        markAsError(messageInput);
        messageError.textContent = 'Please fill out this field.';
    }

    // Display general error message if there are errors
    const generalError = document.getElementById('generalError');
    if (hasErrors) {
        generalError.textContent = 'One or more fields have an error. Please check and try again.';
        return false;
    }

    return true; // Form submission will proceed if no errors
}

// Helper function to mark input as error
function markAsError(inputElement) {
    inputElement.classList.add('error');
}

// Helper function to reset errors
function resetErrors() {
    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}

// Helper function to check if the email is valid
function isValidEmail(email) {
    // You can use a more sophisticated email validation logic here
    // This is a basic example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}