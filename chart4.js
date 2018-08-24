(function () {
  var chart1 = echarts.init(document.getElementById('chart4'), 'light')
  var option1 = {
    textStyle: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}新增农资主体：{c}'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: []
  }

  axios('CompanyChartMonth').then(({data}) => {
    if (data.Code == 10000) {
      data.Content.YAris[0].areaStyle = {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4362a4'
            }, {
                offset: 1,
                color: '#17253b'
            }])
        }
      }
      option1.series = data.Content.YAris
      option1.xAxis.data = data.Content.XAris
    }
    chart1.setOption(option1)
  })
})()