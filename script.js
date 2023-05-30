// Fetch data from the URL
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // Create the table dynamically
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(header => {
        const cell = document.createElement('td');
        cell.textContent = item[header];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append table to the document body
    document.body.appendChild(table);
  })
  .catch(error => {
    console.error('Error:', error);
  });
