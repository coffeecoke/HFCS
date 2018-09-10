$(function () {
    var myChart1 = echarts.init(document.getElementById('echarts-radar'));
 var option1 = {
    radar: [
        {
            indicator: [
                { text: '石家庄市',max:'100',data:'60'},
                { text: '衡水市' ,max:'100',data:'45'},
                { text: '廊坊市',max:'100' ,data:'20'},
                { text: '沧州市',max:'100',data:'10' },
                { text: '承德市' ,max:'100',data:'30'},
                { text: '张家口市',max:'100',data:'20' },
                { text: '保定市' ,max:'100',data:'50'},
                { text: '邢台市' ,max:'100',data:'20'},
                { text: '邯郸市',max:'100',data:'70' },
                { text: '秦皇岛市',max:'100',data:'80' },
                { text: '唐山市',max:'100',data:'50' },
            ],

            center: ['45%', '50%'],
            radius: 90,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter: function(value,indicator) {
                    
                    var val=indicator.data;
                    return '{a|' + value + '}{b|'+val+'}'

                },
                rich: {
                    a: {
                        color: '#999',
                        fontSize: 12,
                    },
                    b: {
                        fontWidth: 'bold',
                        color:'#000',
                        fontSize:'20'
                    },
                    c: {
                        color: '#000'
                    }
                },
                textStyle: {
                    color: '#fff'
                }
            },
            splitArea: {
                areaStyle: {
                    color:'#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#afc1fc',
                    type:'dashed'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#657eb6',"#b4cced","#dce3f7","#dce3f7"]
                }
            }
        },
        
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [
                
                {
                    value: [60, 45, 20, 10,30,20,50,20,70,80,50],
                    name: '图二',
                    symbolSize:0,
                    areaStyle: {
                        normal: {
                            color: '#4e69a3',
                            opacity:1,
                            shadowColor:"#4e69a3",
                            shadowBlur:100
                        }
                    },
                    lineStyle:{
                        color:"#4e69a3"
                    }
                }
            ]
        },
       
    ]
}

myChart1.setOption(option1);
})