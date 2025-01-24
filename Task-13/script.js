// Create a container for the form
const formContainer = document.createElement('div');
document.body.appendChild(formContainer);

// Create the Name input field
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
formContainer.appendChild(nameInput);

// Create the Submit button
const submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
formContainer.appendChild(submitButton);

// Function to handle button click
function handleSubmit() {
    const name = nameInput.value.trim();

    // Validate user input (only letters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
        window.alert('Please enter a name');
        return;
    }
    if (!nameRegex.test(name)) {
        window.alert('Please enter a valid name (only letters)');
        return;
    }

    fetch(`https://api.agidfy.io?name=${name}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.json();
        })
        .then((data) => {
            const { name: userName, age: userAge } = data;

            if (userAge === null) {
                throw new Error('No age prediction available');
            }

            const popupMessage = `Your name is: ${userName}\nYour predicted age is: ${userAge}`;
            window.alert(popupMessage);
        })
        .catch(handleError());
}

submitButton.addEventListener('click', handleSubmit);

function handleError() {
    window.alert('Error: Unable to fetch');
}