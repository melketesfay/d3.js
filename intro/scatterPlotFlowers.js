let svg = d3
  .select("body")
  .append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight);


let data = d3.csv("https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv",

(d)=>{
  
    d.sepal_length = +d.sepal_length
    d.sepal_width = +d.sepal_width
    d.petal_length = +d.petal_length
    d.petal_width = +d.petal_width

    return d;

}

)

const xValue = (d)=> d.petal_length;
const yValue = (d)=> d.sepal_length;

const petalInfo = (d)=>d.petal_length;
const sepalInfo = (d)=> d.sepal_length;
const speciesInfo = (d)=>d.species;

const speciesColor = (d)=>{
    switch(d.species){
        case "setosa":
            return "red"

        case "versicolor":
            return "yellow"

        case "virginica":
            return "blue"
    }
}


const margin = {
    top:50,
    right:50,
    bottom:50,
    left:50
}

const main = async()=>{ 
    var dataSet = await data; 
  



    const xScale = d3.scaleLinear().domain([d3.min(dataSet,xValue),d3.max(dataSet, xValue)]).range([margin.left,window.innerWidth-margin.right])
    const yScale = d3.scaleLinear().domain([d3.min(dataSet,yValue),d3.max(dataSet, yValue)]).range([window.innerHeight-margin.bottom,margin.top])
    

    const rScale = d3.scaleSqrt().domain([d3.min(dataSet,xValue),d3.max(dataSet, xValue)]).range([1,10])

    let circles = svg.selectAll("circle").data(dataSet).join("circle");




    circles.attr("cx", (d,i)=>xScale(xValue(d))).attr("cy", (d,i)=>yScale(yValue(d))).attr("r",(d,i)=>rScale(xValue(d))).attr("fill",(d)=>speciesColor(d))
    .append("title").text((d)=>speciesInfo(d))

   svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale)).attr("fill","red");
   svg.append("g").attr("transform", `translate(0,${window.innerHeight-margin.bottom})`).call(d3.axisBottom(xScale)).attr("fill","red");
svg.selectAll("text").style("color","green").style("font-size","1.6rem").style("font-weight",900)

d3.selectAll("body").append("h1").attr("class","title").style("color","red")

//.attr("transform",`translate(${400},${400})`)
  
d3.selectAll("circle").on("click", showTitle)
function showTitle(){
    console.log("hallo")
    document.querySelector(".title").innerHTML = this.childNodes[0].innerHTML;
    
}


} 

main()





