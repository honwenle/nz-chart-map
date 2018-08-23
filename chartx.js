(function () {
  var myChart = echarts.init(document.getElementById('chartx'))
  echarts.registerMap('wz', cnJson)
  var option = {
    geo: {
      type: 'map',
      map: 'wz'
    },
    series: [{
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [{
        name: 'xxx',
        value: [120.5, 27.3, 200]
      }],
      symbolSize: function (val) {
        return val[2] / 10;
      },
      showEffectOn: 'render',
      rippleEffect: {
        scale: 3,
        brushType: 'stroke'
      },
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: '#63DDDF',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      }
    }]
  }
  myChart.setOption(option)
})()