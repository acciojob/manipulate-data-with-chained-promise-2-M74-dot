// Define an async function to handle the promises
async function manipulateData() {
  // Return a promise that resolves with the array after 3 seconds
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolve with array after 3 seconds
  });

  // Filter out odd numbers and update the output after 1 second
  const evenNumbers = await new Promise((resolve) => {
    setTimeout(() => {
      const evens = data.filter((num) => num % 2 === 0);
      document.getElementById('output').textContent = evens.join(',');
      resolve(evens);
    }, 1000); // Filter and update output after 1 second
  });

  // Multiply even numbers by 2 and update the output after another 2 seconds
  await new Promise((resolve) => {
    setTimeout(() => {
      const doubledEvens = evenNumbers.map((num) => num * 2);
      document.getElementById('output').textContent = doubledEvens.join(',');
      resolve(doubledEvens);
    }, 2000); // Multiply and update output after 2 more seconds
  });
}

// Call the function to start the process
manipulateData();
