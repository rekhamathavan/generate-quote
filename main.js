function random_quote_generator()
{

const quotes = [{
    author: "james",
    quote:"Lorem ipsum dolor sit 1"
},
{
    author: "Rekha",
    quote:"Lorem ipsum dolor sit 2"
},
{
    author: "Ishika",
    quote:"Lorem ipsum dolor sit 3"
},
{
    author: "Safi",
    quote:"Lorem ipsum dolor sit 4"
},
{
    author: "John",
    quote:"Lorem ipsum dolor sit 5"
}
 ]
 


  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
  console.log(quotes[arrayIndex].quote);
  
}

window.onload = function() {
    random_quote_generator()
    document.getElementById("quote-btn").addEventListener('click', random_quote_generator);
}