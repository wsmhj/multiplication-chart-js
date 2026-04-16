/**
 * multiplication-chart-js
 * Generate multiplication tables, times charts, and printable math grids
 * Live demo: https://multiplicationchartprintable.app
 */

'use strict';

function generateTable(maxNum = 12) {
  const table = [];
  for (let i = 1; i <= maxNum; i++) {
    table[i] = [];
    for (let j = 1; j <= maxNum; j++) {
      table[i][j] = i * j;
    }
  }
  return table;
}

function getMultiples(num, count = 12) {
  return Array.from({ length: count }, (_, i) => num * (i + 1));
}

function generateChartData(options = {}) {
  const { minNum = 1, maxNum = 12 } = options;
  const headers = [];
  const rows = [];
  for (let i = minNum; i <= maxNum; i++) {
    headers.push(i);
  }
  for (let i = minNum; i <= maxNum; i++) {
    const row = { label: i, cells: [] };
    for (let j = minNum; j <= maxNum; j++) {
      row.cells.push({ row: i, col: j, product: i * j });
    }
    rows.push(row);
  }
  return { headers, rows, minNum, maxNum };
}

function generateHTMLTable(options = {}) {
  const { maxNum = 12, showHeaders = true } = options;
  const data = generateChartData({ minNum: 1, maxNum });
  let html = '<table class="multiplication-chart">';
  if (showHeaders) {
    html += '<tr><th>×</th>';
    for (const h of data.headers) {
      html += `<th>${h}</th>`;
    }
    html += '</tr>';
  }
  for (const row of data.rows) {
    html += `<tr><th>${row.label}</th>`;
    for (const cell of row.cells) {
      html += `<td>${cell.product}</td>`;
    }
    html += '</tr>';
  }
  html += '</table>';
  return html;
}

function isMultipleOf(num, divisor) {
  return num % divisor === 0;
}

function getFactors(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}

module.exports = {
  generateTable,
  getMultiples,
  generateChartData,
  generateHTMLTable,
  isMultipleOf,
  getFactors
};
