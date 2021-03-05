var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
        datasets: [{
            label: 'PREDICTED_CONIFER_VOLUME',
            data: [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025],
            backgroundColor: "#00A5BB",
        },
            {
            label: 'PREDICTED_DECID_VOLUME',
            data: [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661],
            backgroundColor: "#D5F0F3"
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    borderDash: [4, 5],
                    color: "#EAEDF2"
                }
            }],
            xAxes : [ {
                gridLines : {
                    display : false
                },
                stacked: true,
                barPercentage: 0.4,
            } ]
        },
        layout: {
            padding: {
                left: 16,
                right:16,
                top: 32,
                bottom: 16
            }
        },
        legend: {
            labels: {
                defaultFontColor: '#555A64',
                defaultFontSize: 12,
                defaultFontFamily: "'Roboto', sans-serif;",
                boxWidth: 12,
            },
            position: 'bottom',
            align: 'center',
        }
    },
});