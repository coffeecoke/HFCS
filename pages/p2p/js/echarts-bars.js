$(function () {
    var myChart = echarts.init(document.getElementById('echarts-bars'));
var option = {
    
    grid:{
        top:'10%',
        left:'2%',
        right:'5%',
        bottom:0,
        containLabel:true
    },
    legend: {
        show: true,
        left: 'right',
        itemWidth:10,
        itemHeight:10,
        data: [
            {name:'借贷人',icon:'rect'},
        ]
    },
    xAxis: {
        type: 'category',
        data:['2017/8','2017/9','2017/10','2017/11','2017/12','2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07','2018/08'],
        boundaryGap:true,
        axisLabel: {
            textStyle: {
                color: '#ccc',
                interval:0,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:"#dbdbdb"
            }
        },
    },
    yAxis: {
        max: 3.5,
        min: 0,
        axisLine: {
            show: true,
            lineStyle:{
                color:"#dbdbdb"
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    series: [
       
        {
            type: 'bar',
            name:"借贷人",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#3b5ba2',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [1,0.5,1,0.8,1.5,2,1,0.6,1,2.5,2,0.5,1]
        }
    ]
};

myChart.setOption(option);
});