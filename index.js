const fs = require('fs');
const { prompt } = require('enquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
  let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" fill="${shapeColor}" />`;

  const shapeProps = {
    cx: 150,
    cy: 100,
    r: 50,
    fill: textColor,
  };

  switch (shape) {
    case 'circle':
      svgContent += `<circle cx="${shapeProps.cx}" cy="${shapeProps.cy}" r="${shapeProps.r}" fill="${shapeProps.fill}" />`;
      break;
    case 'triangle':
      svgContent += `<polygon points="${shapeProps.cx},${shapeProps.cy - shapeProps.r} ${shapeProps.cx - shapeProps.r},${shapeProps.cy + shapeProps.r} ${shapeProps.cx + shapeProps.r},${shapeProps.cy + shapeProps.r}" fill="${shapeProps.fill}" />`;
      break;
    case 'square':
      svgContent += `<rect x="${shapeProps.cx - shapeProps.r}" y="${shapeProps.cy - shapeProps.r}" width="${shapeProps.r * 2}" height="${shapeProps.r * 2}" fill="${shapeProps.fill}" />`;
      break;
    default:
      console.log('Invalid shape choice.');
      return null;
  }

  svgContent += `<text x="150" y="110" text-anchor="middle" font-size="30" fill="${textColor}">${text}</text>
</svg>`;

  return svgContent;
}

async function generateLogo() {
  const response = await prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'select',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = response;
  const svgContent = generateSVG({ text, textColor, shape, shapeColor });

  if (svgContent) {
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }
}

generateLogo();

module.exports = generateLogo;
