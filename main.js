const quote = document.getElementById("quote");
const author = document.getElementById("quote_author");

//---------------FOR RANDOM QUOTES
fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    quote.innerHTML = '"' + data.content + '"';
    author.innerHTML = "-" + data.author;
  });

function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  if (hrs > 12) {
    hrs -= 0;
  }

  if (hrs < 12) {
    greet = "☀ good morning";
    document.body.style.backgroundImage = " url(./assets/bonjour.jpg)";
  }

  if (hrs >= 12 && hrs < 18) {
    greet = "🔅 good afternoon";
    document.body.style.backgroundImage = "url(./assets/noon.jpg)";
  }

  if (hrs >= 18 && hrs <= 24) {
    greet = "🌙 good evening";
    document.body.style.backgroundImage = "url(./assets/buena_noches.jpg)";
  }

  if (min < 10) {
    min = "0" + min;
  }

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("timeoOf_day").innerHTML = greet;
}
setInterval(displayTime, 10);
