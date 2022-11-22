(function () {
    // var len = countries.length;
    var input = $("input");
    var results = $("#results");
    var $value = input.val();
    // var lowerCaseCountries = countries.map(function (country) {
    //     return country.toLowerCase();
    // });

    input
        .on("input", function () {
            // we pass the value from the input field

            findAndShowResults(input.val());
        })

        .on("focus", function () {
            // we pass the value from the input field
            findAndShowResults(input.val());
        })
        .on("blur", function () {
            // hide the results
        })
        // not needed yet
        .on("keydown", function (e) {
            // this is gonna be implemented later
            // this is to navigate via arrow keys
        });

    // gets the value from the input field
    // if there is no value -> hides the results

    // finds the results using findResults()
    // and then calls renderResults()

    function findAndShowResults($value) {
        if (!$value) {
            results.hide();
            return;
        }
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: $value,
            },
            success: function (data) {
                // do something with the data here
                // console.log("data", data);
                // console.log("data", data);
                // console.log("$value", $value);
                // console.log("input.val()", input.val());
                results.show();
                getResultsHtml(data);
                //check if $value is the same as what is currently in the input field
                // if not ...return early?
            },
        });

        //val is the value of the whole string
        // call findResults() first
        // then call renderResults()
        // const foundResults = findResults(val);
        // // console.log(foundResults);
        // renderResults(foundResults);
        // TODO:
    }

    // this filters the array of countries
    // gets a string
    // returns an array

    // function findResults(str) {
    //     // const countriesTmp = ["Ghana", "Germany", "Greece"];
    //     // const filteredCountries = countries.filter((country) => {
    //     //     // 1. use toLowerCase() for str
    //     //     // 2. use toLowerCase() for country -> Germany -> germany
    //     //     // 3. make use startsWith() 'country.startsWith(str);'

    //     //     return; // 'country.startsWith(str);' but use toLowerCase() on both string
    //     // });

    //     let filteredCountries = [];

    //     for (let i = 0; i < len; i++) {
    //         if (countries[i].toLowerCase().indexOf(str.toLowerCase()) == 0) {
    //             filteredCountries.push(countries[i]);
    //         }
    //     }

    //     return filteredCountries;
    // }

    // gets an array
    // shows the results using getResultsHtml()
    // function renderResults(foundResults) {
    //     let finalHTML = getResultsHtml(foundResults);
    //     // console.log(finalHTML);
    //

    //     // put the finalHTML to our index.html
    //     // TODO:

    // gets an array
    // if it's empty -> return 'No results'
    // else return a string containing div tags for
    // every result item

    function getResultsHtml(data) {
        let htmlString = "";
        // check if result is empty
        // if it is return a different HTML with fixed message

        for (let i = 0; i < data.length; i++) {
            if (data.length === 0) {
                return (htmlString += "<div>" + "not result found" + "</div>");
            } else {
                htmlString += "<div>" + data[i] + "</div>";
            }
            // append HTML element to htmlString

            // console.log("dataGetResults: ", data[i]);
            // console.log("htmlString ", htmlString);
        }
        results.html(htmlString);
    }
    // console.log(htmlString);
    // return final string
})();
