// Javascript :)!
console.log('Your Palette Generator')

const generateBtn = document.getElementById('generateBtn');
const colorPalette = document.getElementById('colorPalette');


generateBtn.addEventListener('click', generatePalette);

// Funcion para generar una nueva palette
function generatePalete() 
{
    // Borrar la paleta actual
    colorPalette.innerHTML = '';

    // Generar 5 cajas
    for(let i = 0; i < 5; i++) {
        {
            const color = generateRandomColor(rgb(r, g, b)); 
        const colorBox = createColorBox(color); 
        colorPalette.appendChild(colorBox) // apprednChild=colours inside of the palette, like the child in the box

    }
}



// Esta funcion nos ayudara a randomize los codigos de RGB
function generateRandomColor() 
{
    const r = Math.floor(Math.random() * 256);  // for red
    const g = Math.floor(Math.random() * 256);  // for green
    const b = Math.floor(Math.random() * 256);  // for blue
    return `rgb(${r}, ${g}, ${b})`;  // back to RGB
}

}

function createColorBox(color) {
    const colorBox = document.createElement('div'); 

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';  
    copyButton.classList.add('copy-btn');  
    copy-btn.addEventListener('click', () => copyToClipboard(color));  

    colorBox.appendChild(copyButton);
    
    return colorBox;
}

function copyToClipboard(color) {
    const textArea = document.createElement('textarea');
    textArea.value = color;  
    document.body.appendChild(textArea);  

    textArea.select();
    textArea.setSelectionRange(0, 99999); 

    document.executecommand('copy');

    document.body.removeChild(textArea);

     // This is to show the temporary message to inform that the colour has been copied
    alert(`Color ${color} copied to clipboard`);

}
