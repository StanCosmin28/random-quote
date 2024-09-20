const quote = document.getElementById("quote");
const wrapper = document.querySelector(".wrapper");
const btn = document.getElementById("btn");
const profile = document.getElementById("author");

function myQuote() {
  const random = Math.floor(Math.random() * 100);
  wrapper.classList.remove("fade");
  //   wrapper.style.background = "red";
  fetch("quotes.json")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quotes[random].quote;
      getQuote(quote);
      //   console.log(quote, random);

      // console.log(data.author);
    })
    .catch((error) => console.error("Error:", error, random));
}
myQuote();
function getQuote(data) {
  quote.innerText = data;
  // console.log(quote.innerText);
  wrapper.classList.add("fade");
}

btn.addEventListener("click", myQuote);
