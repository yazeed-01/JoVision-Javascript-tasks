// Create a container for the form
const formContainer = document.createElement('div');
document.body.appendChild(formContainer);

// Create the Name input field
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
formContainer.appendChild(nameInput);

// Create the Age input field
const ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Age';
formContainer.appendChild(ageInput);

// Create the Submit button
const submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
formContainer.appendChild(submitButton);

// Function to handle button click
function handleSubmit() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    // Validate name (only letters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
        window.alert('Please enter a name');
        return;
    }
    if (!nameRegex.test(name)) {
        window.alert('Please enter a valid name (only letters)');
        return;
    }

    // Validate age (only numbers allowed, and within a reasonable range)
    const ageRegex = /^\d+$/;
    const minAge = 0;
    const maxAge = 120;
    if (!age) {
        window.alert('Please enter an age');
        return;
    }
    if (!ageRegex.test(age)) {
        window.alert('Please enter a valid age (only numbers allowed)');
        return;
    }
    if (parseInt(age) < minAge || parseInt(age) > maxAge) {
        window.alert(`Please enter an age between ${minAge} and ${maxAge}`);
        return;
    }

    const userData = {
        name: name,
        age: age,
        timestamp: new Date().toLocaleString()
    };

    const { name: userName, age: userAge, timestamp } = userData;

    const popupMessage = `Your name is: ${userName}\nYour age is: ${userAge}\nTimestamp: ${timestamp}`;

    window.alert(popupMessage);
}

submitButton.addEventListener('click', handleSubmit);