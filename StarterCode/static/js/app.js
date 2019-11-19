//Using the UFO dataset provided in the form of an array of JavaScript 
// objects, write code that appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

// Creating a variable from the UFO dataset data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO dataset from data.js
console.log(data);

// // Step 1: Loop through 'data' and console.log each UFO sighting report object
//  data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   // Step 2: Use d3 to append one table row 'tr' for each ufo report object
//   var row = tbody.append("tr");
//   // Step 3: Use 'object.entries' to console.log each ufo report value 
//    Object.entries(ufoReport).forEach(function([key, value]) {
//      console.log(key, value);
//      // Step 4: Use d3 to append 1 cell per ufo report value ('date/time`, `city`, `state`, `country`, `shape`, and `comment`)
//      var cell = row.append("td");
//      // Step 5: Use d3 to update each cell's text with ufo report values
//      cell.text(value);
//    });
//  });

 
// Create a table using the arrow function
  data.forEach((ufoReport) => {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

 var filterButton = d3.select("#filter-btn");

 // function to take input and recreate table
 filterButton.on("click", function() {

    // d3.event.preventDefault();

    // Empty the table in order to creatr the filtered one
 
    d3.select(".filteredTable").html("");

    // Select the input element and the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

 
   // Filter Data
   var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
   console.log("the filtered data is ", filteredData);

   // loop through
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
   });
 });