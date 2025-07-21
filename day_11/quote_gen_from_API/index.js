const quoteElm = document.getElementById("quote");
const getterElm = document.getElementById("getter");

const getQuote = async () => {
  quoteElm.innerHTML = `Loading...`;
  const res = await fetch(`https://dummyjson.com/quotes/random`);
  const quote = await res.json();

  quoteElm.innerHTML = `${quote.quote} <br/><br/> - <span class="italic">By ${quote.author}</span>`;
};

getterElm.addEventListener("click", getQuote);
