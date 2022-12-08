$(function () {
    $.get(".http://localhost:8080/links.json", function (data) {
        data.forEach((tickerTweet) => {
            $("#headlines").append(
                `<a href="${tickerTweet.url}">${tickerTweet.text} - Dated: "${tickerTweet.date}"</a>`
            );
        });
    });
    moveLeft();
});

const headlines = $("#headlines");

let firstLink;

const ticker = $("#ticker");

let widthOfHeadlines = ticker.outerWidth();
console.log("widthOfHeadlines:", widthOfHeadlines);

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
        currentLeftValue -= 5;
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
