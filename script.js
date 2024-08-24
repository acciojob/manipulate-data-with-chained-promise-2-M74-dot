//your JS code here. If required.
// Function that returns a promise resolving with an array after 3 seconds
function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to update the output div with a given array
function updateOutput(array) {
    document.getElementById('output').innerText = array.join(', ');
}

// Start processing the array with chained promises
getArray()
    .then((array) => {
        // Filter out odd numbers
        const evenNumbers = array.filter(num => num % 2 === 0);
        // Update the output div after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                updateOutput(evenNumbers);
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Multiply even numbers by 2
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        // Update the output div after another 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                updateOutput(multipliedNumbers);
                resolve();
            }, 2000);
        });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
