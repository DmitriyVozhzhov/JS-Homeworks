let time = setInterval(function() {
  let date = new Date();
  document.getElementById("local_time").innerHTML = 'Время:' + ' ' + (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds() );
}, 100);
