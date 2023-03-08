// import table data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to load the data into the table
function buildTable(data) {
    // Clear the table Initialization step
    tbody.html("");

    // Loop through each object and append it to a row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => { 
            let cell = row.append("td");
            cell.text(val);
        });
    });
      
};

function handleClick() {
    console.log("Clicked")
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    buildTable(filteredData);

};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);


