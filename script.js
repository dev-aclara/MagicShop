// return a random quote when you click 'newquote'
function getNewQuote() {
    fetch("https://magicshop-api.vercel.app/quote/random")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('quoteheading').innerHTML = data.quote;
            document.getElementById("nameheading").innerHTML = data.member;
    })
    .catch((err) => console.log(err));
}

// opens a new window to share the quote on twitter
function getTweet() {
    const quote = document.getElementById('quoteheading').innerHTML;
    const author = document.getElementById("nameheading").innerHTML;
    const tweet = `${quote} — ${author}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&hashtags=BTSCOMFORT`);
}


// function to switch themes (dark/light mode)
const body = document.body;
const h1 = document.getElementsByTagName("h1")[0];
const h4 = document.getElementsByTagName("h4")[0];

function switchTheme() {
 body.classList.toggle("dark-mode");
 h1.classList.toggle("dark-mode");
 h4.classList.toggle("dark-mode");
}