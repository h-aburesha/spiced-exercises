let button = document.querySelector(".search-button");
// console.log(button);
let resultContainer = document.querySelector(".result-container");
// console.log(resultContainer);
let select = document.querySelector(".type");
// console.log(select);
let input = document.querySelector(".search-input");
// console.log(input);

button.addEventListener("click", () => {
    console.log("Input: ", input.value);
    console.log("Select: ", select.value);

    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify", // url from spiced server -> look into the lesson notes
        data: {
            q: input.value,
            type: select.value,

            // q will get value of input field
            // type will get value of select
        },
        success: function (data) {
            const results = data.artists || data.albums;
            nextUrl = results.url;
            console.log("nextURL", nextUrl);

            const items = results.items;
            console.log("Items: ", items);
            const itemsAdj = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url }; // get the name property from item and first image
            });
            renderResults(itemsAdj, false);
        },
        error: function (error) {
            // log the error for now
            console.log("Error: ", error);
        },
    });
});

function renderResults(items, shouldAppend) {
    let htmlString = "";
    for (let i = 0; i < items.length; i++) {
        htmlString +=
            "<div class='result-item'>" +
            "<img src='" +
            items[i].imageUrl +
            "'>" +
            "<span>" +
            items[i].name +
            "</span>" +
            "</div>";
    }
    if ((shouldAppend = true)) {
        resultContainer.innerHTML = htmlString;
    } else {
        resultContainer.innerHTML += htmlString;
    }
    // console.log("HTMLString: ", htmlString);

    // resultContainer.innerHTML += htmlString;
}

document.addEventListener("scroll", function (event) {
    checkForNewDiv();
});

var checkForNewDiv = function () {
    var lastDiv = document.querySelector("#scroll-content > div:last-child");
    var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastDivOffset - 20) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "my awesome new div";
        document.getElementById("scroll-content").appendChild(newDiv);
        checkForNewDiv();
    }
};

$.ajax({});

// additional eventListener for our new button
// we will make a new $.ajax request based on our global nextUrl variable
