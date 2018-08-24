(function () {
  var chart1 = echarts.init(document.getElementById('chart1'), 'light')
  var option1 = {
    textStyle: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.5)'
      },
      data: ['过量', '过期', '过界']
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: []
  }

  axios('WarnBasicinfoChartDay').then(({data}) => {
    if (data.Code == 10000) {
      option1.series = data.Content.YAris
      option1.xAxis.data = data.Content.XAris
    }
    chart1.setOption(option1)
  })
})()