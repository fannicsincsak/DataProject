var ChartistPluginScript = document.createElement('script');
ChartistPluginScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/chartist-plugin-legend/0.6.2/chartist-plugin-legend.min.js');
document.head.appendChild(ChartistPluginScript);

//General for all Charts
var options = {
    seriesBarDistance: 10,
    chartPadding: 32,
    scaleMinSpace: 100,
    height: 450,
    plugins: [
        Chartist.plugins.legend({
            legendNames: ['Custom title', 'Another one'],
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


// Chart #1 Data
var data1 = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025],
        [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]
    ]
};

// Chart #2 Data
var data2 = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        [12685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025],
        [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]
    ]
};

// Create Chart #1
new Chartist.Bar('#chart1', data1, options, responsiveOptions);

// Create Chart #2
new Chartist.Line('#chart2', data2, options, responsiveOptions);