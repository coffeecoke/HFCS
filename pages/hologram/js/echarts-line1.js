$(function () {
    var myChart1= echarts.init(document.getElementById('echarts-line1'));
    var option1 = {
        tooltip: {
            trigger: 'axis',
            padding:20,
            backgroundColor: 'transparent',  // 提示背景颜色，默认为透明度为0.7的黑色
            // borderColor: '#ccc', 
            textStyle:{
                color:"#000",
            },   
            formatter:function(params){
                return '<div style="background:url(imgs/tooltip.png) no-repeat center;background-size:100%;width:200px;height:120px;">'+
                '<span style="padding:25px 30px 0 30px;display:inline-block;">'+"2018年01月成交额"+'</span></br>'+
                '<span style="padding:0px 30px;display:inline-block;"><b style="font-size:16px;color:#1d3e96;">'+params[0].data+'</b>'+"亿"+'</span>'+
                '<span style="padding:0px 0px;display:inline-block;"><b style="font-size:16px;color:#1d3e96;">'+params[0].data+'</b>'+"%"+'</span></br>'+
                '<span style="padding:0px 30px;display:inline-block;">'+"成交额"+'</span>'+
                '<span style="padding:0px 0px;display:inline-block;">'+"增速"+'</span>'+
                '</div>'

            },
            
        },
        xAxis: {
            type: 'category',
            data: ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07'],
            boundaryGap:false,
            axisTick: {
                show:false,
            },
            axisLabel: {
                color: '#a4a4a4',
                fontSize: 12,
                interval:0,
            },
            splitLine: {
                show: false,
            },
            axisLine:{
                lineStyle:{
                    color:"#dbdbdb"
                }
            },
            gridIndex: 0,
        },
        yAxis: {
            type: 'value',
            min:0,
            max:50,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#a4a4a4',
                fontSize: 12,
                interval:0,
            },
            axisLine:{
                lineStyle:{
                    color:"#dbdbdb"
                }
            },
        },
         grid:{
             top:'10%',
             left:'2%',
             right:'5%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [30,20,30,10,30,20,30],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#c5cfe5'
            },
            z:10,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#75b4fe'
                    }, {
                        offset: 1,
                        color: '#6b82b8'
                    }])
                }
            },
        },{
            data: [20,10,40,30,40,20,40],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#5a73af'
            },
            z:2,
            areaStyle: {
                color:"#5a73af",
                opacity:1,
            },
        }
    ]
    };
myChart1.setOption(option1);
})

$(function () {
    var myChart2= echarts.init(document.getElementById('echarts-line2'));
    var option2 = {
        tooltip: {
            // trigger: 'axis',
            backgroundColor: 'transparent',  // 提示背景颜色，默认为透明度为0.7的黑色
            // borderColor: '#ccc', 
            textStyle:{
                color:"#000"
            },   
            
        },
        xAxis: {
            type: 'category',
            data: ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07'],
            boundaryGap:false,
            axisTick: {
                show:false,
            },
            axisLabel: {
                color: '#a4a4a4',
                fontSize: 12,
                interval:0,
            },
            splitLine: {
                show: false,
            },
            axisLine:{
                lineStyle:{
                    color:"#dbdbdb"
                }
            },
            gridIndex: 0,
        },
        yAxis: {
            type: 'value',
            min:0,
            max:50,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#a4a4a4',
                fontSize: 12,
                interval:0,
            },
            axisLine:{
                lineStyle:{
                    color:"#dbdbdb"
                }
            },
        },
         grid:{
             top:'10%',
             left:'2%',
             right:'5%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [10,12,30,10,30,20,30],
            type: 'line',
            itemStyle:{
                color:'#4261a6'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#cedeff',
                    }, {
                        offset: 1,
                        color: '#fff'
                    }])
                }
            },
        }
    ]
    };
myChart2.setOption(option2);
})