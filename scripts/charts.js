//var ChartistPluginScript = document.createElement('script');
//ChartistPluginScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/chartist-plugin-legend/0.6.2/chartist-plugin-legend.js');
//document.head.appendChild(ChartistPluginScript);

//General for all Charts
var options = {
    seriesBarDistance: 10,
    chartPadding: 32,
    scaleMinSpace: 100,
    height: 450,
    plugins: [
        Chartist.plugins.legend({
        })
    ]
};

// Options for Area Chart only
var optionsAreaChart = {
    seriesBarDistance: 10,
    chartPadding: 32,
    scaleMinSpace: 100,
    height: 450,
    low: 0,
    showArea: true,
    plugins: [
        Chartist.plugins.legend({
        })
    ]
};

// Options for Stacked Bar Chart only
var optionsStackedBarChart = {
    seriesBarDistance: 10,
    chartPadding: 32,
    scaleMinSpace: 100,
    height: 450,
    low: 0,
    showArea: true,
    stackBars: true,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    },
    plugins: [
        Chartist.plugins.legend({
        })
    ]
};

// Options for Horizontal Bar Chart only
var optionsHorizontalBarChart = {
    seriesBarDistance: 6,
    chartPadding: 32,
    scaleMinSpace: 100,
    height: 450,
    reverseData: true,
    horizontalBars: true,
    axisY: {
        offset: 70
    },
    plugins: [
        Chartist.plugins.legend({
        })
    ]
};


var responsiveOptions = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];


// Simple Bar Chart Data
var dataBarChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};

// Stacked Bar Chart Data
var dataStackedBarChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};

// Horizontal Bar Chart Data
var dataHorizontalBarChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};

// Simple Line Chart Data
var dataLineChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [12685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]},
    ]
};

// Area Line Chart Data
var dataAreaLineChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [12685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]},
    ]
};

// Create Bar Chart
new Chartist.Bar('#chart1', dataBarChart, options, responsiveOptions);

// Create Stacked Bar Chart
new Chartist.Bar('#chart2', dataStackedBarChart, optionsStackedBarChart, responsiveOptions);

// Create Horizontal Bar Chart
new Chartist.Bar('#chart3', dataHorizontalBarChart, optionsHorizontalBarChart, responsiveOptions);

// Create Line Chart
new Chartist.Line('#chart4', dataLineChart, options, responsiveOptions);

// Create Area Line Chart
new Chartist.Line('#chart5', dataAreaLineChart, optionsAreaChart, responsiveOptions);



//document.getElementById("button-collapse").addEventListener("click",function(){
//    document.querySelector(".ct-chart").style.display = "block";
//    //Update the chart
//    document.querySelector(".ct-chart").__chartist__.update();
//})