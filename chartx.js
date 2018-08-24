(function () {
  var myChart = echarts.init(document.getElementById('chartx'))
  echarts.registerMap('wz', cnJson)
  var option = {
    title: {
      text: '温州市农资监管平台',
      // link: 'http://121.43.112.129:8100',
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
      data: [],
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

  if ("WebSocket" in window) {
    var ws = new WebSocket("ws://47.105.116.152:5210")
    ws.onopen = function () {
      ws.send('连接成功')
    }
    ws.onmessage = function (evt) {
      var data = JSON.parse(evt.data)
      var arr = option.series[0].data
      if (arr.length > 5) {
        arr.shift()
      }
      arr.push({
        name: data.id,
        value: [data.fLng, data.fLat, 100]
      })
      myChart.setOption(option)
    }
    ws.onclose = function () {
      console.log('连接已关闭')
    }
  } else {
    alert('您的浏览器不支持 WebSocket!')
  }
})()