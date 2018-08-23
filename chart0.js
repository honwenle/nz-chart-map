(function () {
  var chart0 = echarts.init(document.getElementById('chart0'), 'light')
  var option0 = {
    textStyle: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      orient: 'vertical',
      x: '80%',
      top: 'center',
      itemGap: 30,
      align: 'left',
      data: ['待审核', '审核通过', '审核驳回']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false
        }
      },
      data: []
    }]
  };

  axios('ProductAuthChart').then(({data}) => {
    if (data.Code == 10000) {
      option0.series[0].data = [{name:'待审核', value: 10},{name:'审核通过', value: 10},{name:'审核驳回', value: 10}]
      // option0.series[0].data = data.Content.ListArrayProductAuthCart
    }
    chart0.setOption(option0)
  })
})()