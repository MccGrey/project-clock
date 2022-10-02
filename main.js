function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours() + 5;
  var min = dateTime.getMinutes();

  if (hrs > 12) {
    hrs -= 0;
  }

  if (hrs < 12) {
    greet = "☀  good morning";
    document.body.style.backgroundImage = " url(./assets/morning.jpg)";
  }

  if (hrs >= 12 && hrs <= 24) {
    greet = "🌙  good evening";
    document.body.style.backgroundImage = "url(./assets/night.jpg)";
  }

  if (min < 10) {
    min = "0" + min;
  }

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("timeoOf_day").innerHTML = greet;
}
setInterval(displayTime, 10);
