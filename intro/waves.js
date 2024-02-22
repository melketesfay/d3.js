let svg = d3
  .select("body")
  .append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight);

var t = 0;

// //mesmerize harmonics
// setInterval(() => {
//   let data = d3.range(0, 100, 0.1).map((d) => ({
//     x: d * 20,
//     y: 200 + Math.sin(d * 0.2 * t) * 100,
//   }));

//   var circle = svg.selectAll("circle").data(data);
//   circle.enter().append("circle").attr("r", 5).attr("fill", "red");

//   circle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

//   t = t + 0.1;
// }, 200);

// // full screen mesmerize
// setInterval(() => {
//   let data = d3.range(0, 100, 0.001).map((d) => ({
//     x: 20 * d,
//     y: Math.sin(d * Math.PI * t) * (window.innerWidth / 2),
//   }));

//   var circle = svg.selectAll("circle").data(data);
//   circle.enter().append("circle").attr("r", 1).attr("fill", "red");

//   circle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

//   t = t + 0.5;
// }, 1000 / 60);

// // sine wave with merge
// setInterval(() => {
//     let n = 50+Math.sin(t*0.2)*50;
//     let data = d3.range(0,n,1).map(d=>({
//         x: d*20,
//         y: 200+Math.sin(d*0.2+t)*100
//     }))

// const circleUpdate = svg.selectAll("circle").data(data)
// const circleEnter  = circleUpdate.enter().append("circle").attr("r", 5).attr("fill", "red")

// circleUpdate.merge(circleEnter)
// .attr("cx",(d)=>d.x)
// .attr("cy",(d)=>d.y)

// t= t+0.01;

// }, 10);

// // sine wave with join and range path
// setInterval(() => {

//     let n = 50 + Math.sin(t)*50
//     let data = d3.range(0,100,1).map(d=>({
//         x: d*15,
//         y: 400+Math.sin(d*0.4+t)*400,
//         r: 10+Math.sin(d+t)*5
//     }))

// const circles = svg.selectAll("circle").data(data)
// .join("circle")
// .attr("fill", "red")
// .attr("cx",(d)=>d.x)
// .attr("cy",(d)=>d.y)
// .attr("r", (d)=>d.r)

// const lineGenerator = d3.line().x((d)=>d.x).y((d)=>d.y);
// // .curve(d3.curveBasis);

// svg.selectAll("path").data([1])

// .join("path").attr("d",lineGenerator(data)).attr("stroke", "red").attr("fill","none").attr("stroke-width",2);

// t= t+0.01;

// }, 1000/60);

// sine wave with join and range path
setInterval(() => {
  let n = 50 + Math.sin(t) * 50;
  let data = d3.range(0, 10, 0.7);

  data = data.map((d) => ({
    x: d * 80,
    y: 100 - Math.abs(Math.sin(d + t * 0.2) * 50),
    r: 10 + Math.sin(d + t) * 5,
  }));

  data[0].y = 100;
  data[data.length - 1].y = 100;
  console.log(data);

  const lineGenerator = d3
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveBasis);

  svg
    .selectAll("path")
    .data([1])

    .join("path")
    .attr("d", lineGenerator(data))
    .attr("stroke", "red")
    .attr("fill", "red")
    .attr("stroke-width", 2);

  t = t + 0.01;
}, 1000 / 60);
