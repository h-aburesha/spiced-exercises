const headlines = $("#headlines");
const ticker = $("#ticker");
let firstLink;

$(function () {
    $.get("/links.json", function (data) {
        data.forEach((tickerTweet) => {
            $("#headlines").append(
                `<a href="${tickerTweet.tweetUrl}">
                <em>"${tickerTweet.newsProviderName}"</em> : ${tickerTweet.tweetText} - Dated: "${tickerTweet.tweetDate}"
                </a>`
            );
        });
    });
    moveLeft();
});

let widthOfHeadlines = ticker.outerWidth();
// console.log("widthOfHeadlines:", widthOfHeadlines);

let currentLeftValue = widthOfHeadlines;
let id;

function moveLeft() {
    id = requestAnimationFrame(() => {
        firstLink = $("a").eq(0);
        if (headlines.offset().left + firstLink.outerWidth() < 0) {
            headlines.remove(firstLink);
            headlines.append(firstLink);

            currentLeftValue = 0;
            headlines.css({ left: currentLeftValue + "px" });
        }

        headlines.css({ left: currentLeftValue + "px" });
        currentLeftValue -= 3;
        moveLeft();
    });
}

ticker
    .on("mouseenter", function () {
        // console.log("mouseenter");
        cancelAnimationFrame(id);
    })
    .on("mouseleave", function () {
        // console.log("mouseleave");
        moveLeft();
    });
