// Create the button
const button = document.createElement('button');
button.innerHTML = 'Get ip';

// Add the button to the body
document.body.appendChild(button);

// Function to handle click event
function handleClick() {
    fetch('https://api.ipify.org')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.text(); 
        })
        .then((response) => {
            button.innerHTML = response; 
        })
        .catch(handleError());
}

button.addEventListener('click', handleClick);

function handleError() {
    window.alert('Error: Unable to fetch');
}

// ********** Styling **********
// Style the button
button.style.width = '150px';
button.style.height = '50px';
button.style.fontSize = '18px';
button.style.cursor = 'pointer';
button.style.position = 'absolute';
button.style.top = '50%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)';