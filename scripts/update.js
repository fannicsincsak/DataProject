document.getElementById("button-collapse").addEventListener("click",function(){
    document.querySelector(".ct-chart").style.display = "block";
    //Update the chart
    document.querySelector(".ct-chart").__chartist__.update();
})

