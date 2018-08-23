(function () {
axios.post('http://121.43.112.129:8102/Statistics/Summary').then(({data}) => {
  companycount.innerHTML = data.Model.companycount
  nzcount.innerHTML = data.Model.nzcount
  customercount.innerHTML = data.Model.customercount
  taskcount.innerHTML = data.Model.taskcount
  alertcount.innerHTML = data.Model.alertcount
})
})()