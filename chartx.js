(function () {
  // var myChart = echarts.init(document.getElementById('chartx'))
  // echarts.registerMap('cangnan', cnJson)
  // option = {
  //   geo: {
  //     type: 'map',
  //     map: 'cangnan'
  //   },
  //   series: [{
  //     type: 'effectScatter',
  //     coordinateSystem: 'geo',
  //     data: [{
  //       name: 'xxx',
  //       value: [120.5,27.3,200]
  //     }],
  //     symbolSize: function (val) {
  //         return val[2] / 10;
  //     },
  //     showEffectOn: 'render',
  //     rippleEffect: {
  //         scale: 3,
  //         brushType: 'stroke'
  //     },
  //     hoverAnimation: true,
  //     itemStyle: {
  //         normal: {
  //             color: '#f00',
  //             shadowBlur: 10,
  //             shadowColor: '#333'
  //         }
  //     }
  //   }]
  // }
  // myChart.setOption(option)

  var MIN_LAT = 27.136462,
      MAX_LAT = 27.594035,
      MIN_LNG = 120.065237,
      MAX_LNG = 120.703572
  if ("WebSocket" in window) {
    var ws = new WebSocket("ws://121.43.112.129:8104");
    ws.onopen = function () {
      ws.send('连接成功');
    };
    ws.onmessage = function (evt) {
      var data = JSON.parse(evt.data)
      var top = (MAX_LAT - data.fLat) / (MAX_LAT - MIN_LAT)
      var left = (data.fLng - MIN_LNG) / (MAX_LNG - MIN_LNG)
      var dot = document.createElement('div')
      dot.className = 'dot dot-type' + data.fType
      dot.style = `top:${top*100}%;left:${left*100}%`
      chartx.appendChild(dot)
      setTimeout(function () {
        chartx.removeChild(dot)
      }, 10000)
    };
    ws.onclose = function () {
      console.log('连接已关闭');
    }
  } else {
    alert('您的浏览器不支持 WebSocket!');
  }
})()