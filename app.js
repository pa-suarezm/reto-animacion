
//Pablo Suárez - 201632293
//pa.suarezm

//-------------------------------------------------------
//Reto No. 1
//-------------------------------------------------------
/*
const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3},
    { name: "Fernanda", age: 16},
    { name: "María", age: 7},
    { name: "Sandra", age: 35}
];

const table = canvas.append("table");

const header = table.append("thead").append("tr");
header.append("th").text("Name");
header.append("th").text("Age");

const body = table.append("tbody");
data.forEach(d => 
{
    let row = body.append("tr");
    row.append("td").text(d.name);
    row.append("td").text(d.age);
});
*/


//-----------------------------------------------------------
//Reto No. 2
//-----------------------------------------------------------
/*
const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3},
    { name: "Fernanda", age: 16},
    { name: "María", age: 7},
    { name: "Sandra", age: 35}
];

const svg = canvas.append("svg");

svg.attr("width", 800);
svg.attr("height", 400);

const rect = svg.selectAll("rect").data(data);

rect.enter()
    .append("rect")
        .attr("x", (d, i) => 150 * (i))
        .attr("y", d => 400 - (10*d.age))
        .attr("width", 100)
        .attr("height", d => 10*(d.age))
        .style("fill", "steelblue");
*/

//-----------------------------------------------------------
//Reto No. 3
//-----------------------------------------------------------
/*
var url = "https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json";
d3.json(url).then( data => {
    const canvas = d3.select("#canvas");

    const width = 700;
    const height = 500;
    const margin = { top:10, left:50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    var maxValue = -Infinity;
    data.forEach( d => {if(d.value > maxValue) maxValue = d.value;});

    const x = d3.scaleLinear() 
        .domain([maxValue, 0])
        .range([iheight, 0]);

    const y = d3.scaleBand()
    .domain(data.map(d => d.name)) 
    .range([0, iwidth])
    .padding(0.1); 

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("x", d => 0)
    .attr("y", d => y(d.name))
    .attr("width", d => x(d.value))
    .attr("height", y.bandwidth())  

    g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  

    g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));
});
*/

//-----------------------------------------------------------------------------
//RETO 4
//-----------------------------------------------------------------------------
/*
var url="https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json";
d3.json(url).then( data => {

    const canvas = d3.select("#canvas");

    const width = 800;
    const height = 500;
    const margin = { top:10, left:50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width+100);
    svg.attr("height", height+50);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    var maxValueLE = -Infinity;
    data.forEach( d => { if(d.lifeexpectancy > maxValueLE) maxValueLE = d.lifeexpectancy } );
    //Scale in the y-axis
    const y = d3.scaleLinear() 
        .domain([0, maxValueLE])
        .range([iheight, 0]);

    var maxValueA = -Infinity;
    var minValueA = Infinity;
    data.forEach( d => {
        if(d.purchasingpower > maxValueA)
            maxValueA = d.purchasingpower;
        if(d.purchasingpower < minValueA)
            minValueA = d.purchasingpower;
    });

    console.log(`maxValueA: ${maxValueA}`);
    console.log(`minValueA: ${minValueA}`);

    //Scale in the x-axis
    const x = d3.scaleLinear()
        .domain([maxValueA, minValueA]) 
        .range([0, iwidth])

    const circles = g.selectAll("circle").data(data);
    circles.enter()
        .append("circle")
            .attr("class", "circle")
            .style("fill", "steelblue")
            .attr("cx", d => x(d.purchasingpower))
            .attr("cy", d => y(d.lifeexpectancy)+5)
            .attr("r", d => 0.00000025*d.population)
        
    const texts = g.selectAll("text").data(data);
    texts.enter()
        .append("text")
            .attr("x", d => x(d.purchasingpower))
            .attr("y", d => y(d.lifeexpectancy))
            .attr("text-anchor", "middle")
            .attr("stroke", "#000000")
            .attr("stroke-width", "0.01em")
            .text(d => d.country)


    g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  

    g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));

});
*/