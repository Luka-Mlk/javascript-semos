const table = document.querySelector("#sampleTable");
let rowCount = 3;
function insertRow() {
  let cellCount = 1;
  const tableRow = document.createElement("tr");
  for (let i = 0; i < 2; i++) {
    const tableData = document.createElement("td");
    tableData.innerHTML = `Row${rowCount} cell${cellCount}`;
    tableRow.appendChild(tableData);
    cellCount++;
  }
  table.appendChild(tableRow);
  rowCount++;
}
