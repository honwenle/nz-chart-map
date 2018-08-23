(function () {
  var chart0 = echarts.init(document.getElementById('chart0'), 'light')
  option0 = {
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
      x: 'right',
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

  axios('http://47.105.116.152:5209/GISMap/GetCompanyList').then(({data}) => {
    if (data.Code == 10000) {
      // option0.series[0].data = data.Content.List
      option0.series[0].data = [{name: 'a', value: 12}, {name: 'B', value: 122}]
    }
    chart0.setOption(option0)
  })
})()