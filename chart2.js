(function () {
  var chart1 = echarts.init(document.getElementById('chart2'), 'light')
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
      data: ['定点巡查', '双随机', '监督抽检']
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

  axios.post('http://121.43.112.129:8102/Statistics/GetTaskByMonth').then(({data}) => {
    if (data.Code == 1) {
      option1.series = data.List
    }
    chart1.setOption(option1)
  })
})()