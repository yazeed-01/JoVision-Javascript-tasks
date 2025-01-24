const buttons = [
    { text: 'Remove Divisible by 3', handler: handleClickButton1 },
    { text: 'Add Numbers 100-150', handler: handleClickButton2 },
    { text: 'Add 3 to Each Member', handler: handleClickButton3 },
    { text: 'Print Index 20-40', handler: handleClickButton4 },
    { text: 'Shuffle and Sort', handler: handleClickButton5 }
].map(buttonConfig => {
    const button = document.createElement('button');
    button.innerHTML = buttonConfig.text;
    button.addEventListener('click', buttonConfig.handler);
    return button;
});
styleButtons(buttons);

// ----------------------------------------------
// Button 1: Remove numbers divisible by 3
function handleClickButton1() {
    try {
        const arr = createArray();
        arr.forEach(num => {
            if (num % 3 === 0) {
                arr.splice(arr.indexOf(num), 1);
            }
        });
        console.log('Array after removing numbers divisible by 3:', arr);
    } catch (error) {
        console.error('Error:', error);
    }
}
// ----------------------------------------------
// Button 2: Add numbers from 100 to 150
function handleClickButton2() {
    try {
        const arr = createArray();
        for (let i = 100; i <= 150; i++) {
            arr.push(i);
        }
        console.log('Array after adding numbers from 100 to 150:', arr);
    } catch (error) {
        console.error('Error:', error);
    }
}
// ----------------------------------------------
// Button 3: Add 3 to each member of the array
function handleClickButton3() {
    try {
        const arr = createArray();
        arr.forEach((num, index) => {
            arr[index] = num + 3;
        });
        console.log('Array after adding 3 to each member:', arr);
    } catch (error) {
        console.error('Error:', error);
    }
}
// ----------------------------------------------
// Button 4: Print index 20 to 40
function handleClickButton4() {
    try {
        const arr = createArray();
        console.log('Array index 20 to 40:', arr.slice(20, 41));
    } catch (error) {
        console.error('Error:', error);
    }
}
// ----------------------------------------------
// Button 5: Shuffle and sort the array
function handleClickButton5() {
    try {
        const arr = createArray();
        shuffleArray(arr);
        console.log('Array after shuffle:', arr);
        arr.sort((a, b) => b - a);
        console.log('Array after shuffle and sort descending:', arr);
    } catch (error) {
        console.error('Error:', error);
    }
}
// ----------------------------------------------
// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// ----------------------------------------------
// Function to create array from 0 to 100
function createArray() {
    const arr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}
// ----------------------------------------------
// Function to style buttons
function styleButtons(buttons) {
    // Style the button
    buttons.forEach((button, index) => {
        button.style.width = '150px';
        button.style.height = '50px';
        button.style.fontSize = '18px';
        button.style.cursor = 'pointer';
        button.style.margin = '10px';
    });
    // Add the button to the body
    buttons.forEach(button => document.body.appendChild(button));
}