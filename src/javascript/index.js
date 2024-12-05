function updateTime() {
  let LosAngelesElement = document.querySelector("#los-angeles");
  let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
  let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
  let LosAngelesTime = moment().tz("America/Los_Angeles");

  LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");

  LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

updateTime();
setInterval(updateTime, 1000);
