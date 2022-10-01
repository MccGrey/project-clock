function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  if (hrs > 12) {
    hrs -= 0;
  }

  if (hrs < 12) {
    greet = "☀  good morning";
  }

  if (hrs >= 12 && hrs <= 24) {
    greet = "🌙  good evening";
  }

  if (min < 10) {
    min = "0" + min;
  }

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("timeoOf_day").innerHTML = greet;
}
setInterval(displayTime, 10);
