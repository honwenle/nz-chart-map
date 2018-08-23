(function () {
  var myChart = echarts.init(document.getElementById('chartx'))
  echarts.registerMap('wz', cnJson)
  var option = {
    title: {
      text: '温州市农资监管平台',
      link: 'http://121.43.112.129:8100',
      x:'center',
      textStyle: {
        fontSize: '50',
        color: '#fff'
      }
    },
    geo: {
      type: 'map',
      map: 'wz',
      aspectScale: .9,
      zoom: 1.2,
      label: {
        show: true,
        color: '#FFF',
        fontSize: '14'
      },
      itemStyle: {
        areaColor: '#061020',
        borderColor: '#587AAE',
        borderWidth: '3'
      },
      emphasis: {
        label: {
          color: '#FFF'
        },
        itemStyle: {
          areaColor: '#4C84FD',
          borderColor: '#63DDDF'
        }
      }
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