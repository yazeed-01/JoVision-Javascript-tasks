// Create the button
const button = document.createElement('button');
button.innerHTML = 'Click Me';

// Add the button to the body
document.body.appendChild(button);

// Function to handle click event
function handleClick() {
    try {
        const arr = [];
        let sumOfEvenNumbers = 0;
        for (var i = 0; i <= 100; i++) {
            arr.push(i);
        }
        // ------------------------------
        arr.forEach(num => {
            if (num % 2 === 0) {
                sumOfEvenNumbers += num;
            }
        })
        // ------------------------------
        console.log('Sum of even numbers : ', sumOfEvenNumbers);
    } catch (error) {
        console.error('Error : ', error);
    }
}

button.addEventListener('click', handleClick);




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

