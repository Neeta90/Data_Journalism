// @TODO: YOUR CODE HERE!
// Define SVG area dimensions
/*var svgWidth = 960;
var svgHeight = 660;
// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};
// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
   .append("svg")
   .enter()
   .attr("height", svgHeight)
   .attr("width", svgWidth)
   var chartGroup = svg.append("g")  
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
// Load data from data.csv
d3.csv("assets/data/data.csv", function(error, healthData) {
    // Log an error if one exists
    if (error) return console.warn(error);
  
    // Print the healthData
    console.log(healthData);
  
    // Cast the hours value to a number for each piece of healthData
    healthData.forEach(function(data) {
      data.healthcare = +data.healthcare;
      data.poverty = +data.poverty;
      console.log(data.healthcare);
    });*/
   // set the dimensions and margins of the graph
   var margin = {top: 10, right: 30, bottom: 30, left: 60},
   width = 600 - margin.left - margin.right,
   height = 500 - margin.top - margin.bottom;
   
   // append the svg object to the body of the page
   var svg = d3.select("#scatter")
   .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");
   
   //Read the data
   d3.csv("assets/data/data.csv").then(function(data) {
       // Print the healthData
       console.log(data);
     
     // Add X axis
     var x = d3.scaleLinear()
       .domain([8,24])
      // .domain([d3.extent(data, d => d.poverty)])
       .range([ 0, width ]);
     var xAxis = svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));
   
     // Add Y axis
     var y = d3.scaleLinear()
       .domain([4,22])
       //.domain([d3.extent(data, d => d.healthcare)])
       .range([height, 0]);
      // .range([0,height])
      // .domain([4,22])
       
       
     svg.append("g")
       .call(d3.axisLeft(y));
   
     // Add dots
     svg.append('g')
       .selectAll("dot")
       .data(data)
       .enter()
       .append("circle")
         .attr("cx", function (d) { return x(d.poverty); } )
         .attr("cy", function (d) { return y(d.healthcare); } )
         .attr("r", 5)
         .style("fill", "#69b3a2" )
   
   
     // A function that update the plot for a given xlim value
     function updatePlot() {
   
       // Get the value of the button
       xlim = this.value
   
       // Update X axis
       x.domain([3,xlim])
       xAxis.transition().duration(1000).call(d3.axisBottom(x))
   
       // Update chart
       svg.selectAll("circle")
          .data(data)
          .transition()
          .duration(1000)
          .attr("cx", function (d) { return x(d.poverty); } )
          .attr("cy", function (d) { return y(d.healthcare); } )
     }
   
     // Add an event listener to the button created in the html part
     d3.select("#buttonXlim").on("input", updatePlot )
   
   })
     
       /* Add X axis
     var x = d3.scaleLinear()
     .domain([0, 4000])
     .range([ 0, width ]);
   svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x));
   // Add Y axis
   var y = d3.scaleLinear()
     .domain([0, 500000])
     .range([ height, 0]);
   svg.append("g")
     .call(d3.axisLeft(y));
   // Add dots
   svg.append('g')
     .selectAll("dot")
     .data(data)
     .enter()
     .append("circle")
       .attr("cx", function (data) { return x(data.healthcare); } )
       .attr("cy", function (data) { return y(data.poverty); } )
       .attr("r", 1.5)
       .style("fill", "#69b3a2")
   });*/