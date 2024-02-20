let svg = d3.select('body').append("svg")
.attr("width", window.innerWidth)
.attr("height", window.innerHeight)


var t = 0;

// //mesmerize harmonics
// setInterval(() => {
//     let data = d3.range(0,100,0.1).map(d=>({
//         x: d*20,
//         y: 200+Math.sin(d*0.2*t)*100
//     }))

// var circle = svg.selectAll("circle").data(data)
// circle.enter().append("circle").attr("r", 5).attr("fill", "red")

// circle.attr("cx",(d)=>d.x)
// .attr("cy",(d)=>d.y)

// t= t+0.1;

// }, 200);


// // full screen mesmerize
// setInterval(() => {
//     let data = d3.range(0,100,0.001).map(d=>({
//         x: d*20,
//         y: Math.sin(d*Math.PI*t)*(window.innerWidth/2)
//     }))

// var circle = svg.selectAll("circle").data(data)
// circle.enter().append("circle").attr("r", 1).attr("fill", "red")

// circle.attr("cx",(d)=>d.x)
// .attr("cy",(d)=>d.y)

// t= t+0.1;

// }, 200);



// sine wave with merge
setInterval(() => {
    let n = 50+Math.sin(t*0.2)*50;
    let data = d3.range(0,n,1).map(d=>({
        x: d*20,
        y: 200+Math.sin(d*0.2+t)*100
    }))

const circleUpdate = svg.selectAll("circle").data(data)
const circleEnter  = circleUpdate.enter().append("circle").attr("r", 5).attr("fill", "red")

circleUpdate.merge(circleEnter)
.attr("cx",(d)=>d.x)
.attr("cy",(d)=>d.y)

t= t+0.01;

}, 10);




// // sine wave with join and range
// setInterval(() => {

//     let n = 50 + Math.sin(t)*50
//     let data = d3.range(0,n,0.1).map(d=>({
//         x: d*13,
//         y: 200+Math.sin(d*0.2*t)*100
//     }))

// const circles = svg.selectAll("circle").data(data)
// .join("circle")
// .attr("r", 5)
// .attr("fill", "red")
// .attr("cx",(d)=>d.x)
// .attr("cy",(d)=>d.y)

// t= t+0.1;

// }, 1000/60);




