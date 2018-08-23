(function () {
axios('GetMsgsByAll').then(({data}) => {
  if (data.Code == 10000) {
    totol1.innerHTML = data.Content.CompanyTotal
    totol2.innerHTML = data.Content.ProductKindTotal
    totol3.innerHTML = data.Content.BuyNZOrderCount
    totol4.innerHTML = data.Content.TaskNormalTotal
    totol5.innerHTML = data.Content.WarnBasicinfoTotal
  }
})
})()