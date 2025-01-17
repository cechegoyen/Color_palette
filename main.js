// Javascript :)!
console.log('Your Palette Generator')

const generateBtn = document.getElementById('generateBtn');
const colorPalette = document.getElementById('colorPalette');

// Add a click event listener to the Generate Button
generateBtn.addEventListener('click', generatePallete);

// Function to generate a new color palette
function generatePallete() {
    // Clear the current palette
    colorPalette.innerHTML = '';

    // Loop to generate 5 color boxes
    for(let i = 0; i < 5; i++) {
        const color = generateRandomColor(); // Generate random color
        const colorBox = createColorBox(color); // Create a color box for the color
        colorPalette.appendChild(colorBox); // Add the color box to the palette
    }
}


function generateRandomColor() {
    const letters = '0123456789ABCDEF'; 
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color; // Return the generated color
}

// Function to create a color box element
function createColorBox(color) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box'); 
    colorBox.style.backgroundColor = color; 
    colorBox.textContent = color; 
    return colorBox;
}
