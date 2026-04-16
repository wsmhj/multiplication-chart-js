# multiplication-chart-js

Generate multiplication charts, times tables, and printable math grids in JavaScript.

[Live Demo → Multiplication Chart Printable](https://multiplicationchartprintable.app)

## Features

- Generate standard multiplication tables (1-12, 1-20, custom range)
- Produce HTML/SVG printable multiplication charts
- Blank chart generation for practice
- Colored/styled chart output
- Support for partial charts and specific ranges
- Mobile-responsive chart layouts

## Installation

```bash
npm install multiplication-chart-js
```

## Usage

```javascript
const { generateTable, generateChart, getMultiples } = require('multiplication-chart-js');

// Get a full multiplication table
const table = generateTable(12);
console.log(table[3][4]); // 12 (3 × 4)

// Get multiples of a number
const fives = getMultiples(5, 12);
console.log(fives); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

// Generate an HTML chart
const htmlChart = generateChart({ maxNum: 10 });
```

## Live Demo

Try the full-featured [Multiplication Chart Printable](https://multiplicationchartprintable.app) generator online.

## License

MIT
