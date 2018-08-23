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
      type: 'category',
      //data: ['一月', '二月', '三月', '四月', '五月', '六月']
      data: ['十一月', '十二月','一月', '二月', '三月', '四月']
    },
    yAxis: {
      type: 'value'
    },
    series: []
  }

  axios('WarnBasicinfoChartDay').then(({data}) => {
    if (data.Code == 10000) {
      option1.series = data.Content.ListWarnBasicinfo
    }
    chart1.setOption(option1)
  })
})()