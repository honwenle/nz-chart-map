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
    legend: [{
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      orient: 'vertical',
      x: '10%',
      top: 'center',
      itemGap: 30,
      align: 'left',
      data: ['农药', '兽药']
    }, {
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      orient: 'vertical',
      x: '60%',
      top: 'center',
      itemGap: 30,
      align: 'left',
      data: ['待审核', '审核通过', '审核驳回', '未审核']
    }],
    series: [{
      name: '农资比例',
      type: 'pie',
      center : ['35%', '50%'],
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false
        }
      },
      data: []
    }, {
      name: '审核情况',
      type: 'pie',
      center : ['85%', '50%'],
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
      option0.series[0].data = data.Content.ListArrayProductAuthCart
      option0.series[1].data = data.Content.ListArrayProductAuthStateCart
    }
    chart0.setOption(option0)
  })
})()