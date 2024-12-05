function updateTime() {
  let LosAngelesElement = document.querySelector("#los-angeles");
  if (LosAngelesElement) {
    let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
    let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
    let LosAngelesTime = moment().tz("America/Los_Angeles");

    LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");

    LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
  let SydneyElement = document.querySelector("#Sydney");
  if (SydneyElement) {
    let SydneyDateElement = SydneyElement.querySelector(".date");
    let SydneyTimeElement = SydneyElement.querySelector(".time");
    let SydneyTime = moment().tz("Australia/Sydney");

    SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

    SydneyTimeElement.innerHTML = SydneyTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
         </div>
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")} </small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
