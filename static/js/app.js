// from data.js
const tableD = data;

// YOUR CODE HERE!
console.log(tableD);

// Table-Body Reference
const tbody = d3.select("tbody");

// Data from data.js
console.log(data);
 data.forEach(function(sightingReport) {
  console.log(sightingReport);
  const row = tbody.append("tr");
   Object.entries(sightingReport).forEach(function([key, value]) {
     console.log(key, value);
     const cell = tbody.append("td");
     cell.text(value);
   });
 });

 const submit = d3.select("#submit");

 // Functions
 submit.on("click", function() {
   d3.event.preventDefault();
   d3.select(".summary").html("");
 
   // Takes a user input and uses it as a variable
   const InputE = d3.select("#datetime");
   const InputV = InputE.property("value");
 
   // Filter 
   var filt_Data = tableData.filter(tableD => tableD.datetime === InputV);
 
   // Loop
   filt_Data.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });
