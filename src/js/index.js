import $ from 'jquery';
// こっからスタート
$(document).ready(function(){
	console.log("動いてるよ！");
	//１個目の円グラフ
	var dataset = [
	    {legend:"うーぴょん", value:10, color:"red"},
	    {legend:"とうよう", value:45, color:"orangered"},
	    {legend:"ちゃんちー", value:15, color:"yellow"},
	    {legend:"いのっち", value:70, color:"pink"},
	    {legend:"その他", value:20, color:"purple"}
    ];
	var width = 200;
	var height = 200;
	var radius = 80;
	var svg = d3.select(".data-circle").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(10);
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d){ return d.value; });
    var g = svg.selectAll(".fan")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "fan")
    g.append("path")
    .attr("d", arc)
    .attr("fill", function(d){ return d.data.color; })
    g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.legend; });

	//２個目の円グラフ
	var dataset = [
	    {legend:"エンジニア", value:45, color:"red"},
	    {legend:"デザイナー", value:10, color:"gray"},
	    {legend:"ビジネス", value:25, color:"yellow"},
    ];
	var width = 200;
	var height = 200;
	var radius = 80;
	var svg = d3.select(".data-circle2").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(10);
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d){ return d.value; });
    var g = svg.selectAll(".fan")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "fan")
    g.append("path")
    .attr("d", arc)
    .attr("fill", function(d){ return d.data.color; })
    g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.legend; });

	//折れ線グラフ
    var dataset = [
	  {x: 0, y: 0},
	  {x: 1, y: 8},
	  {x: 2, y: 12},
	  {x: 3, y: 13}
	];
	var margin = {top: 0, right: 50, bottom: 30, left: 50},
	    width = 400 - margin.left - margin.right,
	    height = 300 - margin.top - margin.bottom;
	var xScale = d3.scale.linear()
	    .domain([0, d3.max(dataset, function(d){ return d.x; })])
	    .range([0, width]);
	var yScale = d3.scale.linear()
	    .domain([0, d3.max(dataset, function(d){ return d.y; })])
	    .range([height, 0]);
	var xAxis = d3.svg.axis()
	    .scale(xScale)
	    .orient("bottom")
	var yAxis = d3.svg.axis()
	    .scale(yScale)
	    .orient("left")
	var line = d3.svg.line()
    .x(function(d) { return xScale(d.x); })
    .y(function(d) { return yScale(d.y); });
	var svg = d3.select(".data-line").append("svg")
	  .attr("width", width + margin.left + margin.right)
	  .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	svg.append("g")
      .attr("class", "y axis")
	  .call(yAxis)
	svg.append("path")
	   .datum(dataset)
	   .attr("class", "line")
	   .attr("d", line(dataset));
});
