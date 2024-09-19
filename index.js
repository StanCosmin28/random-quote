// const url = "https://api.chess.com/pub/player/cosmin3463";
const url = "http://api.quotable.io/random?tags=wisdom|success";
const quote = document.getElementById("quote");
const wrapper = document.querySelector(".wrapper");
const btn = document.getElementById("btn");

function myQuote() {
  wrapper.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      getQuote(data.content);
      console.log(data.author);
    })
    .catch((error) => console.error("Error:", error));
}
myQuote();
function getQuote(data) {
  quote.innerText = data;
  console.log(quote.innerText);
  wrapper.classList.add("fade");

  // wrapper.classList.remove("fade");
}

btn.addEventListener("click", myQuote);
